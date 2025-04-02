import React from "react";
import CartButton from "./CartButton";
const Navbar = ({setShowModal}) => {
  return (
    <div className="fixed top-0 left-0 z-10 bg-amber-800 w-full text-white p-4">
      <div className="md:w-3/4 flex justify-between items-center gap-5 m-auto">
        <h1 className="font-bold text-4xl tracking-wide">ReactMeals</h1>

        <CartButton setShowModal={setShowModal}/>
      </div>
    </div>
  );
};

export default Navbar;
