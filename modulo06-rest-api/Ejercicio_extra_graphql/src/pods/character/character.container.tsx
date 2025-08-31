import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Character, createEmptyCharacter } from './character.vm';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };

  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
  }, []);

  const handleSave = async (character: Character) => {
    const apiCharacter = mapCharacterFromVmToApi(character);
    const success = await api.saveCharacter(apiCharacter);
    if (success) {
      navigate(-1);
    } else {
      alert('Error on save Character');
    }
  };

  return <CharacterComponent character={character} onSave={handleSave} />;
};
