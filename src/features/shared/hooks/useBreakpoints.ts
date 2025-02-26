import { BREAKPOINTS } from '@models/consts';
import { useState, useEffect } from 'react';

const useBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<BREAKPOINTS | string>(BREAKPOINTS.xs);

  useEffect(() => {
    const calculateBreakpoint = () => {
      const windowWidth = window.innerWidth;
      const breakpoint = Object.entries(BREAKPOINTS).find(([, value]) => {
        return windowWidth < Number(value);
      });
      setCurrentBreakpoint((breakpoint?.[0] ?? 'xxl') as keyof typeof BREAKPOINTS);
    };
    calculateBreakpoint();
    window.addEventListener('resize', calculateBreakpoint);
    return () => {
      window.removeEventListener('resize', calculateBreakpoint);
    };
  }, []);

  const isDown = (breakpointName: keyof typeof BREAKPOINTS) => {
    const currentBreakpointValue = BREAKPOINTS[currentBreakpoint as keyof typeof BREAKPOINTS];
    const targetBreakpointValue = BREAKPOINTS[breakpointName];

    return Number(currentBreakpointValue) < Number(targetBreakpointValue);
  };

  const isUp = (breakpointName: keyof typeof BREAKPOINTS) => {
    const currentBreakpointValue = BREAKPOINTS[currentBreakpoint as keyof typeof BREAKPOINTS];
    const targetBreakpointValue = BREAKPOINTS[breakpointName];
    return Number(currentBreakpointValue) >= Number(targetBreakpointValue);
  };

  const isEqual = (breakpointName: keyof typeof BREAKPOINTS) => {
    return currentBreakpoint === breakpointName;
  };

  return {
    currentBreakpoint,
    isDown,
    isUp,
    isEqual,
  };
};

export default useBreakpoint;
