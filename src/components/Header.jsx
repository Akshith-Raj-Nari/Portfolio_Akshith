import { Link } from "react-router-dom";

function Header() {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ backgroundColor: "#e3f2fd" }}
    >
      <Link
        className="navbar-brand"
        to={"/"}
        style={{ fontSize: "1.5em", fontWeight: "bold" }}
      >
        <img
          src=".\profile.png"
          alt="Profile Picture"
          style={{
            marginRight: "15px",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        />
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
        <ul
          className="navbar-nav mr-auto"
          style={{
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            fontSize: "1.2em",
            fontWeight: "bold",
          }}
        >
          <li className="nav-item">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/projects">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/resume">
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
