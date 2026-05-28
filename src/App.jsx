import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./home/Home";
import Footer from "./components/footer/Footer";
import PDS from "./pages/PDS_Project/PDS";
import Back from "./components/back/Back";

function App() {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Routes>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <>
            <Home />
            <Footer />
          </>
        }
      />

      {/* Project Detail Page */}
      <Route
        path="/psd-project"
        element={
          <>
            <Back />
            <PDS />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
