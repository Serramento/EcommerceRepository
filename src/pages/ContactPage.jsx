import React from "react";

function ContactPage() {
  const ContactBlock = ({ icon, email1, email2, title, buttonText }) => (
    <div className="bg-[#FAFAFA] text-[#252B42] w-80 h-96 flex flex-col justify-center items-center font-bold mb-10">
      <i className={icon + " text-[#23A6F0] fa-4x mb-7"}></i>
      <h6 className="text-sm mb-1">{email1}</h6>
      <h6 className="text-sm">{email2}</h6>
      <h5 className="font-extrabold mt-5">{title}</h5>
      <button className="text-[#23A6F0] border-[#23A6F0] px-5 py-3 mt-5">
        {buttonText}
      </button>
    </div>
  );

  return (
    <div className="font-montserrat flex flex-col">
      <div className="bg-[#FAFAFA] text-[#252B42] pb-5 flex flex-col lg:flex-row lg:pl-16">
        <div className="w-72 mx-auto lg:text-left lg:mb-5">
          <div className="flex flex-col justify-center items-center lg:justify-start lg:items-start">
            <h5 className="text-lg font-bold my-10 lg:text-base lg:mb-5 lg:mt-24">
              CONTACT US
            </h5>
            <h2 className="text-4xl font-extrabold leading-snug">
              Get in touch today!
            </h2>
            <h4 className="text-[#737373] text-xl font-semibold my-10 lg:text-lg lg:mb-8">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </h4>
            <h3 className="font-bold text-2xl lg:text-lg">
              Phone : +451 215 215{" "}
            </h3>
            <h3 className="font-bold text-2xl mt-5 mb-16 lg:text-lg lg:mt-3 lg:mb-12">
              Fax : +451 215 215
            </h3>
            <div className="w-72 flex justify-evenly lg:justify-between lg:w-56">
              <i className="fa-brands fa-twitter fa-2xl"></i>
              <i className="fa-brands fa-square-facebook fa-2xl"></i>
              <i className="fa-brands fa-instagram fa-2xl"></i>
              <i className="fa-brands fa-linkedin fa-2xl"></i>
            </div>
          </div>
        </div>

        <div className="mt-20 w-96 h-96 relative mx-auto lg:w-[45rem] lg:h-[35rem] lg:mt-8">
          <img
            src="/technology 1.png"
            alt="ContactImage"
            className="w-full h-full object-cover absolute"
          />
          <div className="lg:ml-32">
            <svg height="50" width="50" className="ml-10">
              <circle cx="25" cy="25" r="25" fill="#FFE9EA" />
            </svg>
            <svg height="260" width="260" className="ml-16">
              <circle cx="130" cy="130" r="130" fill="#FFE9EA" />
            </svg>
            <svg height="20" width="20" className="ml-72 mt-5 lg:ml-[28rem]">
              <circle cx="10" cy="10" r="10" fill="#FFE9EA" />
            </svg>
          </div>
        </div>
      </div>
      <div className="w-80 mx-auto lg:w-[80rem]">
        <h6 className="text-[#252B42] text-sm font-bold mt-16 mb-5">
          VISIT OUR OFFICE
        </h6>
        <h2 className="text-[#252B42] text-4xl font-bold mb-16 lg:text-3xl lg:w-[30rem] lg:m-auto">
          We help small businesses with big ideas
        </h2>
        <div className="lg:flex lg:justify-center lg:items-center lg:my-20">
          <ContactBlock
            icon="fa-solid fa-phone"
            email1="georgia.young@example.com"
            email2="georgia.young@ple.com"
            title="Get Support"
            buttonText="Submit Request"
          />
          <div className="bg-[#252B42] text-[#FFFFFF] w-80 h-96 flex flex-col justify-center items-center font-bold mb-10">
            <i className="fa-solid fa-location-dot text-[#23A6F0] fa-4x mb-7"></i>
            <h6 className="text-sm mb-1">georgia.young@example.com</h6>
            <h6 className="text-sm">georgia.young@ple.com</h6>
            <h5 className="font-extrabold mt-5">Get Support</h5>
            <button className="text-[#23A6F0] border-[#23A6F0] px-5 py-3 mt-5">
              Submit Request
            </button>
          </div>
          <ContactBlock
            icon="fa-regular fa-paper-plane"
            email1="georgia.young@example.com"
            email2="georgia.young@ple.com"
            title="Get Support"
            buttonText="Submit Request"
          />
        </div>
      </div>
      <div className="text-[#252B42] bg-[#FAFAFA] mb-10 h-[30rem] flex flex-col justify-center items-center font-bold">
        <i className="fa-solid fa-arrow-turn-down fa-4x text-[#23A6F0] mb-5"></i>
        <h5 className="text-sm mb-10">WE Can't WAIT TO MEET YOU</h5>
        <h1 className="text-5xl mb-8">Let’s Talk</h1>
        <button className="bg-[#23A6F0] text-[#FFFFFF] px-5 py-3">
          Try it free now
        </button>
      </div>
    </div>
  );
}

export default ContactPage;
