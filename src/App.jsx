import React from "react";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./home/Home";
import Footer from "./components/footer/Footer";
import Back from "./components/back/Back";
import PDS from "./pages/PDS_Project/PDS";
import C2E_Customer from "./pages/C2E_Customer/C2E_Customer";

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
        path="/pds-project"
        element={
          <>
            <Back />
            <PDS />
            <Footer />
          </>
        }
      />

      <Route
        path="/click2eat-customer"
        element={
          <>
            <Back />
            <C2E_Customer />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
