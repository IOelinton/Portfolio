import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

import "./styles/aside.css";

import "./styles/app.css";
import "./styles/cssReset.css";
import NavbarLayout from "./Components/NavbarLayout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <NavbarLayout>
          <Home />
        </NavbarLayout>
      ),
    },
    {
      path: "/about",
      element: (
        <NavbarLayout>
          <About />
        </NavbarLayout>
      ),
    },
    {
      path: "/skills",
      element: (
        <NavbarLayout>
          <Skills />
        </NavbarLayout>
      ),
    },
    {
      path: "/projects",
      element: (
        <NavbarLayout>
          <Projects />
        </NavbarLayout>
      ),
    },
    {
      path: "/contact",
      element: (
        <NavbarLayout>
          <Contact />{" "}
        </NavbarLayout>
      ),
    },
  ]);
  return (
    <div className="App">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
