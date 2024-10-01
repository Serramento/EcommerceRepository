import React from "react";
import { Link } from "react-router-dom";
import { ClothsCardData } from "../data/ClothsCardData";

function TeamPage() {
  return (
    <div className="font-montserrat flex flex-col">
      <div className="py-20 px-10 font-bold bg-[#FAFAFA]">
        <h5 className="text-[#737373]">WHAT WE DO</h5>
        <h2 className="w-80 mx-auto text-4xl mt-5 leading-snug lg:w-[45rem] lg:text-5xl">
          Innovation tailored for you
        </h2>
        <div className="mt-10 text-sm">
          <Link to="/" className="pr-4 font-bold">
            Home
          </Link>
          <i className="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
          <Link to="/team" className="text-[#737373] pl-4 font-bold">
            Team
          </Link>
        </div>
      </div>

      <div className="bg-[#FAFAFA] lg:flex max-[639px]:mx-auto">
        <div className="h-[34rem] w-[26.5rem] lg:w-[50rem] lg:h-[28.5rem] lg:mr-2.5 lg:mt-2">
          <img
            src="/unsplash_Lks7vei-eAg (4).png"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-between w-[26.5rem] lg:w-[55rem] ">
          {ClothsCardData.slice(0, 4).map((cloths, index) => (
            <div
              key={index}
              className="w-52 h-72 lg:w-[20.5rem] lg:h-[14.5rem] lg:pt-2"
            >
              <img
                src={cloths.image}
                className="w-full h-full object-cover max-[639px]:pt-2.5"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h2 className="font-bold text-4xl mt-20 mb-12 w-72 lg:w-96 lg:mb-20 lg:mt-28">
          Meet Our Team
        </h2>
        <div className="lg:flex lg:w-[60rem] lg:justify-between lg:mx-auto lg:mb-20">
          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="/1708951317641.jfif"
                alt="Image"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h5 className="mt-8">Erhan Fırat</h5>
            <h6 className="text-sm text-[#737373] mt-2">Project Owner</h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i className="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i className="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i className="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>

          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="/1635783306921.jfif"
                alt="Image"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <h5 className="mt-8">Gökhan Özdemir</h5>
            <h6 className="text-sm text-[#737373] mt-2">Scrum Master</h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i className="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i className="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i className="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>

          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="/PROFİL FOTO.JPG"
                alt="Image"
                className="w-full h-full object-cover object-middle"
              />
            </div>
            <h5 className="mt-8">Serra Sarıhasan</h5>
            <h6 className="text-sm text-[#737373] mt-2">
              Full Stack Developer
            </h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i className="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i className="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i className="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="my-28">
        <h2 className="w-96 mx-auto font-bold text-4xl mb-10 lg:w-[50rem]">
          Start your 14 days free trial
        </h2>
        <p className="font-semibold text-sm text-[#737373] mb-8 w-72 lg:w-96 mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="font-bold text-[#FFFFFF] bg-[#23A6F0] px-9 py-4 text-sm mb-12">
          Try it free now
        </button>
        <div className="w-52 mx-auto flex justify-between lg:mt-5">
          <i className="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
          <i className="fa-brands fa-square-facebook text-[#395185] fa-2xl"></i>
          <i className="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
          <i className="fa-brands fa-linkedin fa-2xl text-[#0A66C2]"></i>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
