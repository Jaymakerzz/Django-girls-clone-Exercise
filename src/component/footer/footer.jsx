import NavList from "../reusable/navList";
import NavListEnd from "../reusable/navListEnd";

const Footer = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="quick-links margin-top-small">
        <h3 className="heading__tertiary--small margin-bottom-small">
          Quick Links
        </h3>
        <NavList direction={"horizontal"} />
      </div>
      <div className="quick-links__border"></div>
      <div className="quick-links__author">
        <p>
          <span className="highlight__title--decorate">
            DjangoGirls Tanzania·
          </span>
          &nbsp; &copy;{currentYear} Jaymakerzz Industries. All rights reserved.
        </p>
        <NavListEnd direction={"horizontal"} />
      </div>
    </footer>
  );
};

export default Footer;
