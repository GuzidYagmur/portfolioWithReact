import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi It's <span>Guzide Yagmur</span></h1>
        <h3 className="text-animation">I'm a <span></span></h3>
        <p>Merhaba, ben Yağmur! Front-end developer olarak kullanıcı dostu, estetik ve işlevsel web projeleri geliştiriyorum. JS, HTML, CSS, Tailwind, React ve Next.js gibi modern teknolojileri kullanarak, hızlı ve etkili çözümler sunmayı hedefliyorum. Her zaman kullanıcı deneyimini ön planda tutarak, projelerimi en iyi şekilde tasarlamak ve geliştirmek için çalışıyorum. 
            Eğer yaratıcı ve kaliteli web projeleri üzerinde çalışmak isterseniz, birlikte projeler geliştirmek için iletişime geçebilirsiniz.</p>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/g%C3%BCzideya%C4%9Fmurba%C5%9Faran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
          <a href="https://github.com/GuzidYagmur" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.instagram.com/gyagmurbasaran/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
        </div>
      </div>
      <div className="home-img">
        <img src="/1.jpg" alt="" />
      </div>
    </section>
  );
}
export default Home;
