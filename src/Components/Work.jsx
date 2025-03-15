import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import ProjectCard from "./ProjectCard";
import "./Work.css"; 

const works = [
  { imgSrc: "", title: "Proje 1", tags: ["API", "MVC", "Development"], projectLink: "#" },
  { imgSrc: "", title: "Proje 2", tags: ["API", "SPA"], projectLink: "#" },
  { imgSrc: "", title: "Proje 3", tags: ["Development", "API"], projectLink: "#" },
  { imgSrc: "", title: "Proje 4", tags: ["Web-design", "Development"], projectLink: "#" },
  { imgSrc: "", title: "Proje 5", tags: ["eCommerce", "Development"], projectLink: "#" },
  { imgSrc: "", title: "Proje 6", tags: ["Web-design", "Development"], projectLink: "#" },
];

const Work = () => {
  useEffect(() => {
    ScrollReveal().reveal(".reveal-up", {
      origin: "bottom",
      distance: "60px",
      duration: 2000,
      delay: 200,
      reset: true,
    });

    ScrollReveal().reveal(".project-item", {
      origin: "left",
      distance: "50px",
      duration: 1500,
      delay: 200,
      reset: true,
      interval: 150,
    });
  }, []);

  return (
    <section id="work" className="work-section">
      <div className="container">
        <h2 className="headline reveal-up">Projelerim</h2>

        <div className="project-grid">
          {works.map(({ imgSrc, title, tags, projectLink }, key) => (
            <ProjectCard
              key={key}
              imgSrc={imgSrc}
              title={title}
              tags={tags}
              projectLink={projectLink}
              classes="project-item"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
