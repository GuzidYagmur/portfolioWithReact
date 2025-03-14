import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'; 
import { faLinkedin, faGithub, faInstagram} from "@fortawesome/free-brands-svg-icons";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className="header">
        <a href="#home" className="logo">
          Güzide Yağmur <span>Başaran</span>
        </a>
        <FontAwesomeIcon 
          icon={faBars} 
           onClick={() => {
             console.log('Menu button clicked');
            setMenuOpen(!menuOpen)} }
        />
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      
      <section className="home" id="home">
        <div className="home-content">
          <h1>
            Hi It's <span>Guzide Yagmur</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            "Merhaba, ben Yağmur! Front-end developer olarak kullanıcı dostu, estetik ve işlevsel web projeleri geliştiriyorum. JS, HTML, CSS, Tailwind, React ve Next.js gibi modern teknolojileri kullanarak, hızlı ve etkili çözümler sunmayı hedefliyorum. Her zaman kullanıcı deneyimini ön planda tutarak, projelerimi en iyi şekilde tasarlamak ve geliştirmek için çalışıyorum. 
            Eğer yaratıcı ve kaliteli web projeleri üzerinde çalışmak isterseniz, birlikte projeler geliştirmek için iletişime geçebilirsiniz."
          </p>
          <div className="social-icons">
             <a href="https://www.linkedin.com/in/g%C3%BCzideya%C4%9Fmurba%C5%9Faran/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/GuzidYagmur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/gyagmurbasaran/?next=%2F"target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
           
          </div>
          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src="/1.jpg" alt="" />
        </div>
      </section>
      
      
      <section className="education" id="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
            {[
              { title: "High School", year: "2017-2021", description:"Serdivan Fen Lisesi" },
              { title: "University", year: "2022-", description:"Altınbaş University - Software Engineering (English)" },
              { title: "Extra Education", year: "2024-Present", description:"AcunMedya Academy - Front-End Developer Bootcamp" },
              { title: "Internship", year: "2025", description:"Luki Chat App" },
              { title: "Job", year: "2025-Present", description:"Luki Chat App" }
            ].map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-date">{item.year}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
      </div>
</section>


     
      <section className="services" id="services">
  <h2 className="heading">Services</h2>
  <div className="services-container">
    {[
      {
        title: "UI Design",
        description: "I design user-friendly and visually appealing interfaces. With every project, I focus on prioritizing user experience (UX), creating functional and modern designs. My goal is to balance visual aesthetics with functionality, ensuring users can interact seamlessly with the interface."
      },
      {
        title: "Frontend Development",
        description: "In frontend development, I use HTML, CSS, JavaScript, React, Tailwind, NextJS and modern libraries to create dynamic and interactive websites. I develop responsive designs that work across all devices, ensuring a fast and smooth user experience."
      },
      {
        title: "Web Development",
        description: "In web development, I focus on integrating backend and frontend, optimizing performance, and building user-friendly websites. Using technologies like React and Next.js, I create powerful, scalable, and sustainable web applications."
      },
      {
        title: "Testing",
        description: "I perform comprehensive tests to ensure the security and accuracy of the software. Through manual and automated testing, I identify issues early, guaranteeing high quality at every stage of the project. My testing process is carried out meticulously to create a flawless user experience."
      }
    ].map((service, index) => (
      <div className="service-box" key={index}>
        <div className="service-info">
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

       <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form action={"https://getform.io/f/bqokqrrb"} method="POST">
          <div className="input-group">
            <div className="input-box">
              <input type="text"name="name" placeholder="Full Name" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <input type="number" name="number" placeholder="Phone Number" required />
              <input type="text" name="subject" placeholder="Subject" required />
            </div>
          </div>

          <div className="input-group-2">
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              required
            ></textarea>
            <input type="submit" name="message" value="Send Message" className="btn" />
          </div>
        </form>
      </section>

      
      <footer className="footer">
        <div className="social">
         <a href="https://www.linkedin.com/in/g%C3%BCzideya%C4%9Fmurba%C5%9Faran/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://github.com/GuzidYagmur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://www.instagram.com/gyagmurbasaran/?next=%2F"target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
        </div>
        <ul className="list">
          {["FAQ", "Services", "About Me", "Contact", "Testimonials"].map(
            (item, index) => (
              <li key={index}>
                <a href="#">{item}</a>
              </li>
            )
          )}
        </ul>
        <p className="copyright">
          &copy; Güzide Yağmur Başaran | All Rights Reserved
        </p>
      </footer>
      
    </div>
  );
}

export default App;
