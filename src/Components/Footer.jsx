import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
         <a href="https://www.linkedin.com/in/g%C3%BCzideya%C4%9Fmurba%C5%9Faran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/GuzidYagmur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com/gyagmurbasaran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
      </div>
            <ul className="list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#home">About Me</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
      <p>&copy; Güzide Yağmur Başaran | All Rights Reserved</p>
    </footer>
  );
}
export default Footer;