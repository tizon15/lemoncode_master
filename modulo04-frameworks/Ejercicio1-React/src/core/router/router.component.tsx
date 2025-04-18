import { SitcomListPage, SitcomDetailPage, ListPage, DetailPage, Header } from "@/scenes";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { SitcomListProvider } from "../providers/sitcomProvider";
import { switchRoutes } from "./routes";
import { ListProvider } from "../providers/listProvider";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route
          path={switchRoutes.root}
          element={
            <ListProvider>
              <ListPage />
            </ListProvider>
          }
        />
        <Route
          path={switchRoutes.details}
          element={
            <ListProvider>
              <DetailPage />
            </ListProvider>
          }
        />
        <Route
          path={switchRoutes.sitcomList}
          element={
            <SitcomListProvider>
              <SitcomListPage />
            </SitcomListProvider>
          }
        />
        <Route
          path={switchRoutes.sitcomDetails}
          element={
            <SitcomListProvider>
              <SitcomDetailPage />
            </SitcomListProvider>
          }
        />
      </Routes>
    </Router>
  );
};
