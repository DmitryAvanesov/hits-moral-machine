import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = (): JSX.Element => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Link className={"link"} to="/test">
          Тест
        </Link>
        <Link className={"link"} to="/statistics">
          Статистика
        </Link>
      </Toolbar>
    </AppBar>
  );
};
