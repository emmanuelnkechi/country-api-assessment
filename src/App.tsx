import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/countryListPage";
import { GlobalStyles } from "./components/theme-variables";
import CountryProvider from "./context/countryContext";
import ThemeProvider from "./context/themeContext";

const App: React.FC = () => {
  return (
    <CountryProvider>
      <GlobalStyles />
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<CountryListPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </CountryProvider>
  );
};

export default App;
