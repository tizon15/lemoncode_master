import { graphql } from '#core/api';
import {
  CharacterCollectionApi,
  CharacterEntityVm,
  GetCharactersCollectionResponse,
} from './character-collection.api-model';
import { mockCharacterCollection } from './character-collection.mock-data';

let characterCollection = [...mockCharacterCollection];
const API_URL = 'https://rickandmortyapi.com/graphql';

export const getCharacterCollection = async (
  page: number, searchCharacter: string
): Promise<CharacterCollectionApi> => {
  const query = `query ($page: Int, $searchCharacter: String) {
  characters(page: $page, filter: {name: $searchCharacter}) {
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
    variables: { page: page, searchCharacter: searchCharacter },
  });
  return characters;
};

export const deleteCharacter = async (id: number): Promise<boolean> => {
  characterCollection = characterCollection.filter((h) => h.id !== +id);
  return true;
};
