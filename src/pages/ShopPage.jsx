import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { ProductData } from "../data/ProductData.jsx";
import ClothsCard from "../components/ClothsCard.jsx";
import { ClothsCardData } from "../data/ClothsCardData.jsx";

function ShopPage() {
  const css = "w-80 lg:w-60";
  return (
    <div className="font-montserrat">
      <div className="text-bluex flex flex-col text-3xl lg:hidden">
        <div>
          <i class="fa-regular fa-user "></i>
          <a className="text-bluex pl-2">Login</a>
          <span className="font-semibold pl-2">/</span>
          <Link to="/signup" className="text-bluex pl-2">
            Register
          </Link>
        </div>
        <div className="flex flex-col h-44 justify-between mt-20 mb-20">
          <i class="fa-solid fa-magnifying-glass fa-xl"></i>
          <i class="fa-solid fa-cart-shopping">
            <span className="text-sm pl-3">1</span>
          </i>
          <i class="fa-regular fa-heart fa-lg">
            <span className="text-sm pl-3 font-extrabold">1</span>
          </i>
        </div>
      </div>
      <div className="bg-[#FAFAFA] pt-12 pb-5 flex flex-col items-center lg:pt-10 lg:pb-10">
        <div className="lg:flex lg:flex-row lg:w-[70rem] lg:justify-between lg:items-center">
          <h3 className="font-bold text-2xl max-[1023px]:pb-20">Shop</h3>
          <div className="text-sm flex justify-between w-28 ">
            <Link to="/" className="font-bold ">
              Home
            </Link>
            <i class="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
            <Link to="/shop" className="text-[#737373] font-bold">
              Shop
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:flex lg:flex-row lg:justify-between lg:pl-5 lg:mt-10">
          {ClothsCardData.map((cloths) => (
            <ClothsCard cloths={cloths} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center my-10 lg:flex-row lg:justify-between lg:mx-10">
        <h6 className="text-[#737373] font-bold text-base max-[1023px]:mb-6">
          Showing all 12 results
        </h6>
        <div className="flex flex-row items-center max-[1023px]:mb-6 w-48 justify-between">
          <h6 className="text-[#737373] font-bold text-base">Views:</h6>
          <div className="text-[#252B42]">
            <a>
              <i class="fa-solid fa-table-cells-large border-2 border-[#ECECEC] p-4 rounded-md mr-4"></i>
            </a>
            <a>
              <i class="fa-solid fa-list-check border-2 border-[#ECECEC] p-4 rounded-md"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-60">
          <label className="text-[#737373] bg-[#F9F9F9] border-2 border-[#DDDDDD] px-5 py-3 rounded-md text-sm">
            <select className="bg-[#F9F9F9]">
              <option value="popularity">Popularity</option>
            </select>
          </label>
          <button className="bg-[#23A6F0] text-[#FFFFFF] text-sm font-semibold px-7 py-3 rounded-md">
            Filter
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center mt-28 lg:mt-16">
        <div className="lg:hidden">
          {ProductData.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} css={css} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[74rem] lg:justify-between">
          {ProductData.map((product) => (
            <ProductCard key={product.id} product={product} css={css} />
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

      <div className="text-[#737373]  py-24 lg:py-16 bg-[#FAFAFA] mb-5">
        <div className="flex flex-col lg:flex-row justify-between lg:scale-[0.8]">
          <i class="fa-brands fa-hooli fa-7x"></i>
          <i class="fa-brands fa-lyft fa-7x max-[1023px]:pt-5"></i>
          <i class="fa-brands fa-pied-piper-hat fa-7x max-[1023px]:pt-5"></i>
          <i class="fa-brands fa-stripe fa-7x max-[1023px]:pt-5"></i>
          <i class="fa-brands fa-aws fa-7x max-[1023px]:pt-5"></i>
          <i class="fa-brands fa-reddit-alien fa-7x max-[1023px]:pt-5"></i>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
