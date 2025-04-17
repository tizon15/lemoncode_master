import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DetailPage } from "./components/members/detail";
import { ListPage } from "./components/members/list";
import { SitcomListPage } from "./components/sitcom/list";
import { SitcomDetailPage } from "./components/sitcom/detail";
import { Header } from "./components/header";
import { ListProvider } from "./providers/listProvider";
import { SitcomListProvider } from "./providers/sitcomProvider";

export const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <ListProvider>
                <ListPage />
              </ListProvider>
            }
          />
          <Route
            path="/detail/:id"
            element={
              <ListProvider>
                <DetailPage />
              </ListProvider>
            }
          />
          <Route
            path="/sitcomlist"
            element={
              <SitcomListProvider>
                <SitcomListPage />
              </SitcomListProvider>
            }
          />
          <Route
            path="/sitcomdetail/:name"
            element={
              <SitcomListProvider>
                <SitcomDetailPage />
              </SitcomListProvider>
            }
          />
        </Routes>
      </Router>
    </>
  );
};
