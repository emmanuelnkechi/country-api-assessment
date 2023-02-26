import * as React from "react";

export const ThemeContext = React.createContext<any | null>(null);

const ThemeProvider: React.FC<React.ReactNode> = ({ children }) => {
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
