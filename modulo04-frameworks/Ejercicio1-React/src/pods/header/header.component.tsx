import { routes } from "@/core";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

export const HeaderComponent: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#2f4858" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React Laboratorio
          </Typography>
          <Button color="inherit" href={routes.root}>
            Members List
          </Button>
          <Button color="inherit" href={routes.sitcomList}>
            Sitcom List
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
