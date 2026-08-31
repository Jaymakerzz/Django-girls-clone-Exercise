import React from "react";
import { NavLink } from "react-router-dom";

const NavListEnd = (props) => {
  const links = [
    { name: "Terms & Conditions", url: "/" },
    { name: "Privacy Policy", url: "/" },
    { name: "Cookies Policy", url: "/" },
  ];
  const { direction } = props;
  return (
    <ul className="list">
      {links.map((link) => (
        <li key={link.name} className={`list__item--${direction}`}>
          <NavLink
            to={link.url}
            onClick={() => window.scrollTo(0, 0)}
            className="nav nav__link"
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavListEnd;
