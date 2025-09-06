import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CharacterEntityVm } from '../character-collection.vm';
import * as classes from './character-card.styles';

interface Props {
  character: CharacterEntityVm;
  onEdit: (id: number, isReadOnly: boolean) => void;
  onDelete: (id: number) => void;
  onView: (id: number, isReadOnly: boolean) => void;
}

export const CharacterCard: React.FunctionComponent<Props> = (props) => {
  const { character, onEdit, onDelete, onView } = props;

  return (
    <Card>
      <CardHeader title={character.name} subheader={character.species} />
      <CardContent>
        <div className={classes.content}>
          <CardMedia
            image={character.image}
            title={character.name}
            style={{
              height: 0,
              paddingTop: '56.25%',
              backgroundSize: 'contain',
            }}
          />
          <Typography variant="h6" gutterBottom>
            {character.status}
          </Typography>
          <Typography variant="caption" gutterBottom>
            {character.gender}
          </Typography>
        </div>
      </CardContent>
      <CardActions>
        <IconButton onClick={() => onView(character.id, true)}>
          <VisibilityIcon />
        </IconButton>
        {/* <IconButton onClick={() => onEdit(character.id, false)}>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => onDelete(character.id)}>
          <DeleteIcon />
        </IconButton> */}
      </CardActions>
    </Card>
  );
};
