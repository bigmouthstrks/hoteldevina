import { createContext } from 'react';

export interface TitleContextType {
  title: string;
  setTitle: (value: string) => void;
}

export const TitleContext = createContext<TitleContextType | undefined>(undefined);
