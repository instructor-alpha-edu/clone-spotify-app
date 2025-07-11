import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export default function ThemeProvider({ children }) {
  const [isLightTheme, setIsLightTheme] = useState(() => {
    const storedTheme = localStorage.getItem("isLightTheme");
    return storedTheme === "true" ? true : false;
  });

  function toggleTheme() {
    setIsLightTheme(!isLightTheme);
    localStorage.setItem("isLightTheme", !isLightTheme);
  }

  return (
    <ThemeContext.Provider value={{ isLightTheme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
