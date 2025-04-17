import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import { ListProvider } from "./providers/listProvider";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ListProvider>
    <App />
  </ListProvider>
);
