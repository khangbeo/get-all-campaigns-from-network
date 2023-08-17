import { useRef, useEffect } from 'react';

const useLoadingBar = (status) => {
  const loadingBarRef = useRef(null);

  useEffect(() => {
    if (status === 'loading') {
      loadingBarRef.current.continuousStart();
    } else {
      loadingBarRef.current.complete();
    }
  }, [status]);

  return loadingBarRef;
};

export default useLoadingBar;
