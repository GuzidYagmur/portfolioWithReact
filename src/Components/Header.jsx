import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="header">
      <a href="#home" className="logo">Güzide Yağmur <span>Başaran</span></a>
      <FontAwesomeIcon icon={faBars} onClick={() => setMenuOpen(!menuOpen)} />
      <nav className={`navbar ${menuOpen ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#education">Education</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
export default Header;