import { routes } from "@/core";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const HeaderComponent: React.FC = () => {
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: "#2f4858" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React Laboratorio
          </Typography>
          <Button component={Link} to={routes.root} color="inherit">
            Members List
          </Button>
          <Button component={Link} color="inherit" to={routes.sitcomList}>
            Sitcom List
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
