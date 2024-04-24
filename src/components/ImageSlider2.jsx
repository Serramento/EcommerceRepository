import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const ImageSlider2 = ({ slides }) => {
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
    <section className="font-montserrat relative h-full flex justify-center items-center max-[1023px]:pt-8 ">
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="xl"
        className="hover:text-[#737373] text-[#FFFFFF] mr-72 absolute"
        onClick={prevSlide}
      />

      {slides.map((slide, index) => {
        return (
          <div key={index}>
            {index === current && (
              <div className="">
                <img
                  src={slide}
                  alt="travel image"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        );
      })}

      <FontAwesomeIcon
        icon={faChevronRight}
        className="hover:text-[#737373] text-[#FFFFFF] ml-72 absolute"
        size="xl"
        onClick={nextSlide}
      />
    </section>
  );
};

export default ImageSlider2;
