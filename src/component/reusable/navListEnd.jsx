import React from "react";

const NavListEnd = (props) => {
  const links = [
    { name: "Terms & Conditions", url: "#" },
    { name: "Privacy Policy", url: "#" },
    { name: "Cookies Policy", url: "#" },
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

export default NavListEnd;
