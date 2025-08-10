import React from "react";
import Header from "./components/Header";
import Destinations from "./components/Destinations";
import Stories from "./components/Stories";
import Email from "./components/Email";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className=" bg-[#f0f8ff] ">
      <div className="p-12 max-w-screen">
        <Header />
        <Destinations />
        <Stories />
      </div>
      <Email />
      <Footer />
    </div>
  );
};

export default App;
