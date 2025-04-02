import React from "react";
import heroImg from "../assets/image.png";
const HeroImage = () => {
  return (
    <div className="w-full relative h-[430px] overflow-hidden">
  <img className="absolute top-0 left-0 w-full h-full object-cover" src={heroImg} alt="Food image" />
  <div className="w-full h-24 bg-[#3f3f3f] clip-triangle absolute bottom-0"></div>
</div>
  );
};

export default HeroImage;
