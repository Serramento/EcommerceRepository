import React from "react";
import image1 from "../images/image1.png";
import image2 from "../images/image2.png";
import ImageSlider from "../layout/ImageSlider.jsx";
import { SliderData } from "../SliderData.jsx";
import ProductCard from "../layout/ProductCard.jsx";
import { ProductData } from "../ProductData.jsx";
import BlogContent from "../layout/BlogContent.jsx";
import { BlogData } from "../BlogData.jsx";

function HomePage() {
  return (
    <div className="font-montserrat">
      <ImageSlider slides={SliderData} />

      <div className="text-[#737373] flex flex-col lg:flex-row justify-evenly py-10 lg:px-24 lg:py-16">
        <i class="fa-brands fa-hooli fa-7x xxl:text-xl"></i>
        <i class="fa-brands fa-lyft fa-7x max-[1023px]:pt-5 "></i>
        <i class="fa-brands fa-pied-piper-hat fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-stripe fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-aws fa-7x max-[1023px]:pt-5"></i>
        <i class="fa-brands fa-reddit-alien fa-7x max-[1023px]:pt-5"></i>
      </div>

      <div className="py-2 lg:flex lg:flex-row lg:justify-center">
        <div className="relative">
          <div className="w-96 h-[38rem] lg:w-[28rem] lg:h-[28rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TR8fwEcp0kk4cFLX8mxSgxAb22QPpK38cv-4tq3rZHxqtwlwBkCN9bydzBFbLvAs9ZwzY3YSKXvJmHHsPD-Dc08fzraK5p4vCqZiy-e-LJI-HKp8rvuTxXKScoZ4CftbHn0NJUOAhXgukh7u2JxlWyY4E6kmwaYPh2l7cenOrqltvSKhYB1RySTHMJakZtjcVW34WNslZAi5J~bKvIyD-vNMSI0uNoIz8ZaCmmts7OErgt3D88mQWI5fyOoyfkDF47KL8fnvYYOuVz~X6mBCcPseXpuwKQIlr9MJFUnPxKe-fvF29pOWvSXN9vJkYlfIyEb8XHoW1HS4wIDYR1cIBA__"
              alt="Image3"
              class="w-full h-full object-cover"
            />
          </div>

          <div className=" box-content bottom-0 h-64 bg-opacity-75 w-full text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-48 lg:w-80">
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
                class="max-[1023px]:pt-5 w-full h-full object-cover"
              />
            </div>

            <div className=" box-content bottom-0 h-64 bg-opacity-75 w-full text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-32 lg:w-80">
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
                class="pt-5 w-full h-full object-cover"
              />
            </div>

            <div className=" box-content bottom-0 h-64 bg-opacity-75 w-full text-left bg-[#2D8BC0] absolute text-[#FFFFFF] font-semibold lg:h-32 lg:w-80">
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
        <div className="w-56">
          <h3 className="text-[#252B42] text-lg font-bold mt-24 mb-3">
            BESTSELLER PRODUCTS
          </h3>
          <p className="text-[#737373] text-sm font-semibold mb-16">
            Problems trying to resolve the conflict between{" "}
          </p>
        </div>
        <div>
          <ProductCard products={ProductData} />
        </div>
        <button className="text-bluex font-bold text-sm py-4 px-12 outline outline-2">
          LOAD MORE PRODUCTS
        </button>
      </div>

      <div className="flex flex-col  py-20  lg:flex-row-reverse lg:justify-center lg:ml-10 ">
        <div className="text-left pl-10 lg:pl-12 lg:pt-40">
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
        <div className="flex flex-row justify-center pt-16 px-12 ">
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

      <div className="mt-16 flex flex-col items-center">
        <h6 className="text-bluex text-sm font-bold ">Practice Advice</h6>
        <h2 className="font-bold text-4xl mt-3 mb-20">Featured Posts</h2>
        <BlogContent blogs={BlogData} />
      </div>
    </div>
  );
}

export default HomePage;
