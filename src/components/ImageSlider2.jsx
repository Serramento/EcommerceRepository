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
    setCurrent((current + 1) % length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + length) % length);
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

      {slides.length > 0 && (
        <div key={current}>
          <img
            src={slides[current]}
            alt="travel image"
            className="w-full h-full object-cover"
          />
        </div>
      )}

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
