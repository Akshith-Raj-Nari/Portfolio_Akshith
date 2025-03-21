import data from "./assets/data.json";
import "./projects.css";

function Projects() {
  return (
    <>
      <h1 className="display-3 text-center">
        <strong>PROJECTS</strong>
      </h1>
      <div className="container">
        {data.Projects.map((project) => (
          <div key={project.id} className="container-x p-3 mb-4 shadow">
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                <strong className="fs-4">TITLE</strong>
              </div>
              <div className="col-6 col-md-8 col-lg-9 fs-4">{project.name}</div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                <strong className="fs-4">DESCRIPTION</strong>
              </div>
              <div className="col-6 col-md-8 col-lg-9 fs-5">
                {project.description}
              </div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                <strong className="fs-4">TECHNOLOGIES</strong>
              </div>
              <div className="col-6 col-md-8 col-lg-9 fs-5">{project.Tech}</div>
            </div>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3">
                <strong className="fs-4">LINK</strong>
              </div>
              <div className="col-6 col-md-8 col-lg-9 fs-5">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url && project.name}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
