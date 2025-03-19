import { useState } from "react";
import "./Home.css";
import Projects from "./Projects";
import Resume from "./Resume";
import Certificates from "./Certificates";
import Education from "./Education";

function Home() {
  let [selected, setSelected] = useState("");
  const handleClick = () => {
    const cardText = event.target
      .closest(".card")
      .querySelector(".card-text").textContent;
    setSelected(cardText);
  };
  return (
    <>
      <div
        className="container"
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div className="card" onClick={handleClick} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Project.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">PROJECTS</p>
          </div>
        </div>
        <div className="card" onClick={handleClick} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Resume.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">RESUME</p>
          </div>
        </div>
        <div className="card" onClick={handleClick} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Certificate.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">CERTIFICATES</p>
          </div>
        </div>
        <div className="card" onClick={handleClick} style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Education.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">EDUCATION</p>
          </div>
        </div>
      </div>
      <div className="container">
        {(selected == "PROJECTS" && <Projects />) ||
          (selected == "RESUME" && <Resume />) ||
          (selected == "CERTIFICATES" && <Certificates />) ||
          (selected == "EDUCATION" && <Education />)}
      </div>
    </>
  );
}

export default Home;
