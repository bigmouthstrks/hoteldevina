import { useState, useEffect } from 'react';

export const useSticky = (initialSticky = false, scrollThreshold = 100) => {
  const [isSticky, setIsSticky] = useState(initialSticky);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollThreshold]);

  const toggleSticky = () => {
    setIsSticky((prev) => !prev);
  };

  return { isSticky, toggleSticky };
};
