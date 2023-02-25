import { createBrowserRouter } from "react-router-dom";
import { Main } from "./MainPage";
import { Offer } from "./Offer";
import { ForYou } from "./ForYou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/oferta",
    element: <Offer />,
  },
  {
    path: "/dla-ciebie",
    element: <ForYou />,
  },
]);
