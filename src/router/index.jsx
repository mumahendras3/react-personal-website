import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import About from "../pages/About";

const router = createBrowserRouter([{
  element: <BaseLayout />,
  children: [{
    path: '/',
    element: <Home />
  }, {
    path: '/portfolio',
    element: <Portfolio />
  }, {
    path: '/about',
    element: <About />
  }]
}]);

export default router;