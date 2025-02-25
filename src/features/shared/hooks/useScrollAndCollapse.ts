import { useState, useCallback } from 'react';

const useScrollAndCollapse = () => {
  const [collapse, setCollapse] = useState(false);
  const handleLink = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setCollapse(false);
  }, []);

  const toggleCollapse = useCallback(() => {
    setCollapse((prev) => !prev);
  }, []);

  return { collapse, handleLink, toggleCollapse };
};

export default useScrollAndCollapse;
