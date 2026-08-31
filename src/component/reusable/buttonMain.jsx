import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

const ButtonMain = (props) => {
  const { color } = props;
  return (
    <div>
      <NavLink
        to="/community"
        onClick={() => window.scrollTo(0, 0)}
        className={`btn btn--${color}`}
      >
        Join Community
      </NavLink>
    </div>
  );
};

export default ButtonMain;
