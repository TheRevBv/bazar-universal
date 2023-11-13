import { createBrowserRouter } from "react-router-dom";
import Layout from "@components/Layout";
import HomePage from "@pages/HomePage";
import DetalleProductoPage from "@pages/productos/DetalleProductoPage";
import { loader as detalleProductoLoader } from "@pages/productos/DetalleProductoPage";
import ErrorPage from "@pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    exact: true,
    children: [
      {
        path: "/",
        element: <HomePage />,
        exact: true,
        index: true,
        errorElement: <ErrorPage />,
      },
      {
        path: "/producto/:id",
        element: <DetalleProductoPage />,
        exact: true,
        loader: detalleProductoLoader,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

export default router;
