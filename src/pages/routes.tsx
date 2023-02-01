import { createBrowserRouter } from "react-router-dom";
import { Main } from "./MainPage";
import { Offer } from "./Offer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/oferta",
    element: <Offer />,
  },
]);
