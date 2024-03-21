import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { ProductData } from "../data/ProductData.jsx";

function ShopPage() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] py-12 flex flex-col items-center">
        <h3 className="font-bold text-2xl pb-20">Shop</h3>
        <div className="text-sm flex justify-between w-28">
          <Link to="/" className="font-bold ">
            Home
          </Link>
          <i class="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
          <Link to="/shop" className="text-[#737373] font-bold">
            Shop
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="lg:hidden">
          {ProductData.slice(0, 4).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[57rem] lg:justify-evenly">
          {ProductData.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>

      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-32 lg:px-24 lg:py-16 lg:scale-[0.6]">
        <i class="fa-brands fa-hooli fa-7x "></i>
        <i class="fa-brands fa-lyft fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i class="fa-brands fa-pied-piper-hat fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i class="fa-brands fa-stripe fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i class="fa-brands fa-aws fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i class="fa-brands fa-reddit-alien fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
      </div>
    </div>
  );
}

export default ShopPage;
