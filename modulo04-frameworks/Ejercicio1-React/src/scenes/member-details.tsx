import { CenterLayout } from "@/layout";
import { DetailContainer } from "@/pods/members/detail";
import React from "react";
import { useParams } from "react-router-dom";

export const DetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <CenterLayout>
      <DetailContainer id={id} />
    </CenterLayout>
  );
};
