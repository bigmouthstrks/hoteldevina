import { FetchContext } from '@shared/context';
import React, { useState } from 'react';

export const FetchProvider = <T,>({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = async (
    url: string,
    method: string = 'GET',
    headers: HeadersInit = {},
    body?: T
  ) => {
    setLoading(true);
    setError(null);
    try {
      const options: RequestInit = {
        method,
        headers: {
          'Content-Type': 'application/json',
          ...headers,
        },
      };
      if (body) {
        options.body = JSON.stringify(body);
      }
      const response = await fetch(url, options);
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }
      const responseData = await response.json();
      setData(responseData);
      return responseData;
    } catch (data) {
      throw new Error((data as Error)?.message);
    } finally {
      setLoading(false);
    }
  };

  const get = (url: string, body?: T, headers?: HeadersInit) => request(url, 'GET', headers, body);

  const post = (url: string, body?: T, headers?: HeadersInit) =>
    request(url, 'POST', headers, body);

  const put = (url: string, body?: T, headers?: HeadersInit) => request(url, 'PUT', headers, body);

  const remove = (url: string, headers?: HeadersInit) => request(url, 'DELETE', headers);

  return (
    <FetchContext.Provider value={{ data, loading, error, get, post, put, remove }}>
      {children}
    </FetchContext.Provider>
  );
};
