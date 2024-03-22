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
        <div className="rounded-lg border-2 border-[#BDBDBD] mb-20 mt-3 text-sm font-bold">
          <button className="bg-[#F3F3F3] px-6 py-6 text-[#BDBDBD] rounded-l-lg rounded-r-none">
            First
          </button>
          <button className="px-4 py-6 text-[#23A6F0] border-2 border-[#E9E9E9] rounded-none">
            1
          </button>
          <button className="px-4 py-6 text-[#FFFFFF] rounded-none bg-[#23A6F0]">
            2
          </button>
          <button className="px-4 py-6 text-[#23A6F0] border-2 border-[#E9E9E9] rounded-none">
            3
          </button>
          <button className="px-6 py-6 text-[#23A6F0] rounded-r-lg rounded-l-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-24 lg:px-24 lg:py-16 lg:scale-[0.6] bg-[#FAFAFA]">
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
