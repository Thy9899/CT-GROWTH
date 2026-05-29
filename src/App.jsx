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
import C2E_Admin from "./pages/C2E_Admin/C2E_Admin";
import C2E_Backend from "./pages/C2E_Backend/C2E_Backend";
import SMS_App from "./pages/Mobile/SMS_App";
import SMS_Backend from "./pages//Mobile/SMS_Backend";

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

      <Route
        path="/click2eat-admin"
        element={
          <>
            <Back />
            <C2E_Admin />
            <Footer />
          </>
        }
      />

      <Route
        path="/click2eat-api"
        element={
          <>
            <Back />
            <C2E_Backend />
            <Footer />
          </>
        }
      />

      <Route
        path="/sms-mobile"
        element={
          <>
            <Back />
            <SMS_App />
            <Footer />
          </>
        }
      />

      <Route
        path="/sms-backend"
        element={
          <>
            <Back />
            <SMS_Backend />
            <Footer />
          </>
        }
      />
    </Routes>
  );
}

export default App;
