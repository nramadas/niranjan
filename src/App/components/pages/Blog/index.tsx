import React, { useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import Article from '../../display/Article';
import useArticles from '../../../hooks/useArticles';
import useVisible from '../../../hooks/useVisible';

interface UrlParams {
  id: string;
  title: string;
}

const Blog = () => {
  const history = useHistory();
  const route = useRouteMatch<UrlParams>();
  const visibility = useVisible<HTMLDivElement>();

  const startingId = route.params.id ? parseInt(route.params.id) : undefined;
  const results = useArticles({ startingId, count: 2 });

  // make the initial fetch for articles
  useEffect(results.loadMore, []);

  // keep track of visible elements on the page, and use it to update
  // the url
  visibility.onVisibleChange(visibleIdxs => {
    const firstVisibleIndex = visibleIdxs[0];
    const article = results.articles[firstVisibleIndex];
    if (article) {
      history.replace(`/blog/${article.id}/${article.title}`);
    }
  });

  // when the last element appears, fetch more articles
  visibility.onLastVisibleChange((_, index) => {
    if (index === results.articles.length - 1) {
      results.loadMore();
    }
  });

  return (
    <div>
      {results.articles.map((article, i) => (
        <Article
          content={article.content}
          date={article.created}
          key={article.id}
          id={article.id}
          ref={ref => ref && visibility.addNode(ref, i)}
          title={article.title}
        />
      ))}
    </div>
  );
};

export default Blog;
