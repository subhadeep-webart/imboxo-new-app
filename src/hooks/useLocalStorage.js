"use client";
import { useState, useEffect } from "react";

function useLocalStorage(key) {
  const [value, setValue] = useState(undefined); // 👈 start with undefined

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const item = localStorage.getItem(key);
        if (item !== null) {
          setValue(JSON.parse(item));
        }
      } catch (error) {
        console.error("Error reading localStorage key:", key, error);
      }
    }
  }, [key]);

  useEffect(() => {
    if (typeof window !== "undefined" && value !== undefined) {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error("Error setting localStorage key:", key, error);
      }
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
