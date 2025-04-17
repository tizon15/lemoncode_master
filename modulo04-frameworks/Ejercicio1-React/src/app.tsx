import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { DetailPage } from "./detail";
import { ListPage } from "./list";
import { LoginPage } from "./login";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/list"
          element={
              <ListPage />
          }
        />
        <Route
          path="/detail/:id"
          element={
            
              <DetailPage />
          }
        />
      </Routes>
    </Router>
  );
};
