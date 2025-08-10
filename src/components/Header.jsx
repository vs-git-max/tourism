import HeroSection from "@/pages/HeroSection";
import Navbar from "@/pages/Navbar";
import React from "react";

const Header = () => {
  return (
    <div className=" min-h-screen">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
