"use client";
import { useEffect } from "react";
import Aos from "aos";
import Typewriter from "./Typewriter";

export default function BannerSection() {
  useEffect(() => {
    Aos.init();
    Aos.refresh();
  }, []);
  return (
    <section className="w-full h-screen flex mt-10 overflow-hidden xl:px-20 md:pt-10 md:pb-20">
      <div className="banner rounded-2xl w-full z-10 md:mt-8 sm:mt-14">
        <div className="mt-20 md:ml-20 px-5">
          <h3 className="font-bold text-white md:text-3xl sm:text-2xl w-full" data-aos="fade-left" data-aos-duration="1000">
            Designing <span className="text-[#ED6125]">Dreams</span>, Building
            <br />
            Realities: ArchiSync Studio
            <br />
            <Typewriter
              text="Redefining Architectural Excellence!"
              delay={100}
              infinite
            />
          </h3>
        </div>
      </div>
    </section>
  );
}
