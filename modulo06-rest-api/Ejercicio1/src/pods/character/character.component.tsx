import { SelectComponent, TextFieldComponent } from '#common/components';
import {
  Avatar,
  ListItem,
  ListItemText,
  ListSubheader,
  TextField,
} from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Form, Formik } from 'formik';
import React from 'react';
import { useParams } from 'react-router-dom';
import * as classes from './character.styles';
import { formValidation } from './character.validations';
import { Character } from './character.vm';
import { EpisodesLookup, LocationLookup } from '#common/models';

interface Props {
  character: Character;
  episodes: EpisodesLookup[]
  locations: LocationLookup[]
  onSave: (character: Character) => void;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, episodes, locations, onSave } = props;
  const { isReadOnly } = useParams();
  const disableForm = isReadOnly ? true : false;
  return (
    <>
      <Formik
        onSubmit={onSave}
        initialValues={character}
        enableReinitialize={true}
        validate={formValidation.validateForm}
      >
        {() => (
          <Form className={classes.root}>
            <div className={classes.headFormContainer}>
              <Avatar
                src={character.image}
                alt={character.name}
                sx={{ width: 100, height: 100 }}
              />
              <TextFieldComponent
                name="name"
                label="Name"
                disabled={disableForm}
                variant={disableForm ? 'filled' : 'outlined'}
              />
            </div>

            <TextFieldComponent
              name="species"
              label="Specie"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            />
            <TextFieldComponent
              name="status"
              label="Status"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            />
            <TextFieldComponent
              name="gender"
              label="Gender"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            />
            <TextFieldComponent
              name="origin.name"
              label="Origin"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            />

           {/*  <TextFieldComponent
              name="location.name"
              label="Location"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            /> */}
            <TextFieldComponent
              name="type"
              label="Type"
              disabled={disableForm}
              variant={disableForm ? 'filled' : 'outlined'}
            />
            {!disableForm && <SelectComponent name='location.name' label="Location" items={locations} />}
            {!disableForm && <SelectComponent  label="Episodes" items={episodes || []} />}

            {character.episode.length > 0 && (
              <List
                sx={{
                  width: '100%',
                  overflow: 'auto',
                  maxHeight: 150,
                  '& ul': { padding: 0 },
                }}
                subheader={<ListSubheader>Episodes</ListSubheader>}
              >
                {character.episode.map((value, index) =>
                  disableForm ? (
                    <ListItem key={value} alignItems='center' divider={true}>
                      <ListItemText key={index} primary={value} />
                    </ListItem>
                  ) : (
                    <TextFieldComponent key={index} value={value} />
                  )
                )}
              </List>
            )}
            {!disableForm && (
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={disableForm}
              >
                Save
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
};
