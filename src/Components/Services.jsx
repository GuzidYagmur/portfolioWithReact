
function Services() {
  const services = [
    { title: "UI Design", description: "I design user-friendly and visually appealing interfaces. With every project, I focus on prioritizing user experience (UX), creating functional and modern designs. My goal is to balance visual aesthetics with functionality, ensuring users can interact seamlessly with the interface." },
    { title: "Frontend Development", description: "In frontend development, I use HTML, CSS, JavaScript, React, Tailwind, NextJS and modern libraries to create dynamic and interactive websites. I develop responsive designs that work across all devices, ensuring a fast and smooth user experience." },
    { title: "Web Development", description: "In web development, I focus on integrating backend and frontend, optimizing performance, and building user-friendly websites. Using technologies like React and Next.js, I create powerful, scalable, and sustainable web applications." },
    { title: "Testing", description: "I perform comprehensive tests to ensure the security and accuracy of the software. Through manual and automated testing, I identify issues early, guaranteeing high quality at every stage of the project. My testing process is carried out meticulously to create a flawless user experience." }
  ];
  return (
    <section className="services" id="services">
      <h2 className="heading">Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-box" key={index}>
            <div className="service-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Services;