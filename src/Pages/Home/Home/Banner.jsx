import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div class=" sm:w-full container m-0 relative  ">
     <div className=" absolute w-1/2 top-40  ">
     <h2 className="  lg:text-5xl text-center banner-title text-lime-600 font-bold">A Guide to India's Famous Street Foods</h2>
      <p className="text-yellow-400  lg:ps-10 lg:text-2xl  ">Indian cuisine is a diverse and colorful tapestry of flavors, spices, and aromas. From the rich curries of North India to the vegetarian delights of South India, each region of the country has its own unique culinary traditions and specialties.</p>
     </div>
    </div>
  );
};

export default Banner;
