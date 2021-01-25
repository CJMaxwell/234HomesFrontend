import { useState } from 'react';

const isBrowser = typeof window !== 'undefined';

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

export function useSessionStorage<T>(key: string, initialValue: T) {
  const rawInitialValue = isBrowser ? localStorage.getItem(key) : '';

  const [data, setStoredValue] = useState<T>(() =>
    rawInitialValue ? JSON.parse(rawInitialValue) : initialValue,
  );

  const setData = (value: T) => {
    setStoredValue(value);
    if (isBrowser) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  const clear = () => {
    setStoredValue(initialValue);
    if (isBrowser) {
      sessionStorage.removeItem(key);
    }
  };

  return { data, setData, clear } as const;
}
