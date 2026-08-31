import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

class NavList extends Component {
  state = {
    links: [
      { name: "Home", url: "/" },
      { name: "Community", url: "/community" },
      { name: "Workshop", url: "/workshop" },
      { name: "Schedule", url: "/schedule" },
    ],
  };

  render() {
    const { direction } = this.props;
    const { links, currentLink } = this.state;
    return (
      <ul className="list">
        {links.map((link) => (
          <li key={link.name} className={`list__item--${direction}`}>
            <NavLink
              to={link.url}
              onClick={() => window.scrollTo(0, 0)}
              className={({ isActive }) =>
                isActive ? "nav nav__active" : "nav"
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}

export default NavList;
