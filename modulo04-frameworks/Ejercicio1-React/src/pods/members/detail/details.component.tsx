import React from "react";
import { Link } from "react-router-dom";
import { MemberDetailEntity } from "./detail.vm";
import { routes } from "@/core";
import { Avatar } from "@mui/material";
interface Props {
  member: MemberDetailEntity;
}
export const DetailComponent: React.FC<Props> = (props) => {
  const { member } = props;
  return (
    <>
      <h2>Detail of the member page</h2>
      <Avatar src={member.avatar_url} alt={member.avatar_url}
      sx={{ width: 80, height: 80 }} />
      <p> id: {member.id}</p>
      <p> login: {member.login}</p>
      <p> name: {member.name}</p>
      <p> company: {member.company}</p>
      <Link to={routes.root}>Back to list page</Link>
    </>
  );
};
