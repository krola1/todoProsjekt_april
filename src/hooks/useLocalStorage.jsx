import { useEffect } from "react";
import { useState } from "react";

export const useLocalStorage = (key, initialValue = []) => {
  ///usestate
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error("could not retieve from localstorage", error);
      return initialValue;
    }
  });

  //useEffect
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("could not set localstorage", error);
    }
  }, [key, value]);

  return [value, setValue];
};
