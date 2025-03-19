import { createBrowserRouter } from "react-router-dom";
import Error from "./Error.jsx";
import Home from "./Home.jsx";
import LandingPage from "./LandingPage.jsx";
import App from "../App.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Resume from "./Resume.jsx";
import Contact from "./Contact.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default Router;
