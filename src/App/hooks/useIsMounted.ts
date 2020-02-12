import { useRef, useEffect } from 'react';

const useIsMounted = () => {
  const mountState = useRef(false);
  useEffect(() => {
    mountState.current = true;
    return () => {
      mountState.current = false;
    };
  }, []);
  return mountState;
};

export default useIsMounted;
