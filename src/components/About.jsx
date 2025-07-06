import "./assets/css/About.css";
function About() {
  return (
    <div className="container">
      <div className="about-container">
        <h1 className="display-3 text-center my-4">About Me</h1>
        <hr />
        <section className="professional-summary my-4">
          <h3>Professional Summary</h3>
          <p>
            I am a B.Tech graduate currently interning at Accenture with
            hands-on experience in MERN stack development, Python programming,
            and Data Structures & Algorithms. I specialize in building scalable,
            efficient applications and solving complex problems. My strong
            communication skills and passion for continuous learning drive me to
            stay updated with emerging technologies and contribute effectively
            in team environments.
          </p>
        </section>
        <hr />
        <section className="skills my-4">
          <h3>Skills</h3>
          <ul className="list-group list-group-flush">
            {[
              "MERN Stack Development",
              "Python Programming",
              "Data Structures & Algorithms",
              "Communication Skills",
              "Problem Solving",
              "Continuous Learning",
              "Teamwork",
            ].map((skill, index) => (
              <li key={index} className="list-group-item">
                {skill}
              </li>
            ))}
          </ul>
        </section>
        <hr />
      </div>
    </div>
  );
}

export default About;
