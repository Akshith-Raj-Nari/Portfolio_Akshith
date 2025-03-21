import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Router from "./components/Routing.jsx";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
);
