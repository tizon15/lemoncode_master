export interface EpisodesLookup {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: [];
  url: string;
}
export interface LocationLookup {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residesnts: string[];
  url: string[];
}

export const createEmptyEpisodesLookup = (): EpisodesLookup => ({
  id: 0,
  name: '',
  air_date: '',
  episode: '',
  characters: [],
  url: '',
});
export const createEmptyLocationLookup = (): LocationLookup => ({
  id: 0,
  name: '',
  type: '',
  dimension: '',
  residesnts: [],
  url: [],
});
