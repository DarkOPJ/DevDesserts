import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import Hero from "./components/Hero";
import Shelf from "./components/Shelf";
import { createPortal } from "react-dom";
import Backdrop from "./components/Backdrop";
import CartModal from "./components/CartModal";

const App = () => {
  const [showModal, setShowModal] = useState(false)
  return (
    <section className="bg-[#3f3f3f] pb-10 relative">
      <Navbar setShowModal={setShowModal}/>

      <HeroImage />

      <Hero />

      <div className="w-full mt-20 px-4">
        <Shelf />
      </div>

      {showModal &&
        createPortal(<Backdrop setShowModal={setShowModal}/>, document.getElementById("backdrop-root"))
      }
      {showModal &&
        createPortal(<CartModal setShowModal={setShowModal}/>, document.getElementById("overlay-root"))
      }
    </section>
  );
};

export default App;
