import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";
import Dashboard from "../layout/Dashboard/Dashboard";
import About from "../pages/Main/About";
import Blogs from "../pages/Main/Blogs";
import Contact from "../pages/Main/Contact";
import AddProduct from "../pages/Dashboard/components/AddProduct";
import UpdateBlog from "../pages/Dashboard/components/UpdateBlog";

// create all routes
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/blogs",
        element: <Blogs />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/contact",
        element: <Contact />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/new-blog",
        element: <AddProduct />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/dashboard/update-blog",
        element: <UpdateBlog />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default routes;
