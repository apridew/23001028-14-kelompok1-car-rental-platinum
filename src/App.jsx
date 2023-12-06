import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailCarPage from "./pages/DetailCarPage";
import LandingPage from "./pages/LandingPage";
import SearchCarPage from "./pages/SearchCarPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/search-car" element={<SearchCarPage />} />
          <Route path="/detail-car/:id" element={<DetailCarPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
