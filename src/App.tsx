import { useEffect } from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import JobCampaign from "./pages/JobCampaign";
import Company from "./pages/Company";
import RecruiterProfile from "./pages/RecruiterProfile";

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
      case "/jobcampaign":
        title = "";
        metaDescription = "";
        break;
      case "/recruiterprofile":
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
      ) as HTMLMetaElement | null;
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <div>
      {/* Render ToastContainer */}
      <ToastContainer />

      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<JobCampaign />} />
        <Route path="/company" element={<Company />} />
        <Route
          path="/recruiterprofile"
          element={<RecruiterProfile />}
        />
      </Routes>
    </div>
  );
}
export default App;
