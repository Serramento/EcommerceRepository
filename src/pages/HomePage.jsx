import React from "react";
import ImageSlider from "../components/ImageSlider.jsx";
import { SliderData } from "../data/SliderData.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { ProductData } from "../data/ProductData.jsx";
import BlogContent from "../components/BlogContent.jsx";
import { BlogData } from "../data/BlogData.jsx";

function HomePage() {
  return (
    <div className="font-montserrat">
      <ImageSlider slides={SliderData} />

      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-32 lg:pr-24 lg:py-16 lg:scale-[0.6]">
        <i className="fa-brands fa-hooli fa-7x "></i>
        <i className="fa-brands fa-lyft fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-pied-piper-hat fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-stripe fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-aws fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
        <i className="fa-brands fa-reddit-alien fa-7x max-[1023px]:pt-5 lg:pl-24"></i>
      </div>

      <div className="py-2 flex flex-col lg:flex-row max-[1023px]:items-center lg:justify-center">
        <div className="relative">
          <div className="w-96 h-[38rem] lg:w-[28rem] lg:h-[28rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TR8fwEcp0kk4cFLX8mxSgxAb22QPpK38cv-4tq3rZHxqtwlwBkCN9bydzBFbLvAs9ZwzY3YSKXvJmHHsPD-Dc08fzraK5p4vCqZiy-e-LJI-HKp8rvuTxXKScoZ4CftbHn0NJUOAhXgukh7u2JxlWyY4E6kmwaYPh2l7cenOrqltvSKhYB1RySTHMJakZtjcVW34WNslZAi5J~bKvIyD-vNMSI0uNoIz8ZaCmmts7OErgt3D88mQWI5fyOoyfkDF47KL8fnvYYOuVz~X6mBCcPseXpuwKQIlr9MJFUnPxKe-fvF29pOWvSXN9vJkYlfIyEb8XHoW1HS4wIDYR1cIBA__"
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
                src="https://s3-alpha-sig.figma.com/img/4587/86e9/d5e9865170a32e0687f0a17d8581b9c8?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R56gWRsJCUqe2H5IbwCBk9VuLffXBuqRRs7S32yUfXmwKG88JCMT6E2s6b8yINBfq-aR4C~DmJiuas8ZPirTgPhM1paGMRgK5so1HgdWab~OSMI7xNMjW3DwDCf2w9tzMsRQKd507pmTRSqG-V7g1YhTioOZeAjrWwkmedk4T8kEfqJVfBnpEAbedbBzW7ifNs6fFujjFEWFEY4KqG-QQWEEmAn8zF1LHT41JriqQkcVQTPx6jFnMC9RlO4INv75ED4UdR36IN3wWjYoWAEWdo0rsU395VmAaoYRcMmv584jYhFCdyUxFStTm2I5h~jQ4vt6Nbej7cKuSVMXpiXdbQ__"
                alt="Image4"
                className="max-[1023px]:pt-5 w-full h-full object-cover"
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
                src="https://s3-alpha-sig.figma.com/img/81b4/0a6b/ad298edf330ec5747ae93edc6118ce4a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XRuxMoJZk5nzO8wU1zPqjCt8ZmpLL50fRbuoIgqr3oNxugUWOuyAliTYpNbpL1E9r6lpO8qom9~ddFvd4BmIPbJPheBmiF6eOipfdT52VUGMYqmhko6c0-tBvbq-~hU6nzZrsLYgPO8iMHxUpAn92sji5hAePLHp1IRrPYSXzWUNJaItGA6Hf6efnUxoLHSF8JBUgOB7tr-GhJXEJaiibqLM-Dvmof1FkDAJncS5Fis3J10W8BNwZRdRWxEqDQdSkQwTg2bR-1Zft8xwc3fTaDIbNLrv87qvG1mf5hY-TyI85NHr-04YUVGgKLShLP5Pa045IRE3TbkfxFkpbl~2qw__"
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
          {ProductData.slice(0, 5).map((product) => (
            <ProductCard product={product} additionalClass="lg:w-40" />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[57rem] lg:justify-evenly">
          {ProductData.slice(0, 10).map((product) => (
            <ProductCard product={product} additionalClass="lg:w-40" />
          ))}
        </div>
        <button className="text-bluex font-bold text-sm py-4 px-12 outline outline-2 lg:mb-10 lg:mt-10">
          LOAD MORE PRODUCTS
        </button>
      </div>

      <div className="flex flex-col  py-20  lg:flex-row-reverse lg:justify-center lg:ml-10 ">
        <div className="text-left pl-16 lg:pl-12 lg:pt-24">
          <h5 className="text-bluex font-semibold text-sm pb-5">
            Featured Products
          </h5>
          <h2 className="font-extrabold text-4xl pr-16 pb-2 lg:text-3xl">
            We love what we do
          </h2>
          <div className="pr-20 pt-3 lg:w-96">
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
        <div className="flex flex-row justify-center max-[1023px]:pt-12">
          <div className="w-[10rem] h-[22rem] lg:w-[12rem] lg:h-[26rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/7e90/2282/946c71109661dfcd96fe9458abbd0e5b?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qvSjZtnRdRWMlmqiePnGbGlkjXRTbSHKI0zu4l-rA8q3I3W3THWiqGQklQvHy1F7C6~lNoYVgOU9vdfRjBeO~9e9xVI5f-hxCYFaYnzuekgMVLzJNtTUyQuwtP3gJTZ2e9eRKIAjuHz4MhCMkNILPWJStcTeiGbnpuLqR3tTrt5lpcFKN-SWn2gWfdNT8zZr-VUCNGhVkCUdcH7tJDzq6zpjIure5zWLMOCVkd0O9PZ61wf5d03LzF0Z9K5lLVuUZ22FvDMFRSbQ3f1icDUMu6tmFRGmacr8ZU874l7tPOzGk6b04pAt727EjEGuiBkZ6IFFrYRy2DqFjtMwAy1XxQ__"
              alt="image1"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[14rem] h-[22rem] lg:w-[16rem] lg:h-[26rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/ca34/28bb/b53263f3cb265f6e0a1129f5afc25e74?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GGjJGLvyXlzu73uL-OYm-Om3McKFMruECX6ooegDJE5eukhQcy3NmO2ep~AxLX6wejNZPVg2ZGL~5XeWcavcVTlgk~2u~VGWfRKsUj4rCr~r5G43nl6o~wgAKEMqZi0gQPkVHTC1cP40XFI1q4vfgIUtm2o30gkbOegaWEBQZKI119nnI8cQ-s4XfY4KUHPcIMIqtGnJ92K8nsYtoLP42Gq0ifGMvRCySv9j9XJjrWtHlrcN9ENWLV8CadqgMQM9yEq1VgLqvLAPJ5ZsCHnR-pPvjip4KoCzDAUsNTrU02u1H6mTwednjsjXh~2pj5JW2VW5ZrZDuuTYau5pmya3vA__"
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
          <div className="max-[1023px]:pt-20 lg:pl-16">
            <i className="fa-solid fa-book-open text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Concrete</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Defalcate is most focused in helping you discover your most
              beautiful smile
            </p>
          </div>
          <div className="max-[1023px]:pt-20 lg:pl-16">
            <i className="fa-solid fa-arrow-trend-up text-bluex fa-3x"></i>
            <h3 className="font-bold text-xl pt-5">Hack Growth</h3>
            <p className="text-[#737373] text-sm font-semibold w-56 pt-5">
              Overcame any hurdle or any other problem.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 flex flex-col items-center">
        <div className="max-[1023px]:mb-20 ">
          <h6 className="text-bluex text-sm font-bold ">Practice Advice</h6>
          <h2 className="font-bold text-4xl mt-3 mb-5">Featured Posts</h2>
          <p className="hidden lg:inline-flex  lg:text-sm lg:text-[#737373] lg:font-semibold lg:w-[30rem]">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics{" "}
          </p>
        </div>

        <div className="lg:hidden">
          {BlogData.slice(0, 2).map((blog) => (
            <BlogContent blog={blog} />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-row lg:w-[65rem] lg:justify-evenly lg:my-20">
          {BlogData.map((blog) => (
            <BlogContent blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
