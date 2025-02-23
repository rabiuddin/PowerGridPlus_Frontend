import React from "react";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Home from "./pages/Home"

const App = () => {
  return (
    <>
      <Navbar />
      
      <Home />

      <Footer />
    </>
  );
};

export default App;
