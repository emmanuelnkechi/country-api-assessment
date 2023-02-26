import Countries from "../components/countries";
import Nav from "../components/nav";
import { ICountriesProp } from "../model/common.interface";

const CountryListPage = ({
  countryList,
  clickEvent,
  theme,
}: ICountriesProp) => {
  return (
    <>
      <Nav clickEvent={clickEvent} theme={theme} />
      <Countries
        countryList={countryList}
        clickEvent={clickEvent}
        theme={theme}
      />
    </>
  );
};

export default CountryListPage;
