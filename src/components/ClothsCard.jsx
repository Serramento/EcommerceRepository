import React from "react";
import { Link } from "react-router-dom";

const ClothsCard = (props) => {
  return (
    <Link to="/shop" className="relative flex justify-center items-center mb-4">
      <div className="w-80 h-72 lg:w-56 lg:h-48 lg:mr-5">
        <div className="w-80 h-72 absolute bg-[#212121] opacity-25 lg:w-56 lg:h-48"></div>
        <img
          src={props.category.img}
          className="w-full h-full object-cover filter"
        />
      </div>
      <div className="absolute text-[#FFFFFF] mt-8">
        <h5 className="font-bold mb-8">{props.category.title}</h5>
        <h6 className="font-bold text-sm">5 Items</h6>
      </div>
    </Link>
  );
};

export default ClothsCard;
