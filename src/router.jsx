import { createBrowserRouter } from "react-router-dom";
import Home from "./modules/home";
import ProductCard from "./modules/Product";
import Checkout from "./layout/component/check";
import CartIcon from "./modules/icons";
import Error from "./modules/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Product",
    element: <ProductCard />,
  },
  {
    path: "/check",
    element: <Checkout />,
  },
  {
    path: "icons",
    element: <CartIcon />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
