import { useState } from "react";

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

// A wrapper for "JSON.parse()"" to support "undefined" value
function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === "undefined" ? undefined : JSON.parse(value ?? "");
  } catch {
    console.log("parsing error on", { value });
    return undefined;
  }
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>] {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(() => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      // Allow value to be a function so we have same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(newValue);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(`Error setting localStorage key “${key}”:`, error);
    }
  };

  return [storedValue, setValue];
}
