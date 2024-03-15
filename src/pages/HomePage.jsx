import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";

function HomePage() {
  return (
    <div className="font-montserrat">
      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-10 lg:px-24 lg:py-16">
        <i class="fa-brands fa-hooli fa-7x xxl:text-xl"></i>
        <i class="fa-brands fa-lyft fa-7x max-[1023px]:pt-5 "></i>
        <i class="fa-brands fa-pied-piper-hat fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-stripe fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-aws fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-reddit-alien fa-7x max-[1023px]:pt-5"></i>
      </div>

      <div className="flex flex-col px-10 py-20  lg:flex-row-reverse lg:justify-center">
        <div className="text-left lg:pl-24 lg:pt-40">
          <h5 className="text-bluex font-semibold text-sm pb-5">
            Featured Products
          </h5>
          <h2 className="font-extrabold text-5xl pb-5 lg:text-3xl">
            We love what we do
          </h2>
          <div className="pr-16 pt-3 lg:w-96">
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
        <div className="flex flex-row justify-center pt-16">
          <img src={image1} alt="image1" style={{ height: 400, width: 200 }} />
          <img
            src={image2}
            alt="image2"
            style={{ height: 400, width: 300 }}
            className="pl-3"
          />
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
            <i class="fa-solid fa-book-open-reader text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Easy Wins</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Get your best looking smile now!
            </p>
          </div>
          <div className="max-[1023px]:pt-20 lg:pl-16">
            <i class="fa-solid fa-book-open text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Concrete</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="max-[1023px]:pt-20 lg:pl-16">
            <i class="fa-solid fa-arrow-trend-up text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Hack Growth</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
