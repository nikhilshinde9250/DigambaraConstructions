import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import OngoingProjects from "./pages/OngoingProjects";
import CompletedProjects from "./pages/CompletedProjects";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects/ongoing", element: <OngoingProjects /> },
      { path: "projects/completed", element: <CompletedProjects /> },
      { path: "about", element: <AboutUs /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);
