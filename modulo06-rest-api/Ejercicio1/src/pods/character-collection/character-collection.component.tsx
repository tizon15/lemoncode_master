import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm, InfoCollection } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import { Box } from '@mui/material';
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
  } = props;

  return (
    <div className={classes.root}>
      <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button>

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
