import React from "react";

const ProductCard = (props) => {
  return (
    <a className="">
      <img src={props.product.image} className="w-80 lg:w-40" />
      <div>
        <h5 className="font-bold mt-10">Graphic Design</h5>
        <h6 className="font-bold text-sm text-[#737373] mt-3">
          English Department
        </h6>
        <h5 className="font-bold mt-5 mb-10">
          <span className="text-[#BDBDBD]">$16.48</span>{" "}
          <span className="text-[#23856D]">$6.48</span>
        </h5>
      </div>
    </a>
  );
};

export default ProductCard;
