import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Cart from "./pages/cart/Cart";
import Header from "./components/header/Header";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/home/Home";

const AppRouters = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout Outlet={Outlet} />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRouters} />);
