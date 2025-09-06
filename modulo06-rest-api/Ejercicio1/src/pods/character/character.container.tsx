import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as api from './api';
import { CharacterComponent } from './character.component';
import { mapCharacterFromApiToVm, mapCharacterFromVmToApi } from './character.mappers';
import { Character, createEmptyCharacter } from './character.vm';
import { EpisodesLookup, LocationLookup } from '#common/models';

export const CharacterContainer: React.FunctionComponent = (props) => {
  const [character, setCharacter] = React.useState<Character>(createEmptyCharacter());
  const [episodes, setEpisodes] = React.useState<EpisodesLookup[]>([])
  const [locations, setLocations] = React.useState<LocationLookup[]>([])
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();


  const handleLoadCharacter = async () => {
    const apiCharacter = await api.getCharacter(id);
    setCharacter(mapCharacterFromApiToVm(apiCharacter));
  };
  const handleLoadEpisodeCollection = async () => {
    const apiEpisodes = await api.getEpisodes();
    setEpisodes(apiEpisodes);
  };
  const handleLoadLocationsCollection = async () => {
    const apiLocations = await api.getLocations();
    setLocations(apiLocations);
  };
  React.useEffect(() => {
    if (id) {
      handleLoadCharacter();
    }
    handleLoadEpisodeCollection();
    handleLoadLocationsCollection()
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

  return <CharacterComponent character={character} episodes={episodes} locations={locations} onSave={handleSave} />;
};
