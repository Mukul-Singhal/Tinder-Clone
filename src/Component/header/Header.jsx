import React from "react";

import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import { Link, useHistory } from "react-router-dom";

import "./Header.css";

const Header = ({ backbutton }) => {
  const history = useHistory();
  return (
    <div className="header">
      {backbutton ? (
        <IconButton onClick={() => history.replace(backbutton)}>
          <ArrowBackIosIcon className="header-icon" fontSize="large" />
        </IconButton>
      ) : (
        <IconButton>
          <PersonIcon className="header-icon" fontSize="large" />
        </IconButton>
      )}

      <Link to="/">
        <img
          className="header-logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder-logo"
        />
      </Link>
      <Link to="/chat">
        <IconButton>
          <ForumIcon className="header-icon" fontSize="large" />
        </IconButton>
      </Link>
    </div>
  );
};

export default Header;
