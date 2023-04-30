import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home";

const router = createBrowserRouter([{
  element: <BaseLayout />,
  children: [{
    path: '/',
    element: <Home />
  }]
}]);

export default router;