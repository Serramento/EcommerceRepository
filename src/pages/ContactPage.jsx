import React from "react";

function ContactPage() {
  return (
    <div className="font-montserrat">
      <div className="bg-[#FAFAFA] text-[#252B42] pb-5">
        <div className="w-72 mx-auto ">
          <div className="flex flex-col justify-center items-center">
            <h5 className="text-lg font-bold my-10">CONTACT US</h5>
            <h2 className="text-4xl font-extrabold leading-snug">
              Get in touch today!
            </h2>
            <h4 className="text-[#737373] text-xl font-semibold my-10">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <h3 className="font-bold text-2xl">Phone : +451 215 215 </h3>
            <h3 className="font-bold text-2xl mt-5 mb-16">
              Fax : +451 215 215
            </h3>
            <div className="w-72 flex justify-evenly">
              <i class="fa-brands fa-twitter fa-2xl"></i>
              <i class="fa-brands fa-square-facebook fa-2xl"></i>
              <i class="fa-brands fa-instagram fa-2xl"></i>
              <i class="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
        </div>

        <div className="mt-20 w-96 h-96 relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/0bec/d76f/b529bdb1f9ac06ee979d8665aade6757?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B3PWjjtzZLW0~qOzRdm4Ue5lx9hmjJ85yqwtCYdCRgi7ImMCLkfSYUXYTlIX4QWRc~GPS9GqLKbcPA4ZeZkMz04ZrZHtxfQU5wEKw6GJaT~QH0Yh3xpz08cbKTu61ispmfl3fEsCElZEmOq8etm6g5BZElVffTcHWOc266hdB2wLwyXgPkn~YtoSSGei2Y08QQM9qO4GvkxfccQ4Logi5wxKHgTflqYsv4bGrxpZwiB2r5b-5myApzgacRmTY8kh8o821lUSASrnaMPuMUnoDYAUeEl9Wc01J3bTmsQeK8HUnEzegPBnbv8Lt8p4NNLP4s4S-lDmLdIWpP2xIZWTPQ__"
            alt="ContactImage"
            class="w-full h-full object-cover absolute"
          />
          <div>
            <svg height="50" width="50" className="ml-10">
              <circle cx="25" cy="25" r="25" fill="#FFE9EA" />
            </svg>
            <svg height="260" width="260" className="ml-16">
              <circle cx="130" cy="130" r="130" fill="#FFE9EA" />
            </svg>
            <svg height="20" width="20" className="ml-72 mt-5">
              <circle cx="10" cy="10" r="10" fill="#FFE9EA" />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <h6 className="text-[#252B42]">VISIT OUR OFFICE</h6>
        <h2 className="text-[#252B42]">
          We help small businesses with big ideas
        </h2>
        <div className="bg-[#FAFAFA] text-[#252B42]">
          <i class="fa-solid fa-phone"></i>
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="text-[#23A6F0]">Submit Request</button>
        </div>
        <div className="bg-[#252B42] text-[#FFFFFF]">
          <i class="fa-solid fa-location-dot"></i>
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="text-[#23A6F0]">Submit Request</button>
        </div>
        <div className="bg-[#FAFAFA] text-[#252B42]">
          <i class="fa-regular fa-paper-plane"></i>
          <h6>georgia.young@example.com</h6>
          <h6>georgia.young@ple.com</h6>
          <h5>Get Support</h5>
          <button className="text-[#23A6F0]">Submit Request</button>
        </div>
      </div>
      <div className="text-[#252B42] bg-[#FAFAFA]">
        <i class="fa-solid fa-arrow-turn-down"></i>
        <h5>WE Can't WAIT TO MEET YOU</h5>
        <h1>Let’s Talk</h1>
        <button className="bg-[#23A6F0] text-[#FFFFFF]">Try it free now</button>
      </div>
    </div>
  );
}

export default ContactPage;
