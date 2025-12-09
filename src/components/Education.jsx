function Education() {
  return (
    <>
      <h1 className="display-3 text-center my-4">Education</h1>
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-pause="hover"
        style={{ height: "60vh", backgroundColor: "#2C3E50" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "50%",
                backgroundColor: "#ECF0F1",
                marginTop: "7%",
                borderRadius: "20px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s",
              }}
            >
              <h3 className="text-primary">CMR Engineering College</h3>
              <h5>Bachelor of Technology in Computer Science</h5>
              <p>2021-2025</p>
              <p>CGPA: 7.53</p>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "50%",
                backgroundColor: "#ECF0F1",
                marginTop: "7%",
                borderRadius: "20px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s",
              }}
            >
              <h3 className="text-primary">Narayana IIT Academy</h3>
              <h5>Intermediate</h5>
              <p>2019-2021</p>
              <p>Percentage: 90.2%</p>
            </div>
          </div>
          <div className="carousel-item">
            <div
              className="container-fluid d-flex flex-column align-items-center justify-content-center"
              style={{
                width: "70%",
                height: "50%",
                backgroundColor: "#ECF0F1",
                marginTop: "7%",
                borderRadius: "20px",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.3)",
                transition: "transform 0.3s",
              }}
            >
              <h3 className="text-primary">Mount Litera Zee High School</h3>
              <h5>Secondary School (10th class)</h5>
              <p>2018-2019</p>
              <p>Percentage: 83%</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Education;
