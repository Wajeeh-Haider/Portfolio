import React from "react";
import { Header, Skills, Testimonials, Footer, About, Work } from "./container";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
