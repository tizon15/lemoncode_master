import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  try {
    const url = '/api/character';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  }
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
