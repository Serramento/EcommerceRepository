import React from "react";
import { Link } from "react-router-dom";
import { ClothsCardData } from "../data/ClothsCardData";

function TeamPage() {
  return (
    <div className="font-montserrat">
      <div className="py-20 px-10 font-bold bg-[#FAFAFA]">
        <h5 className="text-[#737373]">WHAT WE DO</h5>
        <h2 className="w-80 mx-auto text-4xl mt-5 leading-snug lg:w-[45rem] lg:text-5xl">
          Innovation tailored for you
        </h2>
        <div className="mt-10 text-sm">
          <Link to="/" className="pr-4 font-bold">
            Home
          </Link>
          <i class="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
          <Link to="/team" className="text-[#737373] pl-4 font-bold">
            Team
          </Link>
        </div>
      </div>

      <div className="bg-[#FAFAFA] lg:flex">
        <div className="h-[34rem] lg:w-[50rem] lg:h-[28.5rem] lg:mr-2.5 lg:mt-2">
          <img
            src="https://s3-alpha-sig.figma.com/img/e98c/6914/973e6a41dfef7ffabf70f468edcc4107?Expires=1714953600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X6HKsNW7wqMUkyB2rg3delSVbEbSJUnY8WzlQBIhiNiR31Ht~T8a67dz~xfsP0ITqtEdV6mqO2TPYcrz-aMZr5XV1nKlBDUTNdKgVvyRcx4i6xZtsyd1HdbHPLCbNf7LO-3At1EjaSIpG3RnIDSnQxIa3YlbG4ZWV7MRfFybgD-G2fxOIp66CaFO~rkwGZulqQqYE3cLV34szokRxCT3qL6uZnCQ66b6xvdc8xajgvRxK6Rk6IZ-bZDpU0cjhipC1LJZLazFJaUTLvQO53Oj-tLRV53cQGicN2UhZXq5VKq~QCv7YJzQ1VOk2dQ4aG6UsCrC5Nw5nLDQzhMbeFwCJw__"
            alt="Image"
            class="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-wrap justify-between lg:w-[55rem] ">
          {ClothsCardData.slice(0, 4).map((cloths) => (
            <div className="w-52 h-72 lg:w-[20.5rem] lg:h-[14.5rem] lg:pt-2">
              <img
                src={cloths.image}
                className="w-full h-full object-cover max-[1023px]:pt-2.5"
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
                src="https://media.licdn.com/dms/image/D4D03AQHHikjSDQq9xw/profile-displayphoto-shrink_800_800/0/1708951317641?e=1720051200&v=beta&t=rerI4IakEFrJmiHVx6AWgjZsdUaNYbujGVbeMHTOWzA"
                alt="Image"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <h5 className="mt-8">Erhan Fırat</h5>
            <h6 className="text-sm text-[#737373] mt-2">Project Owner</h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i class="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i class="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i class="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>

          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="https://media.licdn.com/dms/image/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/0/1635783306921?e=1720051200&v=beta&t=w060HP238w-3WSIwE7hT4n-zKVbltmFpGClbX0-DNLM"
                alt="Image"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <h5 className="mt-8">Gökhan Özdemir</h5>
            <h6 className="text-sm text-[#737373] mt-2">Scrum Master</h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i class="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i class="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i class="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>

          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFzcOw99FEhQg/profile-displayphoto-shrink_800_800/0/1642683767630?e=1720051200&v=beta&t=O-DqOTIZrFmNDQIjE_La9TRSgaFX9kMBAnrBY6nXljQ"
                alt="Image"
                class="w-full h-full object-cover object-top"
              />
            </div>
            <h5 className="mt-8">Serra Sarıhasan</h5>
            <h6 className="text-sm text-[#737373] mt-2">
              Full Stack Developer
            </h6>
            <div className="w-32 mx-auto flex justify-between mt-8 mb-20">
              <i class="fa-brands fa-facebook text-[#335BF5] fa-2xl"></i>
              <i class="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
              <i class="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="my-28">
        <h2 className="w-96 mx-auto font-bold text-4xl mb-10 lg:w-[50rem]">
          Start your 14 days free trial
        </h2>
        <p className="font-semibold text-sm text-[#737373] mx-10 mb-8 lg:w-96 lg:mx-auto">
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent.
        </p>
        <button className="font-bold text-[#FFFFFF] bg-[#23A6F0] px-9 py-4 text-sm mb-12">
          Try it free now
        </button>
        <div className="w-52 mx-auto flex justify-between lg:mt-5">
          <i class="fa-brands fa-twitter text-[#21A6DF] fa-2xl"></i>
          <i class="fa-brands fa-square-facebook text-[#395185] fa-2xl"></i>
          <i class="fa-brands fa-instagram text-[#E51F5A] fa-2xl"></i>
          <i class="fa-brands fa-linkedin fa-2xl text-[#0A66C2]"></i>
        </div>
      </div>
    </div>
  );
}

export default TeamPage;
