import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  { path: "/", element: <Navigate to={"/home"} /> },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
