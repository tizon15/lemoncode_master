import axios from 'axios';
import { CharacterCollectionApi } from '../character-collection.vm';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const API_URL = 'https://rickandmortyapi.com/api/';
export const getCharacterCollection = async (page = 1): Promise<
  CharacterCollectionApi
> => {
  const { data } = await axios.get(`${API_URL}/character/?page=${page}`);
  return data;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
