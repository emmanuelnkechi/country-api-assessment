import { ICountry } from "../model/common.interface";

export const getRegions = (countries: ICountry[]) => {
  const result: string[] = [];
  countries.map((country) => result.push(country.region));
  const finalResult = new Set(result);
  return ["Filter by Region", ...finalResult];
};
