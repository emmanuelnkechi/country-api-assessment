import * as React from "react";
import { ContextProps } from "../model/common.interface";

export const ThemeContext = React.createContext<any | null>(null);

const ThemeProvider: React.FC<ContextProps> = ({ children }) => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
