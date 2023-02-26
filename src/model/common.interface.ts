export interface ICountry {}

export interface ICountries {
  country: ICountry;
}

export interface ICountriesProp {
  countryList: ICountry;
  theme?: string;
  clickEvent?: () => void;
}

export interface INavProp {
  clickEvent: () => void;
  theme: string;
}

export interface ICardProp {
  country: ICountry;
  index: number;
}
