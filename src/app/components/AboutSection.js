"use client";
import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
export default function AboutSection() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);

  return (
    <>
      <section id="about" className="py-10 w-full h-100 md:px-20">
        <div
          className="flex md:flex-row flex-col gap-5"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex md:w-1/2 w-full p-2 order-2 md:order-1">
            <Image
              className="w-full h-auto rounded-lg"
              src={"/images/about.png"}
              alt="About Image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex flex-col gap-3 md:w-1/2 w-full items-center self-center order-1 md:order-2">
            <span className="text-gray-500 font-semibold md:text-2xl">
              About Us
            </span>
            <div className="text-gray-800 font-semibold md:text-3xl sm:text-2xl text-center">
              “Welcome to{" "}
              <span className="text-[#ED6125]">ArchiSync Studio</span>”
            </div>
          </div>
        </div>

        <div
          className="flex md:flex-row flex-col gap-5 mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex md:w-1/2 w-full p-2 order-2">
            <Image
              className="w-full h-auto rounded-lg"
              src={"/images/about2.png"}
              alt="About Image"
              width={1000}
              height={1000}
            />
          </div>
          <div className="flex md:w-1/2 w-full items-center self-center order-1">
            <div className="text-gray-900 font-normal text-sm text-center md:px-20">
              At ArchiSync Studio, we are passionate architects dedicated to
              shaping inspiring spaces that seamlessly blend functionality with
              aesthetics. With a commitment to innovation and a keen eye for
              design, our team brings a wealth of experience to every project.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
