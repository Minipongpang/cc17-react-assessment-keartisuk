import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  { path: "/home", element: <HomePage /> },
  { path: "/", element: <LoginPage /> },
]);
function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
