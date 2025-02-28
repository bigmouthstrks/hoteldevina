import { createContext } from 'react';

interface FetchContextType<T> {
  data: T;
  loading: boolean;
  error: string | null;
  get: (url: string, body?: T, headers?: HeadersInit) => Promise<T>;
  post: (url: string, body?: T, headers?: HeadersInit) => Promise<T>;
  put: (url: string, body?: T, headers?: HeadersInit) => Promise<T>;
  remove: (url: string, headers?: HeadersInit) => Promise<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FetchContext = createContext<FetchContextType<any> | undefined>(undefined);
