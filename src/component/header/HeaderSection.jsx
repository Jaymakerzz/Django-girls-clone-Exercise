import React, { Component } from "react";
import ButtonMain from "../reusable/buttonMain";
import NavList from "../reusable/navList";

class Header extends Component {
  render() {
    return (
      <div className="header__container">
        <header className="header">
          <div className="heading__primary header__item header__item--logo">
            Django Girls
          </div>
          <div className="header__item header__item--links">
            <NavList direction={"horizontal"} />
          </div>
          <div className="header__item header__item--btn">
            <ButtonMain color={"orange"} />
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
