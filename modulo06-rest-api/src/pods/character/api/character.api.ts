import { Character } from './character.api-model';
import { Lookup } from '#common/models';
import { mockCities, mockCharacterCollection } from './character.mock-data';
import axios from 'axios';
const API_URL = 'https://rickandmortyapi.com/api/character';

export const getCharacter = async (id: string): Promise<Character> => {
  const {data} = await axios.get(`${API_URL}/${id}`)
  return data.results;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
