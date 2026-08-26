import React, { Component } from "react";

class Header extends Component {
  render() {
    const { links } = this.props;
    return (
      <header className="header">
        <div className="header__item header__item--logo">Django Girls</div>
        <div className="header__item header__item--links">
          <ul className="list">
            {links.map((link) => (
              <li key={link} className="list__item">
                <a href="#" className="nav nav__link">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="header__item header__item--btn">
          <div className="btn">
            <a href="#" className="btn__primary">
              Join Community
            </a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
