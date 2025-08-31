import { EpisodesLookup, LocationLookup } from '#common/models';
import axios from 'axios';
import { Character } from './character.api-model';
const API_URL = 'https://rickandmortyapi.com/api';

export const getCharacter = async (id: string): Promise<Character> => {
  const {data} = await axios.get(`${API_URL}/character/${id}`)
  return data;
};

export const getEpisodes = async (): Promise<EpisodesLookup[]> => {
  const {data} = await axios.get(`${API_URL}/episode`)
  return data.results;
};
export const getLocations = async (): Promise<LocationLookup[]> => {
  const {data} = await axios.get(`${API_URL}/location`)
  return data.results;
};
export const saveCharacter = async (character: Character): Promise<boolean> => {
  return true;
};
