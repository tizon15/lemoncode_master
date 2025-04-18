import { DetailContainer } from "@/pods/members/detail";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const {id} = useParams();
  return <DetailContainer id={id} />
   
};
