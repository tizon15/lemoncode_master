import { CharacterCollectionApi } from '../character-collection.vm';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const API_URL = 'https://rickandmortyapi.com/api/';
export const getCharacterCollection = async (page = 1): Promise<
  CharacterCollectionApi
> => {
  const url = `${API_URL}/character/?page=${page}`
  try{
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
