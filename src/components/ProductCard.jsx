import React from "react";
import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { id } = props.product;
  return (
    <Link to={`/productPage/${id}`}>
      <img
        src={props.product.image[0]}
        className={`w-80 ${props.additionalClass}`}
      />
      <div>
        <h5 className="font-bold mt-10">Graphic Design</h5>
        <h6 className="font-bold text-sm text-[#737373] mt-3">
          English Department
        </h6>
        <h5 className="font-bold mt-5 mb-3">
          <span className="text-[#BDBDBD]">$16.48</span>{" "}
          <span className="text-[#23856D]">$6.48</span>
        </h5>
      </div>

      <div className="flex justify-center mb-16">
        <div className="h-4 w-4 rounded-lg bg-[#23A6F0] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#23856D] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#E77C40] mr-1.5" />
        <div className="h-4 w-4 rounded-lg bg-[#252B42]" />
      </div>
    </Link>
  );
};

export default ProductCard;
