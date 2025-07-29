import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'counter-value';

export interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: (value: number) => void;
}

/**
 * Custom hook for managing counter state with localStorage persistence
 */
export const useCounter = (initialValue: number = 0): UseCounterReturn => {
  // Initialize state from localStorage or use initial value
  const [count, setCountState] = useState<number>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? parseInt(stored, 10) : initialValue;
    } catch (error) {
      console.warn('Failed to load counter from localStorage:', error);
      return initialValue;
    }
  });

  // Save to localStorage whenever count changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, count.toString());
    } catch (error) {
      console.warn('Failed to save counter to localStorage:', error);
    }
  }, [count]);

  // Increment counter by 1
  const increment = useCallback(() => {
    setCountState(prev => prev + 1);
  }, []);

  // Decrement counter by 1
  const decrement = useCallback(() => {
    setCountState(prev => prev - 1);
  }, []);

  // Reset counter to initial value
  const reset = useCallback(() => {
    setCountState(initialValue);
  }, [initialValue]);

  // Set counter to specific value
  const setCount = useCallback((value: number) => {
    setCountState(value);
  }, []);

  return {
    count,
    increment,
    decrement,
    reset,
    setCount,
  };
};
