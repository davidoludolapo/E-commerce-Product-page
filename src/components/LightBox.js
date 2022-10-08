import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { data } from "../data";
import close from "../images/icon-close.svg";

export default function LightBox({setShowLightBox}) {
  const [products] = useState(data);
  const [slideIndex, setSlideIndex] = useState(1);
 
  const nextSlide = () => {
    if (slideIndex !== products.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === products.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(products.length);
    }
  };

  return (
    <>
      <article className=" bg-black bg-opacity-75 fixed top-0 left-0 right-0 bottom-0 z-50">
        <button onClick={() => setShowLightBox(false)}><img src={close} className="w-10 absolute top-10 right-10" alt="" /></button>
        <div className="flex items-center justify-center h-screen">
          {products?.map((item, index) => (
            <div
              key={index}
              className={slideIndex === index + 1 ? "relative" : "hidden"}
            >
              <img
                src={item.mainImg}
                alt=""
                className="big-image lg:w-full lg:rounded-2xl"
              />

              <ul>
                <li>
                  <button
                    onClick={prevSlide}
                    className=" bg-white rounded-full p-5 shadow absolute left-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronLeft />
                  </button>
                </li>
                <li>
                  <button
                    onClick={nextSlide}
                    className=" bg-white rounded-full p-5 shadow absolute right-4 top-1/2 -translate-y-1/2"
                  >
                    <FaChevronRight />
                  </button>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </article>
    </>
  );
}
