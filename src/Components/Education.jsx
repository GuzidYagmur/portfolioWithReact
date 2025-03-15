
function Education() {
  const educationData = [
    { title: "High School", year: "2017-2021", description:"Serdivan Fen Lisesi" },
    { title: "University", year: "2022-", description:"Altınbaş University - Software Engineering (English)" },
    { title: "Extra Education", year: "2024-Present", description:"AcunMedya Academy - Front-End Developer Bootcamp" },
    { title: "Internship", year: "2025", description:"Luki Chat App" },
    { title: "Job", year: "2025-Present", description:"Luki Chat App" }
  ];
  return (
    <section className="education" id="education">
      <h2 className="heading">Education</h2>
      <div className="timeline-items">
        {educationData.map((item, index) => (
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
  );
}
export default Education;