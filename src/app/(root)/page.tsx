import React from "react";
import Header from "@/components/sections/landingpage/header";
import BackgroundImages from "@/components/background-images";

const page = () => {
  return (
    <div className="bg-black relative overflow-x-hidden">
      <div className="relative z-10 bg-black/10 backdrop-blur-[120px] max-sm:backdrop-blur-[50px]">
        <Header />
      </div>

      <BackgroundImages />
    </div>
  );
};

export default page;
