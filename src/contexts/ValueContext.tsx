/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from "react";

type ContextType = {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

type ProviderProps = {
  children: React.ReactNode;
};
const SearchContext = createContext({} as ContextType);

export const pushToLocalStorage = (value: string) => {
  localStorage.setItem("key", value);
};

const getValue = () => {
  const availValue = localStorage.getItem("key") as string;

  return { availValue };
};

const { availValue } = getValue();

export function SearchProvider({ children }: ProviderProps) {
  const [inputValue, setInputValue] = useState<string>(availValue);

  return (
    <SearchContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </SearchContext.Provider>
  );
}

export default SearchContext;
