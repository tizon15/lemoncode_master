import { EpisodesLookup, LocationLookup } from '#common/models';
import { Character } from './character.api-model';
const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacter = async (id: string): Promise<Character> => {
  try {
    const response = await fetch(`${API_URL}/character/${id}`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error.message);
  }
};

export const getEpisodes = async (): Promise<EpisodesLookup[]> => {
  try {
    const response = await fetch(`${API_URL}/episode`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  }
};
export const getLocations = async (): Promise<LocationLookup[]> => {
try {
    const response = await fetch(`${API_URL}/location`);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const { results } = await response.json();
    return results;
  } catch (error) {
    console.error(error.message);
  }};
export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
