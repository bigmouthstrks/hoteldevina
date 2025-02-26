import TitleContext from '@shared/context/title-context';
import { useContext } from 'react';

const useTitle = () => {
  const context = useContext(TitleContext);
  if (!context) {
    throw new Error('useTitle must be used within an TitleProvider');
  }
  return context;
};

export default useTitle;
