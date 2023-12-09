"use client";
import { useRef } from "react";
import Image from "next/image";
import Slider from "react-slick";

export default function InteriorSlider() {
  const images = [
    "/images/interior1.jpg",
    "/images/interior2.jpg",
    "/images/interior3.jpg",
    "/images/interior4.jpg",
    "/images/interior5.jpg",
    "/images/interior6.jpg",
    "/images/interior7.jpg",
    "/images/interior8.jpg",
  ];

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Menampilkan 4 gambar sekaligus pada dekstop
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="flex justify-between mt-10 xl:px-20 px-5">
        <div className="self-center">
          <span className="font-bold md:text-3xl text-gray-800">Interior</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            className=" ring-1 ring-gray-300 rounded hover:ring-1"
          >
            <svg
              width="57"
              height="48"
              viewBox="0 0 57 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.2929 24.7071C16.9024 24.3166 16.9024 23.6834 17.2929 23.2929L23.6569 16.9289C24.0474 16.5384 24.6805 16.5384 25.0711 16.9289C25.4616 17.3195 25.4616 17.9526 25.0711 18.3431L19.4142 24L25.0711 29.6569C25.4616 30.0474 25.4616 30.6805 25.0711 31.0711C24.6805 31.4616 24.0474 31.4616 23.6569 31.0711L17.2929 24.7071ZM39 25H18V23H39V25Z"
                fill="#121212"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="ring-1 ring-gray-300 rounded bg-[#ED6125]"
          >
            <svg
              width="57"
              height="48"
              viewBox="0 0 57 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.7071 24.7071C40.0976 24.3166 40.0976 23.6834 39.7071 23.2929L33.3431 16.9289C32.9526 16.5384 32.3195 16.5384 31.9289 16.9289C31.5384 17.3195 31.5384 17.9526 31.9289 18.3431L37.5858 24L31.9289 29.6569C31.5384 30.0474 31.5384 30.6805 31.9289 31.0711C32.3195 31.4616 32.9526 31.4616 33.3431 31.0711L39.7071 24.7071ZM18 25H39V23H18V25Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="xl:pl-20 mt-4">
        <Slider
          {...settings}
          slidesToShow={4}
          slidesToScroll={1}
          ref={sliderRef}
        >
          {images.map((image, index) => (
            <div className="pl-3" key={index}>
              <Image
                className="w-full h-auto object-cover rounded-lg"
                src={image}
                width={1000}
                height={1000}
                alt={`Interior Image ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
