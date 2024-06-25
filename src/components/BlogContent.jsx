import React from "react";
import { Link } from "react-router-dom";

const BlogContent = (props) => {
  return (
    <div className="shadow-md w-80 lg:w-65">
      <Link to="/blog">
        <div className="h-80 lg:h-65 relative">
          <h6 className="text-[#FFFFFF] font-bold text-sm bg-[#E74040] absolute ml-3 mt-3 px-3 py-1">
            NEW
          </h6>
          <img src={props.blog.image} className="w-full h-full object-cover " />
        </div>

        <div className="m-7 text-left">
          <p className="text-[#737373] text-xs font-semibold w-40 flex flex-row justify-between">
            <span className="text-[#8EC2F2]">Google</span> <span>Trending</span>{" "}
            <span>New</span>
          </p>
          <h4 className="text-xl font-semibold mt-3">
            Loudest à la Madison #1 (L'integral)
          </h4>
          <p className="text-[#737373] text-sm font-semibold text-left mt-3">
            We focus on ergonomics and meeting you where you work. It's only a
            keystroke away.
          </p>
          <div className="flex flex-row justify-between mt-7">
            <div className="flex flex-row text-bluex">
              <i className="fa-regular fa-clock"></i>
              <p className="text-[#737373] text-xs font-semibold pl-1">
                22 April 2021
              </p>
            </div>
            <div className="flex flex-row text-[#23856D]">
              <i className="fa-solid fa-chart-line"></i>
              <p className="text-[#737373] text-xs font-semibold pl-1">
                10 comments
              </p>
            </div>
          </div>
          <div className="text-bluex">
            <button className="text-[#737373] font-bold text-sm mt-7 pr-1 mb-10 lg:mb-3">
              Learn More
            </button>
            <i className="fa-solid fa-chevron-right fa-lg"></i>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogContent;
