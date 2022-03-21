import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import images from "../../constants/images";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <NavLink to={`/soho`}> Home </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to={`/about`}> About </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to={`/menu`}> Menu </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to={`/gallery`}> Gallery </NavLink>
        </li>
        <li className="p__opensans">
          <NavLink to={`/contact`}> Contact </NavLink>
        </li>
      </ul>
      <div className="app__navbar-login">
        <NavLink to={`/log-in`} className="p__opensans">
          {" "}
          Log In / Sign Up{" "}
        </NavLink>

        <div />
        <NavLink to={`/book`} className="p__opensans">
          {" "}
          Book Table{" "}
        </NavLink>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex-center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" />
                Home
              </li>
              <li className="p__opensans">
                <a href="#about" />
                About
              </li>
              <li className="p__opensans">
                <a href="#menu" />
                Menu
              </li>
              <li className="p__opensans">
                <a href="#contact" />
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
