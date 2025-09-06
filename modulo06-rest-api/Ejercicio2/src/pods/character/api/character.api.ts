import axios from 'axios';
import { Character } from './character.api-model';

export const getCharacter = async (id: string): Promise<Character> => {
  const {data} = await axios.get(`/api/character/${id}`)
  return data;
};

export const saveCharacter = async (character: Character): Promise<boolean> => {
  const response = await axios.put(`/api/character/${character.id}`, character)
  return true;
};
