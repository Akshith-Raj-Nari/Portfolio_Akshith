import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
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
        <h1>Hi! This is Akshith Raj Nari</h1>
      </div>
      <Outlet />
    </>
  );
}

export default App;
