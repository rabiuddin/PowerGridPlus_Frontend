import React from "react";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Home from "./pages/Home/Home";

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
