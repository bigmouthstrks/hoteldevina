import { FetchContext } from '@shared/context';
import { useContext } from 'react';

export const useFetch = () => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error('useFetchContext debe usarse dentro de un FetchProvider');
  }
  return context;
};
