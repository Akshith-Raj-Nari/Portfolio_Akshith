function LandingPage() {
  return (
    <div
      className="container"
      style={{
        marginTop: "30px",
        padding: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "gray",
      }}
    >
      <img
        src="./profile.png"
        alt="Akshith Raj Nari image"
        style={{
          marginRight: "15px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
        }}
      />
      <h1 className="display-2">Hi! This is Akshith Raj Nari</h1>
      <h2 className="display-6">
        Intern at Accenture | Web Developer | Software Developer
      </h2>
    </div>
  );
}

export default LandingPage;
