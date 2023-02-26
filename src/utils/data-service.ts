export const getRegions = (countries) => {
  const result = [];
  countries.map((country) => result.push(country.region));
  const finalResult = new Set(result);
  return ["Filter by Region", ...finalResult];
};
