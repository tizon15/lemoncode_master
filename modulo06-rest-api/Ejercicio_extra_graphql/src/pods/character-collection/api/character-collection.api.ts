import { graphql } from '#core/api';
import { CharacterEntityApi } from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const API_URL = 'https://rickandmortyapi.com/graphql';

interface InfoPagination {
  count: number;
  pages: number;
  next: number;
  prev: number;
}
interface GetCharactersCollectionResponse {
  characters: {
    info: InfoPagination;
    results: CharacterEntityApi[];
  };
}
export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const query = `{
  characters {
    info {
      pages
      next
      prev
    },
    results {
      id
      name
      status
      species
      gender
      image
      }
  }

}`;
  const { characters } = await graphql<GetCharactersCollectionResponse>({
    query,
  });
  const { results } = characters;
  return results;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
