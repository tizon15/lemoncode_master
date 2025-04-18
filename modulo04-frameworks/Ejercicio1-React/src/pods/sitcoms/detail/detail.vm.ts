export interface CharacterEntity {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin?: OriginEntity;
  location?: LocationEntity;
  episode?: string[];
  url?: string;
  created?: string;
}

export interface OriginEntity {
  name: string;
  url: string;
}

export interface LocationEntity {
  name: string;
  url: string;
}

export const createDefaultCharacterDetail = () => ({
  id: 0,
  name: "",
  status: "",
  species: "",
  gender: "",
  image: "",
  type: ""
});
