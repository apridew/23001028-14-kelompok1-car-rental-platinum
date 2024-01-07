import DetailCarPage from "../pages/DetailCarPage";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import PaymentPage from "../pages/PaymentPage";
import SearchCarPage from "../pages/SearchCarPage";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/search-car",
    element: <SearchCarPage />,
  },
  {
    path: "/detail-car/:id",
    element: <DetailCarPage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
