import { ReactNode } from "react";

export interface IPagination {
  page: number;
  pages: number;
  setPage: any;
  count: number;
}

export interface ICharacters {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ICharacterData[];
}

export interface ICharacterData {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface ILocations {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: ILocationData[];
}

export interface ILocationData {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
