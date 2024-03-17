import React from "react";

const BlogContent = ({ blogs }) => {
  return (
    <a className="w-80 shadow-md">
      <div className="h-80">
        <img src={blogs[0].image} className="w-full h-full object-cover" />
      </div>

      <div className="m-7 text-left bg-">
        <p className="text-[#737373] text-xs font-semibold">
          <span className="text-[#8EC2F2]">Google</span> Trending New
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
            <i class="fa-regular fa-clock"></i>
            <p className="text-[#737373] text-xs font-semibold pl-1">
              22 April 2021
            </p>
          </div>
          <div className="flex flex-row text-[#23856D]">
            <i class="fa-solid fa-chart-line"></i>
            <p className="text-[#737373] text-xs font-semibold pl-1">
              10 comments
            </p>
          </div>
        </div>
        <div className="text-bluex">
          <button className="text-[#737373] font-bold text-sm mt-7 pr-1">
            Learn More
          </button>
          <i class="fa-solid fa-chevron-right fa-lg"></i>
        </div>
      </div>
    </a>
  );
};

export default BlogContent;
