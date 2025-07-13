import { Meow_Script } from "next/font/google";
import React from "react";

// sign font
const signFont = Meow_Script({
  variable: "--font-sign",
  weight: ["400"],
});

const Navbar = () => {
  return (
    <nav
      className={`fixed top-0 left-0 w-screen text-white z-[999] px-[3%] py-4 ${signFont.variable}`}
    >
      <h1 className="font-sign text-4xl transform -rotate-2 max-w-fit hover:rotate-0 transition-transform ease-in cursor-pointer">
        picominds
      </h1>
    </nav>
  );
};

export default Navbar;
