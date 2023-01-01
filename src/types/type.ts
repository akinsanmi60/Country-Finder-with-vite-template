type CurrencyProp = {
  [x: string]: {
    name: string;
    symbol: string;
  };
};

type DemonymsProp = {
  eng: {
    f: string;
    m: string;
  };
  fra: {
    f: string;
    m: string;
  };
};

type FlagProp = {
  png: string;
  svg: string;
};

type CountryTranslation = {
  common: string;
  official: string;
};

export type CountryProp = {
  altSpellings: string[];
  area: number;
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
  currencies: CurrencyProp;
  demonyms: DemonymsProp;
  fifa: string;
  flag: string;
  flags: FlagProp;
  independent: boolean;
  languages: { eng: string };
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
    ara: CountryTranslation;
    fra: CountryTranslation;
    ita: CountryTranslation;
    kor: CountryTranslation;
    jpn: CountryTranslation;
    spa: CountryTranslation;
  };
  unMember: boolean;
};
