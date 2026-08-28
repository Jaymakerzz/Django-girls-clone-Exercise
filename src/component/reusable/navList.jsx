import React from "react";

const NavList = (props) => {
  const links = [
    { name: "Home", url: "#" },
    { name: "Community", url: "#" },
    { name: "Workshop", url: "#" },
    { name: "Schedule", url: "#" },
  ];
  const { direction } = props;
  return (
    <ul className="list">
      {links.map((link) => (
        <li key={link.name} className={`list__item--${direction}`}>
          <a href={link.url} className="nav nav__link">
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
