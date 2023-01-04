type DemonymsProp = {
  f: string;
  m: string;
};

type FlagProp = {
  png: string;
  svg: string;
};

type CountryTranslation = {
  common: string;
  official: string;
};

type CurrencyProp = {
  name: string;
  symbol: string;
};

export type ContinentProp = {
  altSpellings: string[];
  area: number;
  borders?: string[] | undefined;
  capital: [string];
  capitalInfo: {
    latlng: number[];
  };
  car: {
    side: string;
    signs: string[];
  };
  cca2: string;
  cca3: string;
  ccn3: string;
  cioc: string;
  coatOfArms: FlagProp;
  continents: string[];
  currencies: {
    [x: string]: CurrencyProp;
  };
  demonyms: {
    [x: string]: DemonymsProp;
  };
  fifa: string;
  flag: string;
  flags: FlagProp;
  independent: boolean;
  languages: {
    [x: string]: string;
  };
  latlng: number[];
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  name: {
    common: string;
    nativeName: {
      eng: { official: string };
    };
    official: string;
  };
  population: number;
  region: string;
  startOfWeek: string;
  status: string;
  subregion: string;
  timezones: string[];
  tld: string[];
  translations: {
    [x: string]: CountryTranslation;
  };
  unMember: boolean;
};
