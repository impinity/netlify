"use client";
import Image from "next/image";
import InteriorSlider from "./InteriorSlider";
import ExteriorSlider from "./ExteriorSlider";

export default function ProjectSection() {
  return (
    <>
      <section id="project" className="w-full h-auto py-10 overflow-x-hidden" data-aos="fade-up" data-aos-duration="1000">
        <div className="flex flex-col gap-3 xl:px-20 px-5">
          <span className="font-bold md:text-3xl text-gray-800">Projects</span>
          <span className="font-normal text-sm text-gray-600">
            Discover our diverse portfolio where architectural innovation meets
            client vision, showcasing a harmonious blend of design excellence
            and functionality across residential, commercial, and community
            projects.
          </span>
        </div>
        <InteriorSlider />
        <ExteriorSlider />
      </section>
    </>
  );
}
