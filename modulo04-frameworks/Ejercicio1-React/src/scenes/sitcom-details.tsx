import { CenterLayout } from "@/layout";
import { SitcomDetailContainer } from "@/pods/sitcoms/detail";
import React from "react";
import { useParams } from "react-router-dom";

export const SitcomDetailPage: React.FC = () => {
  const { id } = useParams();
  return (
    <CenterLayout>
      <SitcomDetailContainer id={id} />
    </CenterLayout>
  );
};
