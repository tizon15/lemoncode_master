import { AppLayout } from "@/layout";
import { SitcomListContainer } from "@/pods/sitcoms/list";
import React from "react";

export const SitcomListPage: React.FC = () => {
  return (
    <AppLayout>
      <SitcomListContainer />
    </AppLayout>
  );
};
