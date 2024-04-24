import React, { useState } from "react";
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
    <section className="font-montserrat relative h-full flex justify-center items-center max-[1023px]:pt-8">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className="hover:text-[#737373]"
        onClick={prevSlide}
      />

      <div className="absolute w-60 mt-36 lg:w-[50rem] lg:text-left lg:mt-10">
        <h5 className="text-[#2A7CC7] font-semibold text-xs lg:font-bold lg:text-sm">
          SUMMER 2024
        </h5>
        <h2 className="font-bold text-3xl text-[#FFFFFF] mt-5 lg:text-5xl lg:mt-10">
          NEW COLLECTION
        </h2>
        <h4 className="text-[#959494] font-semibold mt-5 lg:w-72 lg:mt-10">
          We know how large objects will act, but things on a small scale.
        </h4>
        <button className="mt-5 bg-[#2A7CC7] text-[#FFFFFF] px-9 py-3 font-semibold text-md lg:mt-7">
          SHOP NOW
        </button>
      </div>

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="lg:h-[30rem] lg:w-[70rem]">
                <img
                  src={slide.image}
                  alt="travel image"
                  className="rounded-2xl w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}

      <FontAwesomeIcon
        icon={faChevronRight}
        className="hover:text-[#737373]"
        size="xl"
        onClick={nextSlide}
      />
    </section>
  );
};

export default ImageSlider;
