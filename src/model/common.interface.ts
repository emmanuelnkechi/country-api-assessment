export interface ICountry {
  flags: IFlag;
  name: string;
  nativeName?: string;
  population: string;
  region: string;
  subregion?: string;
  capital: string;
  topLevelDomain?: string[];
  currencies?: ICurrency[];
  languages?: ILanguage[];
  borders?: string[];
  alpha3Code: string;
}

export interface IFlag {
  png: string;
}

export interface ICurrency {
  code?: string;
  name: string;
  symbol?: string;
}

export interface ILanguage {
  iso639_1?: string;
  iso639_2?: string;
  name: string;
  nativeName?: string;
}

export interface ContextProps {
  children: React.ReactNode;
}
