import React from "react";
import logo from "../../assets/images/logo.png";
import { links } from "../../assets/Data";
import { Link, animateScroll } from "react-scroll";
import { AiOutlineAppstore } from "react-icons/ai";
import "./Header.css";
export default function Header() {
  const scrollTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <header className="header">
      <nav className="nav-container container">
        <Link to="/" onClick={scrollTop} className="nav-logo">
          <img src={logo} alt="Logo" className="nav-img" />
        </Link>
        <ul className="nav-menu">
          {links.map(({ name, path }, index) => (
            <li className="nav-items" key={index}>
              <Link
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                to={path}
                className="nav-link"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-toggle">
          <AiOutlineAppstore />
        </div>
      </nav>
    </header>
  );
}
