export interface CharacterEntityVm {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  episode: string[]
  url: string
}
export interface InfoCollection {
  count: number;
  next: string;
  pages: 42;
  prev: string;
}
export interface CharacterCollectionApi {
  info: InfoCollection;
  results: CharacterEntityVm[];
}
export interface GetCharactersCollectionResponse {
  characters: CharacterCollectionApi
}
export interface Origin {
  name: string
  url: string
}

export interface Location {
  name: string
  url: string
}
