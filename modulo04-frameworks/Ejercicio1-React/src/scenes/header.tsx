import { routes } from "@/core";
import { Menu } from "@mui/icons-material";
import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {

  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{backgroundColor: "#2f4858" }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            React Laboratorio
          </Typography>
          <Button color="inherit" href={routes.root}>Members List</Button>
          <Button color="inherit" href={routes.sitcomList} >Sitcom List</Button>
        </Toolbar>
      </AppBar>
    </>
  );
};
