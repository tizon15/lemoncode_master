import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { linkRoutes } from '#core/router';
import { deleteCharacter } from './api';
import { useCharacterCollection } from './character-collection.hook';
import { CharacterCollectionComponent } from './character-collection.component';
import { debounce } from '@mui/material';

export const CharacterCollectionContainer = () => {
  const { characterCollection, loadCharacterCollection, infoCollection } =
    useCharacterCollection();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [searchCharacter, setSearchCharacter] = React.useState('');

  const navigate = useNavigate();
  const debouncedLoadCharacters = React.useCallback(
    debounce((page, search) => {
      loadCharacterCollection(page, search);
    }, 300),
    []
  );
  React.useEffect(() => {
    if (searchCharacter) {
      debouncedLoadCharacters(currentPage, searchCharacter);
    } else {
      loadCharacterCollection(currentPage, searchCharacter);
    }
  }, [currentPage, searchCharacter]);

  const handleCreateCharacter = () => {
    navigate(linkRoutes.createCharacter);
  };

  const handleEdit = (id: number) => {
    navigate(linkRoutes.editCharacter(id, false));
  };

  const handleDelete = async (id: number) => {
    await deleteCharacter(id);
    loadCharacterCollection(currentPage, searchCharacter);
  };
  const handleView = async (id: number) => {
    navigate(linkRoutes.viewCharacter(id, true));
  };
  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <CharacterCollectionComponent
      characterCollection={characterCollection}
      onCreateCharacter={handleCreateCharacter}
      onEdit={handleEdit}
      onDelete={handleDelete}
      onView={handleView}
      page={currentPage}
      onHandleChangePage={handlePageChange}
      infoCollection={infoCollection}
      setSearchCharacter={setSearchCharacter}
      searchCharacter={searchCharacter}
    />
  );
};
