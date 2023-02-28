import * as React from "react";
import { apiGet } from "../utils/http-request";
import { url } from "../constants/url";
import { getRegions } from "../utils/data-service";
import { ContextProps } from "../model/common.interface";

export const CountryContext = React.createContext<any | null>(null);

const CountryProvider: React.FC<ContextProps> = ({ children }) => {
  const [countries, setCountries] = React.useState([]);
  const [region, setRegion] = React.useState<string[]>([]);
  const [searchValue, setSearchValue] = React.useState("");
  const [filterValue, setFilterValue] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const getCountries = async () => {
    setLoading(true);
    try {
      const response = await apiGet(url.GET_ALL_COUNTRIES);
      if (response.status === 200) {
        setCountries(response.data);
        localStorage.setItem("countries", JSON.stringify(response.data));
        const res = getRegions(response.data);
        setRegion(res);
        setLoading(false);
      }
    } catch (e) {
      console.error(e);
      setLoading(false);
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
        loading,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export default CountryProvider;
