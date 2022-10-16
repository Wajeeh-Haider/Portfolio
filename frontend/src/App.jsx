import React from "react";
import { Header, Skills, Testimonials, Footer, About } from "./container";
import Navbar from "./components/Navbar/Navbar";
import './App.scss'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Testimonials />
      <Footer />
    </>
  );
};

export default App;
