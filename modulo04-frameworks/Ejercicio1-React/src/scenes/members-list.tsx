import { AppLayout } from "@/layout";
import { ListPageContainer } from "@/pods/members/list";
import React from "react";

export const ListPage: React.FC = () => {
  return (
    <AppLayout>
      <ListPageContainer />
    </AppLayout>
  );
};
