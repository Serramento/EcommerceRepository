import React from "react";
import { useParams, Link } from "react-router-dom";
import { ProductData } from "../data/ProductData";
import ProductCard from "../components/ProductCard.jsx";
import ImageSlider2 from "../components/ImageSlider2.jsx";

function ProductPage() {
  let { productId } = useParams();
  let thisProduct = ProductData.find((prod) => prod.id === parseInt(productId));

  return (
    <div>
      <div className="text-bluex flex flex-col text-3xl lg:hidden">
        <div>
          <i class="fa-regular fa-user "></i>
          <a className="text-bluex pl-2">Login</a>
          <span className="font-semibold pl-2">/</span>
          <a className="text-bluex pl-2">Register</a>
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
      </div>

      <div className="bg-[#FAFAFA]">
        <ImageSlider2 slides={thisProduct.image} />
        <div className="flex flex-row w-40 h-40">
          <img src={thisProduct.image[0]} />
          <img src={thisProduct.image[1]} />
        </div>
      </div>

      <div className="flex flex-col items-center">
        <div className="w-56 lg:w-96 mt-24">
          <h4 className=" hidden lg:inline-flex text-[#737373] text-base font-semibold">
            Featured Products
          </h4>
          <h3 className="text-[#252B42] text-lg font-bold mb-3 lg:mt-1">
            BESTSELLER PRODUCTS
          </h3>
        </div>
        <div className="lg:hidden">
          {ProductData.slice(0, 4).map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[57rem] lg:justify-evenly">
          {ProductData.slice(0, 8).map((product) => (
            <ProductCard product={product} />
          ))}
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

export default ProductPage;
