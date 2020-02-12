import { useCallback, useEffect, useRef } from 'react';

import useAttachableCallback from './useAttachableCallback';

const useVisible = <E extends Element>() => {
  const nodeToPosition = useRef(new Map<E, number>());
  const nodeToVisibleState = useRef(new Map<E, boolean>());

  // instantiate the observer and create a method for observing new elements
  const observer = useRef<null | IntersectionObserver>(null);

  const addNode = useCallback((newNode: E, index: number) => {
    if (observer.current && !nodeToPosition.current.has(newNode)) {
      observer.current.observe(newNode);
      nodeToPosition.current.set(newNode, index);
      nodeToVisibleState.current.set(newNode, false);
    }
  }, []);

  // set up the callbacks for when the first and last visible items change
  const [firstVisibleCallback, onFirstVisibleChange] = useAttachableCallback<
    (node: E, index: number) => void
  >();

  const [lastVisibleCallback, onLastVisibleChange] = useAttachableCallback<
    (node: E, index: number) => void
  >();

  const [visibleChangeCallback, onVisibleChange] = useAttachableCallback<
    (visibleIdxs: number[]) => void
  >();

  useEffect(() => {
    type ElementWithPosition = [number, E];

    observer.current = new IntersectionObserver(
      entries => {
        const newlyVisibleEntries = entries
          .filter(node => node.isIntersecting)
          .map(
            ({ target }) =>
              [
                nodeToPosition.current.get(target as E),
                target,
              ] as ElementWithPosition,
          )
          .sort((a, b) => a[0] - b[0]);

        const newlyHiddenEntries = entries
          .filter(node => !node.isIntersecting)
          .map(
            ({ target }) =>
              [
                nodeToPosition.current.get(target as E),
                target,
              ] as ElementWithPosition,
          )
          .sort((a, b) => b[0] - a[0]); // sort in reverse order

        // mark the appropriate visible/hidden states
        newlyVisibleEntries.forEach(([_, el]) =>
          nodeToVisibleState.current.set(el, true),
        );
        newlyHiddenEntries.forEach(([_, el]) =>
          nodeToVisibleState.current.set(el, false),
        );

        const firstNewlyVisible = newlyVisibleEntries[0];
        const lastNewlyHidden = newlyHiddenEntries[0];

        if (firstNewlyVisible && firstVisibleCallback.current) {
          firstVisibleCallback.current(
            firstNewlyVisible[1],
            firstNewlyVisible[0],
          );
        }

        if (lastNewlyHidden && lastVisibleCallback.current) {
          lastVisibleCallback.current(lastNewlyHidden[1], lastNewlyHidden[0]);
        }

        if (visibleChangeCallback.current) {
          const visibleIdxs = Array.from(nodeToVisibleState.current.entries())
            .reduce((acc, [el, isVisble]) => {
              const idx = nodeToPosition.current.get(el);
              if (isVisble && idx !== undefined) {
                acc.push(idx);
              }
              return acc;
            }, [] as number[])
            .sort();

          visibleChangeCallback.current(visibleIdxs);
        }
      },
      { threshold: 0.25 },
    );

    return () => {
      observer.current && observer.current.disconnect();
    };
  }, [firstVisibleCallback, lastVisibleCallback, visibleChangeCallback]);

  return {
    addNode,
    onFirstVisibleChange,
    onLastVisibleChange,
    onVisibleChange,
  };
};

export default useVisible;
