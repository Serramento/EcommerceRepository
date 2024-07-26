import React from "react";
import { useParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import ImageSlider2 from "../components/ImageSlider2.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ProductPage({ productList }) {
  let { productId } = useParams();
  let thisProduct = productList[0].find(
    (prod) => prod.id === parseInt(productId)
  );

  return (
    <div className="font-montserrat flex flex-col">
      <div className="bg-[#FAFAFA] pt-12 pb-5 flex flex-col items-center lg:pt-10 lg:pb-10 lg:flex lg:flex-row lg:w-[76rem] lg:justify-between lg:items-center">
        <div className="text-sm flex justify-between w-28 lg:ml-20">
          <Link to="/" className="font-bold ">
            Home
          </Link>
          <i className="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
          <Link to="/shop" className="text-[#737373] font-bold">
            Shop
          </Link>
        </div>
      </div>

      <div className="bg-[#FAFAFA] lg:flex lg:flex-row lg:justify-center">
        <ImageSlider2 slides={thisProduct.image} />
        <div className="flex flex-row lg:flex-col w-40 h-40 ml-10 mt-10 pb-10 lg:mt-1 lg:w-20 lg:h-20 lg:mr-10">
          <img src={thisProduct.images[0]} className="lg:pl-1" />
          <img src={thisProduct.images[1]} className="pl-5 lg:mt-5 lg:pl-1" />
        </div>

        <div className="flex flex-col items-start w-80 max-[639px]:mx-auto lg:w-[35rem]">
          <h3 className="text-xl font-semibold mb-3">Graphic Design</h3>
          <div className="flex flex-row text-[#F3CD03] justify-between w-[13rem]">
            <i className="fa-solid fa-star mt-1"></i>
            <i className="fa-solid fa-star mt-1"></i>
            <i className="fa-solid fa-star mt-1"></i>
            <i className="fa-solid fa-star mt-1"></i>
            <i className="fa-regular fa-star mt-1"></i>
            <h6 className="text-[#737373] font-bold ml-2">10 Reviews</h6>
          </div>
          <h5 className="font-bold mt-8 mb-3 text-2xl">
            <span className="text-[#BDBDBD]">$16.48</span>{" "}
            <span className="text-[#23856D]">$6.48</span>
          </h5>
          <h5 className="font-bold mb-10">
            <span className="text-[#737373]">Availability : </span>{" "}
            <span className="text-[#23A6F0]">In Stock</span>
          </h5>
          <p className="text-[#858585] font-semibold text-left">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="h-[1px] w-80 bg-[#BDBDBD] my-5 lg:w-[29rem]" />
          <div className="flex mb-10">
            <div className="h-8 w-8 rounded-2xl bg-[#23A6F0] mr-1.5" />
            <div className="h-8 w-8 rounded-2xl bg-[#23856D] mr-1.5" />
            <div className="h-8 w-8 rounded-2xl bg-[#E77C40] mr-1.5" />
            <div className="h-8 w-8 rounded-2xl bg-[#252B42]" />
          </div>

          <div className="flex justify-between w-[20rem]">
            <button className="bg-[#23A6F0] text-[#FFFFFF] font-semibold px-5 py-3 mb-20">
              Select Options
            </button>
            <i className="fa-regular fa-heart fa-lg fa-lg bg-[#FFFFFF] w-10 h-10 rounded-3xl border-2 border-[#E8E8E8] pt-5"></i>
            <i className="fa-solid fa-cart-shopping fa-lg bg-[#FFFFFF] w-10 h-10 rounded-3xl border-2 border-[#E8E8E8] pt-5"></i>
            <i className="fa-solid fa-eye fa-lg bg-[#FFFFFF] w-10 h-10 rounded-3xl border-2 border-[#E8E8E8] pt-5"></i>
          </div>
        </div>
      </div>

      <div className="flex flex-row w-96 lg:w-[30rem] mx-auto text-[#737373] justify-between text-sm mt-10 mb-16 lg:mb-8">
        <button className="font-semibold underline">Description</button>
        <button className="font-bold">Additional Information</button>
        <button className="font-bold">
          Reviews <span className="text-[#23856D]">(0)</span>
        </button>
      </div>

      <div className="lg:flex lg:justify-center">
        <div className="hidden lg:flex lg:h-[1px] lg:w-[70rem] lg:bg-[#ECECEC] lg:mb-12" />
      </div>

      <div className="lg:flex lg:flex-row lg:justify-center lg:mb-5">
        <div className="relative flex justify-center lg:ml-12">
          <div className="w-[22rem] h-[17rem] absolute lg:h-[24rem]">
            <img
              src="https://s3-alpha-sig.figma.com/img/812e/3845/7d0cc7c0071c4e5eb3752a437fda3d0d?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TR8fwEcp0kk4cFLX8mxSgxAb22QPpK38cv-4tq3rZHxqtwlwBkCN9bydzBFbLvAs9ZwzY3YSKXvJmHHsPD-Dc08fzraK5p4vCqZiy-e-LJI-HKp8rvuTxXKScoZ4CftbHn0NJUOAhXgukh7u2JxlWyY4E6kmwaYPh2l7cenOrqltvSKhYB1RySTHMJakZtjcVW34WNslZAi5J~bKvIyD-vNMSI0uNoIz8ZaCmmts7OErgt3D88mQWI5fyOoyfkDF47KL8fnvYYOuVz~X6mBCcPseXpuwKQIlr9MJFUnPxKe-fvF29pOWvSXN9vJkYlfIyEb8XHoW1HS4wIDYR1cIBA__"
              alt="Image3"
              className="w-full h-full object-cover rounded-lg "
            />
          </div>
          <div className="bg-[#C4C4C4] w-[22rem] h-[17rem] rounded-lg opacity-20 ml-5 mt-2.5 lg:h-[24rem]"></div>
        </div>

        <div className="text-left w-96 ml-10 lg:w-80 mx-auto max-[639px]:my-20 lg:mr-5">
          <h3 className="font-extrabold text-2xl mb-8">
            the quick fox jumps over{" "}
          </h3>
          <p className="text-[#737373] font-semibold lg:text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
            <br />
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met. <br />
            <br />
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
        </div>

        <div className="lg:w-[22rem] flex flex-col items-center mx-auto lg:ml-0">
          <div className="text-left mb-10">
            <h3 className="font-extrabold text-2xl mb-8">
              the quick fox jumps over{" "}
            </h3>
            {Array.from(Array(4), (_, i) => (
              <div key={i}>
                <div className="flex flex-row mt-4">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#737373] lg:text-sm"
                    size="lg"
                  />
                  <h6 className="text-[#737373] font-bold ml-3 lg:text-sm">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            ))}
          </div>

          <div className="text-left mb-10">
            <h3 className="font-extrabold text-2xl mb-8">
              the quick fox jumps over{" "}
            </h3>
            {Array.from(Array(3), (_, i) => (
              <div key={i}>
                <div className="flex flex-row mt-4">
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="text-[#737373] lg:text-sm"
                    size="lg"
                  />
                  <h6 className="text-[#737373] font-bold ml-3 lg:text-sm">
                    the quick fox jumps over the lazy dog
                  </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center bg-[#FAFAFA] pt-10">
        <h3 className="text-[#252B42] w-96 text-2xl font-bold mb-7 lg:mt-1 lg:text-left lg:w-[69rem]">
          BESTSELLER PRODUCTS
        </h3>
        <div className="h-[1px] w-[20rem] mb-8 bg-[#ECECEC] lg:w-[70rem]" />
        <div className="lg:hidden">
          {productList[0].slice(0, 4).map((product) => (
            <ProductCard product={product} additionalClass="lg:w-[15rem]" />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[70rem] lg:justify-between">
          {productList[0].slice(0, 8).map((product) => (
            <ProductCard product={product} additionalClass="lg:w-[15rem]" />
          ))}
        </div>
      </div>

      <div className="text-[#737373]  py-24 lg:py-16 mb-5">
        <div className="flex flex-col lg:flex-row justify-between lg:scale-[0.8]">
          <i className="fa-brands fa-hooli fa-7x"></i>
          <i className="fa-brands fa-lyft fa-7x max-[639px]:pt-5"></i>
          <i className="fa-brands fa-pied-piper-hat fa-7x max-[639px]:pt-5"></i>
          <i className="fa-brands fa-stripe fa-7x max-[639px]:pt-5"></i>
          <i className="fa-brands fa-aws fa-7x max-[639px]:pt-5"></i>
          <i className="fa-brands fa-reddit-alien fa-7x max-[639px]:pt-5"></i>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
