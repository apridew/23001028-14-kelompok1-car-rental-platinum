import AuthRoute from "../hoc/AuthRoute";
import ProtectedRoute from "../hoc/ProtectedRoute";
import DetailCarPage from "../pages/DetailCarPage";
import EtiketPaymentPage from "../pages/EtiketPaymentPage";
import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import PaymentPage from "../pages/PaymentPage";
import PaymentUploadPage from "../pages/PaymentUploadPage";
import PdfPreviewPage from "../pages/PdfPreviewPage";
import RegisterPage from "../pages/RegisterPage";
import SearchCarPage from "../pages/SearchCarPage";
import SignIn from "../pages/SignIn";

export const routes = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/sign-in",
    element: (
      <AuthRoute>
        <SignIn />,
      </AuthRoute>
    ),
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
    path: "/payment/:id",
    element: (
      <ProtectedRoute>
        <PaymentPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment/:id/:bank",
    element: (
      <ProtectedRoute>
        <PaymentUploadPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment/:id/etiket",
    element: (
      <ProtectedRoute>
        <EtiketPaymentPage />,
      </ProtectedRoute>
    ),
  },
  {
    path: "/payment/:id/pdf",
    element: (
      <ProtectedRoute>
        <PdfPreviewPage />,
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
