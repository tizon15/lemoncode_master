import React from "react";
import { Link, useParams } from "react-router-dom";
import { Avatar } from "@mui/material";
import { routes } from "@/core";
import { CharacterEntity } from "./detail.vm";

interface Props {
    character: CharacterEntity
}

export const SitcomDetailComponent: React.FC<Props> = (props) => {
  const { character } = props;
  return (
    <>
      <h2>Character detail page</h2>
      <h3>User name: {character?.name}</h3>
      <Avatar src={character?.image} sx={{ width: 80, height: 80 }}></Avatar>
      <h4>Gender:{character?.gender}</h4>
      <h4>Specie: {character?.species}</h4>
      <h4>Status: {character?.status}</h4>
      <Link to={routes.sitcomList}>Back to sitcom list page</Link>
    </>
  );
};