import { Lookup } from '#common/models';
import { graphql } from '#core/api';
import { CharacterEntityVm } from '#pods/character-collection/api';
import { Character } from './character.api-model';
import { mockCities } from './character.mock-data';
interface GetCharacterResponse {
  character: CharacterEntityVm;
}
export const getCharacter = async (id: string): Promise<Character> => {
  const query = `query($id:ID!){
  character(id: $id) {
    id
    name
    status
    species
    type
    gender
    origin {
      name
    }
    location {
      name
    }
    image
    episode {
      name
    }
  }
}`;
  const { character } = await graphql<GetCharacterResponse>({
    query,
    variables: { id },
  });
  return character;
};

export const getCities = async (): Promise<Lookup[]> => {
  return mockCities;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
