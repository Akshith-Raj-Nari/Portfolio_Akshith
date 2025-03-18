import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Error from "./Error.jsx";
import Home from "./Home.jsx";
// import About from "./components/About.jsx";
// import Projects from "./components/Projects.jsx";
// import Resume from "./components/Resume.jsx";
// import Contact from "./components/Contact.jsx";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      //   {
      //     path: "/about",
      //     element: <About />,
      //   },
      //   {
      //     path: "/projects",
      //     element: <Projects />,
      //   },
      //   {
      //     path: "/resume",
      //     element: <Resume />,
      //   },
      //   {
      //     path: "/contact",
      //     element: <Contact />,
      //   },
    ],
  },
]);

export default Router;
