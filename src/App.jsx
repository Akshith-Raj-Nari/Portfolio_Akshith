import React from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="text-center p-4">
          © 2025 Akshith Raj Nari. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
