import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";

const router = createBrowserRouter([{
  element: <BaseLayout />,
  children: [{
    path: '/',
    element: <Home />
  }, {
    path: '/portfolio',
    element: <Portfolio />
  }]
}]);

export default router;