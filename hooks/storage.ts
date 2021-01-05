import { useState } from 'react';
import Cookies from 'js-cookie';

const isBrowser = typeof window !== 'undefined';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useLocalStorage<T>(key: string, initialValue: T) {
  const rawInitialValue = isBrowser ? localStorage.getItem(key) : '';

  const [data, setStoredValue] = useState<T>(() =>
    rawInitialValue ? JSON.parse(rawInitialValue) : initialValue,
  );

  const setData = (value: T) => {
    setStoredValue(value);
    if (isBrowser) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clear = () => {
    setStoredValue(initialValue);
    if (isBrowser) {
      localStorage.removeItem(key);
    }
  };

  return { data, setData, clear } as const;
}

export function useCookies<T>(key: string, initialValue: T) {
  const rawInitialValue = isBrowser ? Cookies.get('Authorization') : '';

  const [data, setStoredValue] = useState<T>(() =>
    rawInitialValue ? JSON.parse(rawInitialValue) : initialValue,
  );

  const setData = (value: T) => {
    setStoredValue(value);
    if (isBrowser) {
      Cookies.set(key, JSON.stringify(value));
    }
  };

  const clear = () => {
    setStoredValue(initialValue);
    if (isBrowser) {
      Cookies.remove(key);
    }
  };

  return { data, setData, clear } as const;
}
