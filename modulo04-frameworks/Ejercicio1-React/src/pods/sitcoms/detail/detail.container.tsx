import React from "react";
import { CharacterEntity, createDefaultCharacterDetail } from "./detail.vm";
import { SitcomDetailComponent } from "./detail.component";

interface Props {
  id: string;
  
}

export const SitcomDetailContainer: React.FC<Props> = (props) => {
  const { id } = props;
  const [character, setCharacter] = React.useState<CharacterEntity>(
    createDefaultCharacterDetail()
  );

  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((json) => setCharacter(json));
  }, []);

  return <SitcomDetailComponent character={character} />;
};