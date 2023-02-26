import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CountryListPage from "./pages/countryListPage";
import { apiGet } from "./utils/http-request";
import { url } from "./constants/url";
import { GlobalStyles } from "./components/theme-variables";

const App: React.FC = () => {
  const [countries, setCountries] = useState([]);
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    (async () => {
      const response = await apiGet(url.GET_ALL_COUNTRIES);
      setCountries(response);
    })();
  }, []);

  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            path="/*"
            element={
              <CountryListPage
                countryList={countries}
                clickEvent={toggleTheme}
                theme={theme}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
