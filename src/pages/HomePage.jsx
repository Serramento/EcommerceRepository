import React, { useEffect } from "react";
import ImageSlider from "../components/ImageSlider.jsx";
import { SliderData } from "../data/SliderData.jsx";
import ProductCard from "../components/ProductCard.jsx";
import BlogContent from "../components/BlogContent.jsx";
import { BlogData } from "../data/BlogData.jsx";
import { useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchSelectedCategory,
} from "../actions/productReducerActions.jsx";

function HomePage({ productList }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchSelectedCategory(1));
  }, []);

  return (
    <div className="font-montserrat flex flex-col">
      <ImageSlider slides={SliderData} />

      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-32 lg:pr-24 lg:py-16 lg:scale-[0.6]">
        <i className="fa-brands fa-hooli fa-7x "></i>
        <i className="fa-brands fa-lyft fa-7x max-[639px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-pied-piper-hat fa-7x max-[639px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-stripe fa-7x max-[639px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-aws fa-7x max-[639px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-reddit-alien fa-7x max-[639px]:pt-5 lg:pl-24"></i>
      </div>

      <div className="py-2 flex flex-col lg:flex-row max-[639px]:items-center lg:justify-center">
        <div className="relative">
          <div className="w-96 h-[38rem] lg:w-[28rem] lg:h-[28rem]">
            <img
              src="/media bg-cover.png"
              alt="Image3"
              className="w-full h-full object-cover"
            />
          </div>

          <div className=" box-content bottom-0 h-64 bg-opacity-75 w-96 text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-48 lg:w-80">
            <h6 className="text-2xl w-60 pl-10 pt-12 opacity-100 lg:text-xl lg:pt-8 lg:w-52">
              Top Product Of the Week
            </h6>
            <button className="text-sm ml-10 mt-8 py-3 px-10 outline outline-1 lg:text-xs">
              EXPLORE ITEMS
            </button>
          </div>
        </div>

        <div className="lg:pl-3">
          <div className="relative">
            <div className="w-96 h-[30rem] lg:h-56 lg:w-[27rem]">
              <img
                src="/unsplash_muOHbrFGEQY.jpg"
                alt="Image4"
                className="max-[639px]:pt-5 w-full h-full object-cover"
              />
            </div>

            <div className=" box-content bottom-0 h-64 bg-opacity-75 w-96 text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-32 lg:w-80">
              <h6 className="text-2xl w-60 pl-10 pt-12 opacity-100 lg:text-lg lg:w-72 lg:pt-6">
                Top Product Of the Week
              </h6>
              <button className="text-sm ml-10 mt-8 py-3 px-10 outline outline-1 lg:text-xs lg:mt-3">
                EXPLORE ITEMS
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-96 h-[30rem] lg:h-56 lg:w-[27rem]">
              <img
                src="/unsplash_MKvjc2kar7Q.jpg"
                alt="Image5"
                className="pt-5 w-full h-full object-cover"
              />
            </div>

            <div className=" box-content bottom-0 h-64 bg-opacity-75 w-96 text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-32 lg:w-80">
              <h6 className="text-2xl w-60 pl-10 pt-12 opacity-100 lg:text-lg lg:w-72 lg:pt-6">
                Top Product Of the Week
              </h6>
              <button className="text-sm ml-10 mt-8 py-3 px-10 outline outline-1 lg:text-xs lg:mt-3">
                EXPLORE ITEMS
              </button>
            </div>
          </div>
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
          <p className="text-[#737373] text-sm font-semibold mb-16 lg:mb-10">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="lg:hidden">
          {productList.slice(0, 5).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              additionalClass="lg:w-40"
            />
          ))}
        </div>
        <div className="hidden lg:grid lg:grid-wrap lg:grid-cols-5 lg:w-[57rem] lg:justify-evenly">
          {productList.slice(0, 10).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              additionalClass="lg:w-40"
            />
          ))}
        </div>
        <button className="text-bluex font-bold text-sm py-4 px-12 outline outline-2 lg:mb-10 lg:mt-10">
          LOAD MORE PRODUCTS
        </button>
      </div>

      <div className="flex flex-col py-20 lg:flex-row-reverse lg:w-[58rem] lg:mx-auto">
        <div className="text-left w-80 mx-auto lg:pt-24">
          <h5 className="text-bluex font-semibold text-sm pb-5">
            Featured Products
          </h5>
          <h2 className="font-extrabold text-4xl pb-2 lg:text-3xl">
            We love what we do
          </h2>
          <div className="pt-3 w-64">
            <p className="font-semibold font-base text-xs text-[#737373] pb-5">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br /> Newtonian mechanics.
            </p>
            <p className="font-semibold font-base text-xs text-[#737373]">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: <br /> Newtonian mechanics
            </p>
          </div>
        </div>
        <div className="flex flex-row justify-center max-[639px]:pt-12">
          <div className="w-[10rem] h-[22rem] lg:w-[12rem] lg:h-[26rem]">
            <img
              src="/unsplash_Lks7vei-eAg (2).png"
              alt="image1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[14rem] h-[22rem] lg:w-[16rem] lg:h-[26rem]">
            <img
              src="/unsplash_Lks7vei-eAg (3).png"
              alt="image2"
              className="pl-3 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col items-center pt-10">
          <h4 className="text-[#737373] text-base font-semibold">
            Featured Products
          </h4>
          <h3 className="font-bold text-xl pt-3">THE BEST SERVICES</h3>
          <p className="text-[#737373] text-sm font-semibold w-56 pt-3 lg:w-96 ">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div className="flex flex-col items-center py-28 lg:flex-row lg:justify-center">
          <div>
            <i className="fa-solid fa-book-open-reader text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Easy Wins</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Get your best looking smile now!
            </p>
          </div>
          <div className="max-[639px]:pt-20 lg:pl-16">
            <i className="fa-solid fa-book-open text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Concrete</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="max-[639px]:pt-20 lg:pl-16">
            <i className="fa-solid fa-arrow-trend-up text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Hack Growth</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <div className="max-[639px]:mb-20 ">
          <h6 className="text-bluex text-sm font-bold ">Practice Advice</h6>
          <h2 className="font-bold text-4xl mt-3 mb-5">Featured Posts</h2>
          <p className="hidden lg:inline-flex  lg:text-sm lg:text-[#737373] lg:font-semibold lg:w-[30rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="lg:hidden">
          {BlogData.slice(0, 2).map((blog, index) => (
            <BlogContent key={index} blog={blog} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-row lg:w-[65rem] lg:justify-evenly lg:my-20">
          {BlogData.map((blog, index) => (
            <BlogContent key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
