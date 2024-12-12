import { useState } from "react";
import { useRef } from "react";
import "./Navbar.css";
import logo from "./images/sam-logo.jpg";
import menuOpen from "./icons/menu.webp";
import menuClose from "./icons/cancel.webp";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenu(id);
  };

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img
        src={logo}
        alt={logo}
        style={{ width: "50px", borderRadius: "100%" }}
      />
      <img
        src={menuOpen}
        alt=""
        style={{ width: "25px" }}
        className="nav-mob-open"
        onClick={openMenu}
      />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menuClose}
          alt=""
          className="nav-mob-close"
          style={{ width: "40px" }}
          onClick={closeMenu}
        />
        <li>
          <p onClick={() => handleScroll("home")}>Home</p>
          {menu === "home" && <p className="splash">💦</p>}
        </li>
        <li>
          <p onClick={() => handleScroll("about")}>About Me</p>
          {menu === "about" && <p className="splash">💦</p>}
        </li>
        <li>
          <p onClick={() => handleScroll("services")}>Services</p>
          {menu === "services" && <p className="splash">💦</p>}
        </li>
        <li>
          <p onClick={() => handleScroll("work")}>Portfolio</p>
          {menu === "work" && <p className="splash">💦</p>}
        </li>
        <li>
          <p onClick={() => handleScroll("contact")}>Contact</p>
          {menu === "contact" && <p className="splash">💦</p>}
        </li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
