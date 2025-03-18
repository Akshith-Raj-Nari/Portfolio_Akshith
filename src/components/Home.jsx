function Home() {
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
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Project.jpg"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">PROJECTS</p>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="./Resume.png"
            alt="Card image cap"
          />
          <div className="card-body">
            <p className="card-text">RESUME</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
