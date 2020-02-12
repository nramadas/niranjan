import { useCallback, useRef } from 'react';

const useAttachableCallback = <F extends Function>(): [
  React.MutableRefObject<F | null>,
  (fn: F) => void,
] => {
  const cb = useRef<null | F>(null);
  const attach = useCallback((fn: F) => {
    cb.current = fn;
  }, []);

  return [cb, attach];
};

export default useAttachableCallback;
