import React from "react";
import P from "@/assets/background/P.svg";
import Image from "next/image";

const BackgroundImages = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 scale-150">
      <Image src={P} alt="P" fill={true} style={{ top: "10vh" }} />
    </div>
  );
};

export default BackgroundImages;
