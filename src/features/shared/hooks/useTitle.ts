import { TitleContext } from '@shared/context';
import { useContext } from 'react';

export const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('useTitle must be used within an TitleProvider');
  }
  return context;
};
