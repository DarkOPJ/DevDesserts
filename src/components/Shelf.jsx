import React, { useEffect, useState } from "react";
import Food from "./Food";

const Shelf = () => {
  const [pageLoadStyle, setPageLoadStyle] = useState(
    "opacity-0 translate-y-[30px]"
  );
  const foodItems = [
    { name: "Sushi", description: "Finest fish and veggies", price: 22.99 },
    { name: "Schnitzel", description: "A German specialty!", price: 16.5 },
    {
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    { name: "Green Bowl", description: "Healthy...and green...", price: 18.99 },
  ];
  useEffect(() => {
    requestAnimationFrame(() => {
      setPageLoadStyle("opacity-100 translate-y-0");
    });
  }, []);
  return (
    <div
      className={`bg-white max-w-[950px] mx-auto px-8 pt-3 pb-8 rounded-2xl mb-20 transition-all duration-300 ease-in ${pageLoadStyle}`}
    >
      {foodItems.map((item, index) => (
        <Food
          key={index}
          name={item.name}
          description={item.description}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Shelf;
