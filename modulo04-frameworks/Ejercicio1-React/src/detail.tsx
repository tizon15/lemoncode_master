import React from "react";
import { Link, useParams } from "react-router-dom";
import { ListContext } from "./providers/listProvider";

export const DetailPage: React.FC = () => {
  const {id} = useParams();
  const {inputOrganization } = React.useContext(ListContext)
  return (
    <>
      <h2>Hello from Detail page</h2>
      <h3>User Id: {id}</h3>
      <p>Input ref: {inputOrganization}</p>
      <Link to="/list">Back to list page</Link>
    </>
  );
};
