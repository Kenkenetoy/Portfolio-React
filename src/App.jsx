import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
// Header pages
import Hero from "./pages/HeaderComponents/Hero/Hero";

// Content pages
import Skillz from "./pages/ContentComponents/Skillz/Skillz";
import Achievement from "./pages/ContentComponents/Achievement/Achievement";
import Projects from "./pages/ContentComponents/Projects/Projects";

// Footer Component
import AboutMe from "./pages/FooterComponents/AboutMe/AboutMe";

// Utility pages
import { name } from "./info";
import ScrollToTopButton from "./pages/UtilityComponents/ScrollToTopButton/ScrollToTopButton";

function App() {
  useEffect(() => {
    document.title = `${name.firstname} ${name.lastname}`;
    setTimeout(() => {}, 800);
  }, []);

  return (
    <>
      <>
        <BrowserRouter basename="/Portfolio-React">
          {/* Your routes go here */}
        </BrowserRouter>
        <Hero />
        <Skillz />
        <ScrollToTopButton />
        <Achievement />
        <Projects />
        <AboutMe />
      </>
    </>
  );
}

export default App;
