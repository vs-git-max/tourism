import { Button } from "@/components/ui/button";
import React from "react";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.jpg";
import pic3 from "../assets/pic3.jpg";

const HeroSection = () => {
  return (
    <div className="flex item-center mt-8 w-full justify-between gap-3">
      <div className="flex flex-col min-h-screen items-start gap-3  justify-center w-1/2">
        <h1 className="font-bold text-4xl md:text-7xl leading-tight">
          Discover the World's <span className="text-orange-500">Hidden</span>{" "}
          Wonders
        </h1>
        <p className="text-lg text-foreground font-medium">
          Embark on unique adventures, from hidden gems to once-in-a-lifetime
          experiences. Explore the unknown to create unforgettable memories and
          find the stories waiting to be told.
        </p>
        <Button className="bg-orange-500 text-gray-100 hover:bg-orange-600 cursor-pointer transition-all duration-300">
          Travel with us
        </Button>
      </div>

      <div className="flex items-center justify-center gap-4 w-1/2">
        <img
          src={pic1}
          alt=""
          className="rounded-lg shadow-lg object-cover h-120 w-1/2"
        />
        <div className="flex justify-center items-center flex-col gap-2">
          <img
            src={pic2}
            alt=""
            className="rounded-lg shadow-lg object-cover w-2/3 h-80"
          />
          <img
            src={pic3}
            alt=""
            className="rounded-lg shadow-lg object-cover w-2/3  h-80 "
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
