import "./assets/css/Resume.css";

function Resume() {
  return (
    <div className="resume">
      {/* Sidebar Section */}
      <aside className="side-bar">
        <img
          src="./Profile.jpg"
          alt="Akshith Raj Nari"
          width={200}
          className="profile-pic"
        />
        <h1>Akshith Raj Nari</h1>
        <p>Associate Software Engineer | Web Developer | Software Developer</p>
        <hr />

        <section>
          <h3>Personal Details</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:akshithraj5003@gmail.com">
              akshithraj5003@gmail.com
            </a>
          </p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a
              href="https://www.linkedin.com/in/akshith-raj-nari-b3137625a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit my profile
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Akshith-Raj-Nari?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit me
            </a>
          </p>
        </section>
      </aside>

      {/* Main Content Section */}
      <main className="main-bar">
        <section>
          <h1>Professional Summary</h1>
          <p>
            Passionate software developer with experience in web development and
            software engineering. Proficient in React, JavaScript, and Python,
            with hands-on experience in full-stack development. Adept at
            building scalable applications and collaborating with teams to
            deliver high-quality products.
          </p>
        </section>

        <section>
          <h1>Projects</h1>
          <article>
            <h4>Simple Basic Calculator</h4>
            <p>Developed a basic calculator using HTML, CSS, and JavaScript.</p>
          </article>
          <article>
            <h4>XO GAME</h4>
            <p>
              Developed a web-based tic-tac-toe game using HTML, CSS, and
              Javascript. Deployed it on Netlify using version controlling
              github.
            </p>
          </article>
          <article>
            <h4>To Do List</h4>
            <p>
              Created a simple to-do list application using React and deployed
              it on Netlify.
            </p>
          </article>
          <article>
            <h4>IoT-Based Vehicle Security System</h4>
            <p>
              Implemented a GPS-GSM-based security system for real-time vehicle
              tracking and anti-theft mechanisms.
            </p>
          </article>
        </section>

        <section>
          <h1>Skills</h1>
          <ul id="skills-list">
            <li>HTML, CSS, JavaScript</li>
            <li>React, Flask, SQLite</li>
            <li>Python, Machine Learning</li>
            <li>REST APIs, IoT Integration</li>
          </ul>
        </section>

        <section>
          <h1>Education</h1>
          <h4>B.Tech in Computer Science & Engineering</h4>
          <p>CMR Engineering College (2021 - 2025)</p>
          <p>CGPA: 7.28</p>
        </section>
      </main>
    </div>
  );
}

export default Resume;
