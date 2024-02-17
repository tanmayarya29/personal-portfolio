import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import About from "../pages/About";
import Work from "../pages/Work";
import App from "../App";
import Contact from "../pages/Contact";
import Education from "../pages/Education";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
        path: "/",
        element: <Home />,
        },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
