import React, { Component } from "react";

const ButtonMain = (props) => {
  const { color } = props;
  return (
    <div>
      <a href="#" className={`btn btn--${color}`}>
        Join Community
      </a>
    </div>
  );
};

export default ButtonMain;
