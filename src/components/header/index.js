import React from "react";
import Search from "../search";
import Navigation from "../navigation";
import AppBar from '@material-ui/core/AppBar';
import "./style.scss";

const Header = () => {
  return (
    <div className="Header">
      <AppBar position="static" className="Header__bar" color="inherit">
        <Navigation />
        <h1 className="title">The beer bank</h1>
        <h2 className="subTitle">Find your favorite beer here</h2>
        <Search />
      </AppBar>
    </div>
  )
};

export default Header;
