import React from "react";

function AboutUsPage() {
  return (
    <div className="font-montserrat flex flex-col">
      <div className="bg-[#FAFAFA] lg:flex">
        <div className="pt-28 lg:text-left lg:mt-10">
          <h5 className="hidden lg:flex lg:text-sm lg:font-extrabold lg:mb-12 lg:ml-40">
            ABOUT COMPANY
          </h5>
          <h2 className="text-4xl font-bold mb-10 lg:ml-40">ABOUT US</h2>
          <h4 className="font-semibold text-[#737373] w-60 mx-auto mb-10 lg:w-96 lg:ml-40 lg:mr-0">
            We know how large objects will act, but things on a small scale just
            do not act that way.
          </h4>
          <button className="text-[#FFFFFF] font-semibold bg-[#23A6F0] text-sm px-8 py-3 lg:ml-40">
            Get Quote Now
          </button>
        </div>

        <div className="mt-20 w-[25rem] h-[27rem] relative mx-auto lg:w-[45rem] lg:h-[35rem] lg:mt-8 lg:mr-32">
          <img
            src="https://s3-alpha-sig.figma.com/img/7466/f015/45eb1f33b39fa1e1f6b0ddf5bb703345?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BssUUP6qPrE2PI0ox9y~Ch3cid5eWM9xGlsLKwkMbb3R-TI0fsasVwNBd5JX0Tgm~KdvSCZnvs~HGqWntS~mQ~qJyWdiv1PClJmrNPEvNInnncQNaOK-3GTCgsAVovVH37P3uaBjI2c-vvla9U4hJykSz~0kp-AWuThKprhARFvON1zUDDO1L5HLqpftg8ZDfif8XYK92OD6rsBugCZfLixYg8B7IVgAGvcfSfolN7g6IhczZNnSe~neEoAUz2nG75l-j6c~ZSBBqrY8~GVF5vjUMLiZI~AIqEcPF-6FRG7MP8Q7TFYQVKHTuedTSNbsoKZNToa4L9k0ydGc4~tjOA__"
            alt="Image"
            className="w-full h-full object-cover absolute"
          />
          <div className="lg:ml-32">
            <svg height="60" width="60" className="ml-10">
              <circle cx="30" cy="30" r="30" fill="#FFE9EA" />
            </svg>
            <svg height="300" width="300" className="ml-16">
              <circle cx="150" cy="150" r="150" fill="#FFE9EA" />
            </svg>
            <svg height="20" width="20" className="ml-72 mt-10 lg:ml-[28rem]">
              <circle cx="10" cy="10" r="10" fill="#FFE9EA" />
            </svg>
          </div>
        </div>
      </div>

      <div className="my-28 lg:flex lg:justify-between lg:w-[70rem] lg:mx-auto lg:text-left lg:ml-40">
        <div>
          <h6 className="text-sm text-[#E74040] font-semibold mb-8">
            Problems trying
          </h6>
          <h3 className="text-xl font-bold w-64 mx-auto mb-10 lg:w-[20rem]">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          </h3>
        </div>

        <p className="text-[#737373] text-sm font-semibold w-80 mx-auto lg:w-[35rem] lg:mt-12">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
      </div>

      <div className="my-20 h-[40rem] flex flex-col justify-between lg:flex-row lg:h-36 lg:w-[60rem] lg:mx-auto">
        <div>
          <h1 className="text-6xl font-bold mb-1">15K</h1>
          <h5 className="text-sm font-bold text-[#737373]">Happy Customers</h5>
        </div>
        <div>
          <h1 className="text-6xl font-bold mb-1">150K</h1>
          <h5 className="text-sm font-bold text-[#737373]">Monthly Visitors</h5>
        </div>
        <div>
          <h1 className="text-6xl font-bold mb-1">15</h1>
          <h5 className="text-sm font-bold text-[#737373]">
            Countries Worldwide
          </h5>
        </div>
        <div>
          <h1 className="text-6xl font-bold mb-1">100+</h1>
          <h5 className="text-sm font-bold text-[#737373]">Top Partners</h5>
        </div>
      </div>

      <div className="relative my-28 flex justify-center items-center">
        <div className="w-80 h-80 absolute lg:w-[60rem] lg:h-[30rem]">
          <img
            src="https://s3-alpha-sig.figma.com/img/bf53/61f3/08dd0c5a04f10121bc68f6cb9ff0d63d?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=StJyfuyzbEdiEg0CRxmxqWQjpWU2DDwQABBKxXs8f0S3sEvJLsna5WjaO8khAz3yXCt4rWbSMnDbEpEOzifyMvBLiWcync6S3gwfTD3aMGlPmvgWdNOXbd8zH1ep062P1~UvZb-POwNzy4T9hbfMJdywKMAm2kJTslE~VzBmv642ydR2eEfM1hanWiVwegi3tfaQ1YtvJ1d8WyxdC30PTI0uf5SckjZShB46QrnxqXX2WSJs-2ujto8bncaCntXHjLMRPGkfGIl~wtyVqKCY0h6~grjlogL4hMx4YZqI~o0~9te0GSNelgq8DyAz7NzY0tbrjf8hPKC-Bes4fnBC0Q__"
            alt="Image"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="w-80 h-80 bg-[#383838] opacity-50 rounded-xl lg:w-[60rem] lg:h-[30rem]"></div>
        <button className="text-[#FFFFFF] bg-[#23A6F0] absolute w-16 h-16 rounded-full">
          <i className="fa-solid fa-play"></i>
        </button>
      </div>

      <div className="flex flex-col items-center justify-center bg-[#FAFAFA]">
        <h2 className="font-bold text-4xl mt-20 mb-5 w-72 lg:w-96 lg:mb-5 lg:mt-28">
          Meet Our Team
        </h2>
        <p className="text-sm font-semibold text-[#737373] mx-20 mb-12 w-60 lg:w-[35rem] lg:mb-20">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="lg:flex lg:w-[60rem] lg:justify-between lg:mx-auto lg:mb-20">
          <div className="font-bold">
            <div className="w-72 h-52">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQHHikjSDQq9xw/profile-displayphoto-shrink_800_800/0/1708951317641?e=1720051200&v=beta&t=rerI4IakEFrJmiHVx6AWgjZsdUaNYbujGVbeMHTOWzA"
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
                src="https://media.licdn.com/dms/image/C4D03AQE8uHbxXDXfmw/profile-displayphoto-shrink_800_800/0/1635783306921?e=1720051200&v=beta&t=w060HP238w-3WSIwE7hT4n-zKVbltmFpGClbX0-DNLM"
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
                src="https://media.licdn.com/dms/image/D5603AQFzcOw99FEhQg/profile-displayphoto-shrink_800_800/0/1642683767630?e=1720051200&v=beta&t=O-DqOTIZrFmNDQIjE_La9TRSgaFX9kMBAnrBY6nXljQ"
                alt="Image"
                className="w-full h-full object-cover object-top"
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

      <div>
        <h2 className="text-4xl font-bold w-60 mx-auto pb-8 pt-20 lg:w-[50rem]">
          Big Companies Are Here
        </h2>
        <p className="text-sm font-semibold text-[#737373] w-80 mx-auto pb-10 lg:w-[35rem]">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics{" "}
        </p>
        <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly pb-32 lg:pb-24 lg:scale-[0.8]">
          <i className="fa-brands fa-hooli fa-7x "></i>
          <i className="fa-brands fa-lyft fa-7x max-[639px]:pt-5 lg:pl-24"></i>
          <i className="fa-brands fa-pied-piper-hat fa-7x max-[639px]:pt-5 lg:pl-24"></i>
          <i className="fa-brands fa-stripe fa-7x max-[639px]:pt-5 lg:pl-24"></i>
          <i className="fa-brands fa-aws fa-7x max-[639px]:pt-5 lg:pl-24"></i>
          <i className="fa-brands fa-reddit-alien fa-7x max-[639px]:pt-5 lg:pl-24"></i>
        </div>
      </div>

      <div className="lg:flex">
        <div className="bg-[#23A6F0] text-[#FFFFFF] font-bold py-28 px-24 lg:text-left lg:w-[45rem] lg:flex lg:flex-col lg:justify-center">
          <h5 className="text-sm mb-8">WORK WITH US</h5>
          <h2 className="text-4xl mb-8 mx-auto w-60 lg:w-[40rem]">
            Now Let’s grow Yours
          </h2>
          <p className="text-sm font-semibold mb-8 mx-auto w-60 lg:w-[28rem]">
            The gradual accumulation of information about atomic and small-scale
            behavior during the first quarter of the 20th{" "}
          </p>
          <button className="text-sm border border-[#FFFFFF] px-8 py-3 lg:w-36">
            Button
          </button>
        </div>
        <div className="hidden lg:flex lg:w-[35rem] lg:h-[40rem]">
          <img
            src="https://s3-alpha-sig.figma.com/img/a014/4955/2eeaef7ecedd3954687aefbdb6236bb6?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QweUqTU-qn4jry5Bn7aG460r8bqtuq3qh0K9mUX86DOBLHRfBdJ25HHOTnqd6TUuoss~5fkb5SMLH8IGJhv~PeH2d4wXtQAqG3IKwPD-dk5CRsLr1weVwCWekBPaL2UwVn~yC6Zs2CL8HYDuotVzlvytKI-HsMe7kzI6BBSUnBVQYiUCJdH7cdDYWJAvk18FCB8-0EErZKiDcRWi8nmfgiph-sGgLabMIqSPTFAkVhBFqogrGStLjs58V2FDTuD7osOWMm9YBHgYTx4ucahqEkAX9C88MG8nsAtmBxyV0WHm5wzlqmd~ZfMXV2lOMRg8l1YW9Sdc7f4vZytsjPPYSA__"
            alt="Image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;
