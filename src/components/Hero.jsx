import React from "react";

const Hero = () => {
  return (
    <div className="text-white bg-[#3f3f3f] w-1/2 shadow-2xl py-8 px-4 rounded-2xl md:space-y-5 space-y-2 absolute left-1/2 translate-y-[-80%] translate-x-[-50%]">
      <h1 className="font-bold md:text-4xl text-xl tracking-wide capitalize text-center">
        Delicious food, delivered to you
      </h1>
      <p className="text-center text-sm md:text-[16px]">
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p className="text-center text-sm md:text-[16px]">
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </div>
  );
};

export default Hero;
