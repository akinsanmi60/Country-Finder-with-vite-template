import axios from "axios";

type Prop = {
  url: string;
};

export const getRequest = async ({ url }: Prop) => {
  const response = await axios.get(url);
  return response?.data || response;
};

export const countriesUrl = "https://restcountries.com/v3.1/all";
export const countryUrl = (searchValue: string | undefined) =>
  `https://restcountries.com/v3.1/name/${searchValue}`;
export const countryUri = (inputValue: string) =>
  `https://restcountries.com/v3.1/name/${inputValue}`;
export const continentUrl = (inputValue: string) =>
  `https://restcountries.com/v3.1/region/${inputValue}`;
export const subRegiontUrl = (inputValue: string) =>
  `https://restcountries.com/v3.1/subregion/${inputValue}`;
