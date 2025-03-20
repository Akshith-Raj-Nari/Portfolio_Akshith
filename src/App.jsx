import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
