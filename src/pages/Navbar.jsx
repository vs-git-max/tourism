import { navItems } from "@/helpers";
import React from "react";
import Logo from "./Logo";
import LoginBtn from "./LoginBtn";
import SearchBtn from "./SearchBtn";

const Navbar = () => {
  const handleClick = () => {};

  return (
    <div className=" flex items-center w-full justify-between fixed top-0  left-0 right-0 p-5 backdrop-blur-md bg-amber-50">
      <Logo />
      <div className="flex items-center justify-between w-5/12">
        {navItems.map((navItem) => (
          <a
            href={navItem.link}
            key={navItem.id}
            className="text-[16px] font-bold text-black"
            onClick={() => handleClick()}
          >
            {navItem.label}
          </a>
        ))}
      </div>
      <div className="flex items-center justify-between gap-2">
        <SearchBtn />
        <LoginBtn />
      </div>
    </div>
  );
};

export default Navbar;
