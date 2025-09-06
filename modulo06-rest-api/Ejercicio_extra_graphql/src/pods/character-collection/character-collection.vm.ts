export interface CharacterEntityVm {
  id: number;
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  type: string;
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
