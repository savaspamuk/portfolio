import React from "react";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyPortfolio />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default Home;
