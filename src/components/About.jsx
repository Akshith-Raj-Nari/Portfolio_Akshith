import "./assets/css/About.css";
import {
  FaCode,
  FaBrain,
  FaUsers,
  FaPython,
  FaReact,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  const skills = [
    { name: "MERN Stack Development", icon: <FaReact /> },
    { name: "Python Programming", icon: <FaPython /> },
    { name: "Data Structures & Algorithms", icon: <FaBrain /> },
    { name: "Communication Skills", icon: <FaUsers /> },
    { name: "Problem Solving", icon: <FaLightbulb /> },
    { name: "Continuous Learning", icon: <FaCode /> },
    { name: "Teamwork", icon: <FaUsers /> },
  ];

  return (
    <div className="container py-5">
      <div className="about-container card shadow p-4">
        <h1 className="display-4 text-center mb-4">About Me</h1>
        <hr />

        <section className="professional-summary my-4">
          <h3>Professional Summary</h3>
          <p className="lead">
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
          <div className="row">
            {skills.map((skill, index) => (
              <div className="col-md-6 col-lg-4 my-2" key={index}>
                <div className="skill-item list-group-item d-flex align-items-center gap-3">
                  <span className="skill-icon">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
