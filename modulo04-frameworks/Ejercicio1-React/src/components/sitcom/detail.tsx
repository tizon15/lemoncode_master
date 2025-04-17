import React from "react";
import { Link, useParams } from "react-router-dom";
import { SitcomListContext } from "../../providers/sitcomProvider";
import { Avatar } from "@mui/material";

export const SitcomDetailPage: React.FC = () => {
  const { name } = useParams();
  const { characterSearched } = React.useContext(SitcomListContext);
  return (
    <>
      <h2>Character detail page</h2>
      <h3>User name: {name}</h3>
      <Avatar src={characterSearched?.image} sx={{ width: 56, height: 56 }}></Avatar>
      <h4>Gender:{characterSearched?.gender}</h4>
      <h4>Specie: {characterSearched?.species}</h4>
      <h4>Status: {characterSearched?.status}</h4>
      <Link to="/sitcomlist">Back to sitcom list page</Link>
    </>
  );
};
