import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import SearchCarPage from "./pages/SearchCarPage";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./utils/ProtectedRoute";
import Payment from "./pages/Payment"

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/search-car" element={<SearchCarPage />} />
          <Route path="/detail-car/:id" element={<DetailCarPage />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/payment" element= {<Payment />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
