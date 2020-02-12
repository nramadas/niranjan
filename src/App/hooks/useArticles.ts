import { useContext, useState } from 'react';
import { pipe, subscribe } from 'wonka';
import { Context, createRequest } from 'urql';

import { Node } from '../components/display/RichText';
import useIsMounted from './useIsMounted';

interface Article {
  content: Node[];
  created: number;
  id: number;
  title: string;
}

interface State {
  articles: Article[];
  error: any;
  pending: boolean;
}

const getArticles = `
  query ArticleListing($count: Int!, $after: ID) {
    getLatestArticles(count: $count, after: $after) {
      created
      id
      title
      content {
        ...child
        children {
          ...child
          children {
            ...child
            children {
              ...child
            }
          }
        }
      }
    }
  }

  fragment child on Node {
    bold
    code
    italic
    text
    type
    underline
  }
`;

interface Options {
  count?: number;
  startingId?: number;
}

const useArticles = (options: Options = {}) => {
  const [state, setState] = useState<State>({
    articles: [],
    error: null,
    pending: false,
  });

  const client = useContext(Context);
  const isMounted = useIsMounted();

  const loadMore = () => {
    if (state.pending) return;
    setState(prev => ({ ...prev, pending: true }));
    const lastArticle = state.articles[state.articles.length - 1];
    // Ids are sequential, with older items having a lower Id than a newer item.
    // If we want to include the article that the startingId represents, we need
    // to use an `after` that is slightly larger than the startingId.
    const after = lastArticle
      ? lastArticle.id
      : options.startingId
      ? options.startingId + 1
      : undefined;

    const request = createRequest(getArticles, {
      after,
      count: options.count || 1,
    });

    pipe(
      client.executeQuery(request),
      subscribe(({ data, error }) => {
        const articles = state.articles.concat(
          (data && data.getLatestArticles) || [],
        );

        if (isMounted.current) {
          setState({
            articles,
            error: error || null,
            pending: false,
          });
        }
      }),
    );
  };

  return { ...state, loadMore };
};

export default useArticles;
