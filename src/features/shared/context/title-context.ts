import { createContext } from 'react';

export interface TitleContextType {
  title: string;
  setTitle: (value: string) => void;
}

const TitleContext = createContext<TitleContextType | undefined>(undefined);

export default TitleContext;
