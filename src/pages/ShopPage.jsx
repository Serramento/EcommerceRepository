import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import ClothsCard from "../components/ClothsCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  fetchSelectedCategory,
  fetchSelectedFilter,
  fetchSelectedSort,
} from "../actions/productReducerActions.jsx";

function ShopPage({ productList }) {
  let { categoryId } = useParams();

  useEffect(() => {
    dispatch(fetchSelectedCategory(categoryId));
  }, [categoryId]);

  const categories = useSelector((store) => store.productReducer.categories);
  const fetchState = useSelector((store) => store.productReducer.fetchState);
  const filter = useSelector((store) => store.productReducer.filter);

  const topFive = categories
    .sort((a, b) => {
      return b.rating - a.rating;
    })
    .slice(0, 5);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="font-montserrat flex flex-col">
      <div className="bg-[#FAFAFA] pt-12 pb-5 flex flex-col items-center lg:pt-10 lg:pb-10">
        <div className="lg:flex lg:flex-row lg:w-[80rem] lg:justify-between lg:px-10 lg:items-center">
          <h3 className="font-bold text-2xl max-[639px]:pb-20">Shop</h3>
          <div className="text-sm flex justify-between w-28 ">
            <Link to="/" className="font-bold ">
              Home
            </Link>
            <i className="fa-solid fa-chevron-right text-[#BDBDBD] pt-1"></i>
            <div className="text-[#737373] font-bold">Shop</div>
          </div>
        </div>

        <div className="mt-16 lg:flex lg:flex-row lg:justify-between lg:pl-5 lg:mt-10">
          {topFive.map((category, index) => (
            <ClothsCard key={index} category={category} />
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center my-10 lg:flex-row lg:justify-between lg:mx-10">
        <h6 className="text-[#737373] font-bold text-base max-[639px]:mb-6">
          Showing all 12 results
        </h6>
        <div className="flex flex-row items-center max-[639px]:mb-6 w-48 justify-between">
          <h6 className="text-[#737373] font-bold text-base">Views:</h6>
          <div className="text-[#252B42]">
            <Link to="/filter">
              <i className="fa-solid fa-table-cells-large border-2 border-[#ECECEC] p-4 rounded-md mr-4"></i>
            </Link>
            <Link to="/filter">
              <i className="fa-solid fa-list-check border-2 border-[#ECECEC] p-4 rounded-md"></i>
            </Link>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between w-72">
          <label className="text-[#737373] bg-[#F9F9F9] w-48 border-2 border-[#DDDDDD] px-1 mr-3 py-3 rounded-md text-sm">
            <select
              value={filter.sort}
              onChange={(event) =>
                dispatch(fetchSelectedSort(event.target.value))
              }
              className="bg-[#F9F9F9] hover:bg-[#c4c3c3] hover:text-[#FFFFFF] rounded-none"
            >
              <option value="price:asc">Price Ascending</option>
              <option value="price:desc">Price Descending</option>
              <option value="rating:asc">Rating Ascending</option>
              <option value="rating:asc">Rating Descending</option>
            </select>
          </label>
          <label>
            <input
              className="bg-[#23A6F0] text-[#FFFFFF] w-32 text-sm font-semibold px-7 py-3 rounded-md"
              placeholder="Filter"
              value={filter.filter}
              onKeyDown={(event) => {
                if (event.key === "Enter")
                  dispatch(fetchSelectedFilter(event.target.value));
              }}
            />
          </label>
        </div>
      </div>

      {fetchState === "FETCHING" ? (
        <i className="fa fa-spinner fa-spin fa-4x my-20 text-[#737373]"></i>
      ) : null}

      <div className="flex flex-col items-center mt-28 lg:mt-16">
        <div className="lg:hidden">
          {productList.slice(0, 4).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              categories={categories}
              additionalClass="lg:w-60"
            />
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-wrap lg:w-[74rem] lg:justify-between">
          {productList.slice(0, 12).map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              categories={categories}
              additionalClass="lg:w-60"
            />
          ))}
        </div>

        <div className="rounded-lg border-2 border-[#BDBDBD] mb-20 mt-3 text-sm font-bold">
          <button className="bg-[#F3F3F3] px-6 py-6 text-[#BDBDBD] rounded-l-lg rounded-r-none">
            First
          </button>
          <button className="px-4 py-6 text-[#23A6F0] border-2 border-[#E9E9E9] rounded-none">
            1
          </button>
          <button className="px-4 py-6 text-[#FFFFFF] rounded-none bg-[#23A6F0]">
            2
          </button>
          <button className="px-4 py-6 text-[#23A6F0] border-2 border-[#E9E9E9] rounded-none">
            3
          </button>
          <button className="px-6 py-6 text-[#23A6F0] rounded-r-lg rounded-l-none">
            Next
          </button>
        </div>
      </div>

      <div className="text-[#737373]  py-24 lg:py-16 bg-[#FAFAFA] mb-5">
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

export default ShopPage;
