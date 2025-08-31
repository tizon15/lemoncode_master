import * as React from 'react';
import { CharacterEntityVm, InfoCollection } from './character-collection.vm';
import { getCharacterCollection } from './api';
import { mapFromApiToVm } from './character-collection.mapper';
import { mapToCollection } from '#common/mappers';

export const useCharacterCollection = () => {
  const [characterCollection, setCharacterCollection] = React.useState<
    CharacterEntityVm[]
  >([]);
  const [infoCollection, setInfoCollection] = React.useState<InfoCollection>();

  const loadCharacterCollection = (page:number) => {
    getCharacterCollection(page).then((result) => {
      setCharacterCollection(mapToCollection(result.results, mapFromApiToVm));
      setInfoCollection(result.info);
    });
  };

  return { characterCollection, loadCharacterCollection, infoCollection };
};
