import React from "react";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div>
      <Home />
      <Footer />
    </div>
  );
}

export default App;
