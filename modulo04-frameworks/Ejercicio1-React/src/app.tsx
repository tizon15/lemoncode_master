import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "@/scenes";
import { RouterComponent } from "@/core";

export const App = () => {
  return (
    <>
      <Header />
      <RouterComponent />
    </>
  );
};
