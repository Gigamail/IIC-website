import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
  BrowserRouter
} from "react-router-dom";

import LandingPage1 from "./pages/LandingPage1";
import LandingPage2 from "./pages/LandingPage2";
import About from "./pages/About";
import "./CSS/style.css";
import Footer from './Components/Footer';
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage1 />} />
      <Route path="/LandingPage2" element={<LandingPage2 />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
  );
}
export default App;
