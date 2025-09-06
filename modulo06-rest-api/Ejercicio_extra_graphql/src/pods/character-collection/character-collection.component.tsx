import * as React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { CharacterEntityVm, InfoCollection } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import { Box, debounce, Pagination, TextField } from '@mui/material';

interface Props {
  characterCollection: CharacterEntityVm[];
  page: number;

  onCreateCharacter: () => void;
  onEdit: (id: number, isReadOnly: boolean) => void;
  onDelete: (id: number) => void;
  onView: (id: number, isReadOnly: boolean) => void;
  onHandleChangePage: (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => void;
  infoCollection: InfoCollection;
  setSearchCharacter: (text: string) => void;
  searchCharacter: string;
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const {
    characterCollection,
    onCreateCharacter,
    onEdit,
    onDelete,
    onView,
    onHandleChangePage,
    page,
    infoCollection,
    setSearchCharacter,
    searchCharacter,
  } = props;


  return (
    <div className={classes.root}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        }}
      >
        <SearchIcon
          sx={{ mr: 1, my: 0.5 }}
        />
        <TextField
          label="Search character"
          variant="standard"
          value={searchCharacter}
          onChange={(e) => {
            setSearchCharacter(e.target.value);
          }}
        />
      </Box>
      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard
              character={character}
              onEdit={onEdit}
              onDelete={onDelete}
              onView={onView}
            />
          </li>
        ))}
      </ul>
      <Box display="flex" justifyContent="center" sx={{ py: 4 }}>
        <Pagination
          count={infoCollection?.pages}
          page={page}
          color="primary"
          onChange={onHandleChangePage}
        />
      </Box>
    </div>
  );
};
