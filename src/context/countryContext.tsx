import * as React from "react";
import { apiGet } from "../utils/http-request";
import { url } from "../constants/url";
import { getRegions } from "../utils/data-service";

export const CountryContext = React.createContext<any | null>(null);

const CountryProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [countries, setCountries] = React.useState([]);
  const [region, setRegion] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");

  const getCountries = async () => {
    try {
      const response = await apiGet(url.GET_ALL_COUNTRIES);
      if (response.status === 200) {
        setCountries(response.data);
        const res = getRegions(response.data);
        setRegion(res);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const searchCountries = async () => {
    try {
      const response = await apiGet(`${url.SEARCH_COUNTRIES}/${searchValue}`);

      if (response.status === 200) {
        setCountries(response.data);
      }
      if (response.response.status === 404) {
        setCountries([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  const filterByRegion = async () => {
    try {
      const response = await apiGet(`${url.FILTER_REGIONS}/${filterValue}`);

      if (response.status === 200) {
        setCountries(response.data);
      }
      if (response.response.status === 404) {
        setCountries([]);
      }
    } catch (e) {
      console.error(e);
    }
  };

  React.useEffect(() => {
    getCountries();
  }, []);

  React.useEffect(() => {
    if (searchValue) {
      searchCountries();
    } else {
      getCountries();
    }
  }, [searchValue]);

  React.useEffect(() => {
    if (filterValue) {
      filterByRegion();
    } else {
      getCountries();
    }
  }, [filterValue]);

  return (
    <CountryContext.Provider
      value={{
        countries,
        region,
        setSearchValue,
        setFilterValue,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
