import * as React from 'react';
import Button from '@mui/material/Button';
import { CharacterEntityVm } from './character-collection.vm';
import { CharacterCard } from './components/character-card.component';
import * as classes from './character-collection.styles';

interface Props {
  characterCollection: CharacterEntityVm[];
  onCreateCharacter: () => void;
  onEdit: (id: number, isReadOnly: boolean) => void;
  onDelete: (id: number) => void;
  onView: (id:number, isReadOnly: boolean) => void
}

export const CharacterCollectionComponent: React.FunctionComponent<Props> = (
  props
) => {
  const { characterCollection, onCreateCharacter, onEdit, onDelete, onView} = props;

  return (
    <div className={classes.root}>
      {/* <Button variant="contained" color="primary" onClick={onCreateCharacter}>
        Add character
      </Button> */}

      <ul className={classes.list}>
        {characterCollection.map((character) => (
          <li key={character.id}>
            <CharacterCard character={character} onEdit={onEdit} onDelete={onDelete} onView={onView} />
          </li>
        ))}
      </ul>
    </div>
  );
};
