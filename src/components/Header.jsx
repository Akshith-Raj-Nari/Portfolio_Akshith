import { Link } from "react-router-dom";
import "./assets/css/Header.css";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <Link className="navbar-brand" to={"/"}>
        <img src="./Profile.jpg" alt="Profile" className="profile-pic" />
        Akshith Raj Nari
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto nav-gradient-menu">
          <li
            className="nav-gradient-item"
            style={{ "--i": "#a955ff", "--j": "#ea51ff" }}
          >
            <Link className="nav-link" to="/home">
              <ion-icon name="home-outline"></ion-icon>
              <span className="nav-text">Home</span>
            </Link>
          </li>
          <li
            className="nav-gradient-item"
            style={{ "--i": "#56CCF2", "--j": "#2F80ED" }}
          >
            <Link className="nav-link" to="/about">
              <ion-icon name="person-outline"></ion-icon>
              <span className="nav-text">About</span>
            </Link>
          </li>
          <li
            className="nav-gradient-item"
            style={{ "--i": "#FF9966", "--j": "#FF5E62" }}
          >
            <Link className="nav-link" to="/projects">
              <ion-icon name="briefcase-outline"></ion-icon>
              <span className="nav-text">Projects</span>
            </Link>
          </li>
          <li
            className="nav-gradient-item"
            style={{ "--i": "#80FF72", "--j": "#7EE8FA" }}
          >
            <Link className="nav-link" to="/resume">
              <ion-icon name="document-text-outline"></ion-icon>
              <span className="nav-text">Resume</span>
            </Link>
          </li>
          <li
            className="nav-gradient-item"
            style={{ "--i": "#ffa9c6", "--j": "#f434e2" }}
          >
            <Link className="nav-link" to="/contact">
              <ion-icon name="call-outline"></ion-icon>
              <span className="nav-text">Contact</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
