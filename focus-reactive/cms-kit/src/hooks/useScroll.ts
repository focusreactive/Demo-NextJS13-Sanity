import { useEffect } from 'react';

const useScrollListener = (cb: () => void) => {
  useEffect(() => {
    window.addEventListener('scroll', cb);

    return () => {
      window.removeEventListener('scroll', cb);
    };
  }, [cb]);
};

export default useScrollListener;
