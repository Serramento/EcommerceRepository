import React from "react";

function Footer() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] flex flex-col lg:flex-row lg:justify-between lg:pr-10">
        <h3 class="text-[#252B42] text-2xl font-extrabold w-36 pb-8 pt-16 pl-10">
          DressForDay
        </h3>
        <div className="text-bluex pb-16 w-36 flex justify-between pl-10">
          <i class="fa-brands fa-facebook fa-xl"></i>
          <i class="fa-brands fa-instagram fa-xl"></i>
          <i class="fa-brands fa-twitter fa-xl"></i>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:mt-5">
        <div className="text-left pl-10 max-[1023px]:pt-20 lg:pt-10">
          <h3 className="font-bold text-lg text-[#252B42] lg:text-base">
            Company Info
          </h3>
          <div className="flex flex-col lg:text-sm">
            <a className="text-[#737373] pt-5 font-semibold">About Us</a>
            <a className="text-[#737373] pt-3 font-semibold">Carrier</a>
            <a className="text-[#737373] pt-3 font-semibold">We are hiring</a>
            <a className="text-[#737373] pt-3 font-semibold">Blog</a>
          </div>
        </div>

        <div className="text-left pl-10 pt-10">
          <h3 className="font-bold text-lg text-[#252B42] lg:text-base">
            Legal
          </h3>
          <div className="flex flex-col lg:text-sm">
            <a className="text-[#737373] pt-5 font-semibold">About Us</a>
            <a className="text-[#737373] pt-3 font-semibold">Carrier</a>
            <a className="text-[#737373] pt-3 font-semibold">We are hiring</a>
            <a className="text-[#737373] pt-3 font-semibold">Blog</a>
          </div>
        </div>

        <div className="text-left pl-10 pt-10">
          <h3 className="font-bold text-lg text-[#252B42] lg:text-base">
            Features
          </h3>
          <div className="flex flex-col font-bold lg:text-sm">
            <a className="text-[#737373] pt-5 font-semibold">
              Business Marketing
            </a>
            <a className="text-[#737373] pt-3 font-semibold">User Analytic</a>
            <a className="text-[#737373] pt-3 font-semibold">Live Chat</a>
            <a className="text-[#737373] pt-3 font-semibold">
              Unlimited Support
            </a>
          </div>
        </div>

        <div className="text-left pl-10 pt-10">
          <h3 className="font-bold text-lg text-[#252B42] lg:text-base">
            Resources
          </h3>
          <div className="flex flex-col lg:text-sm">
            <a className="text-[#737373] pt-5 font-semibold">IOS & Android</a>
            <a className="text-[#737373] pt-3 font-semibold">Watch a Demo</a>
            <a className="text-[#737373] pt-3 font-semibold">Customers</a>
            <a className="text-[#737373] pt-3 font-semibold">API</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-lg text-left pl-10 pt-10 lg:text-base">
            Get In Touch
          </h3>
          <div className="mb-32 mt-5 flex items-left pl-10">
            <input
              type="text"
              placeholder="Your Email"
              className=" pl-7 pt-6 pb-6 bg-[#F9F9F9] text-[#737373]  border border-[#E6E6E6] rounded-l-lg lg:pt-4 lg:pb-4 lg:text-sm lg:w-44 font-semibold"
            ></input>
            <button className="bg-bluex text-[#FFFFFF] pt-6 pb-6 rounded-none rounded-r-lg border border-[#E6E6E6] lg:pt-4 lg:pb-4 lg:text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#FAFAFA] font-bold pt-10 pb-10 flex max-[1023px]:justify-center">
        <h3 className="text-[#737373] w-64 lg:w-[30rem] ">
          Made With Love By Finland All Rights Reserved
        </h3>
      </div>
    </div>
  );
}

export default Footer;
