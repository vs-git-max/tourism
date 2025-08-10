import React, { useState } from "react";
import { Button } from "./ui/button";

const Email = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <div className="relative max-w-screen bg-black h-96 rounded-xl">
      <div className="flex items-center justify-center gap-4 absolute top-[50%] left-0 right-0 bottom-[50%]  flex-col">
        <h1 className="text-amber-50 text-2xl md:text-4xl font-bold leading-tight">
          Get Your Travel Inspiration <br /> Straight to Your Inbox
        </h1>
        <div className="flex items-center justify-between gap-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="bg-white rounded-full px-4 py-2 w-96 mt-2 text-black text-lg font-bold outline-none"
            placeholder="Add your email..."
          />
          <Button
            onClick={() => handleEmailSubmit(event)}
            className="bg-orange-500 rounded-full cursor-pointer hover:bg-orange-600 px-8 py-6 text-lg font-bold"
          >
            Submit
          </Button>
        </div>
        <p className="text-white font-medium text-lg">
          Add your email here to get our weekly updates on the latest tourism
          world
        </p>
      </div>
    </div>
  );
};

export default Email;
