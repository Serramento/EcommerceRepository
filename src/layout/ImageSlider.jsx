import React, { useState } from "react";
import { SliderData } from "../SliderData.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="font-montserrat relative h-full flex justify-center items-center">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className=""
        onClick={prevSlide}
      />

      <div className="absolute w-60 mt-36">
        <h5 className="text-[#2A7CC7] font-semibold text-xs">SUMMER 2024</h5>
        <h2 className="font-bold text-3xl text-[#FFFFFF] mt-5">
          NEW COLLECTION
        </h2>
        <h4 className="text-[#737373] font-semibold mt-5">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="mt-5 bg-[#2A7CC7] text-[#FFFFFF] px-9 py-3 font-semibold text-md">
          SHOP NOW
        </button>
      </div>

      {SliderData.map((slide, index) => {
        return (
          <div className="lg:h-[30rem] lg:w-full lg:bg-bluex " key={index}>
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className="rounded-2xl w-full h-full object-cover"
              />
            )}
          </div>
        );
      })}

      <FontAwesomeIcon
        icon={faChevronRight}
        className=""
        size="xl"
        onClick={nextSlide}
      />
    </section>
  );
};

export default ImageSlider;
