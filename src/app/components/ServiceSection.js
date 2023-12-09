"use client";
import Image from "next/image";
export default function ServiceSection() {
  return (
    <>
      <section id="services" className="w-full h-auto xl:px-20 md:py-20 py-10 overflow-hidden">
        <div className="text-center flex flex-col">
          <span className="font-bold text-gray-800 md:text-2xl text-lg">Services</span>
          <span className="font-normal text-gray-600 md:mt-4 text-sm">
            ArchiSync Studio offers a comprehensive suite of architectural
            services, including innovative design and planning, bespoke interior
            solutions, sustainable architecture, and meticulous project
            management, ensuring a seamless journey from vision to reality
          </span>
        </div>

        <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:mt-10 mt-8 p-3">
          <div
            className="flex flex-col md:w-1/2 w-full md:p-8 p-3 md:py-20 bg-[#ED6125] transition delay-75 hover:-translate-y-2 rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="">
              <Image
                src={"/images/icon1.svg"}
                className="h-auto md:w-20 w-10"
                alt="icon service"
                width={1000}
                height={1000}
              />
            </span>
            <span className="text-white text-md font-medium md:mt-5 mt-3">
              Architectural Design and Planning
            </span>
            <p className="text-sm font-normal text-gray-300 md:mt-5 mt-3">
              Our expert architects specialize in creating innovative and
              functional designs tailored to your unique vision. From
              conceptualization to detailed planning, we ensure that every
              aspect of your project aligns with your aesthetic preferences and
              practical needs.
            </p>
          </div>

          <div
            className="flex flex-col md:w-1/2 w-full md:p-8 p-3 md:py-20 bg-[#F6F6F6] hover:ring-1 transition delay-75 hover:-translate-y-2 hover:ring-[#ED6125] rounded-lg"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span className="">
              <Image
                src={"/images/icon2.svg"}
                className="h-auto md:w-20 w-10"
                alt="icon service"
                width={1000}
                height={1000}
              />
            </span>
            <span className="text-gray-800 text-md font-medium md:mt-5 mt-3">
              Interior Design Excellence
            </span>
            <p className="text-sm font-normal text-gray-600 md:mt-5 mt-3">
              Elevate your living and working spaces with our bespoke interior
              design solutions. We meticulously curate interiors that harmonize
              with the architectural design, focusing on optimizing
              functionality while enhancing the overall ambiance.
            </p>
          </div>
        </div>

        <div className="flex md:flex-row flex-col md:gap-10 gap-5 md:mt-2 p-3">
          <div className="flex flex-col md:w-1/2 w-full md:p-8 p-3 md:py-20 bg-[#F6F6F6] hover:ring-1 transition delay-75 hover:-translate-y-2 hover:ring-[#ED6125] rounded-lg">
            <span className="">
              <Image
                src={"/images/icon3.svg"}
                className="h-auto md:w-20 w-10"
                alt="icon service"
                width={1000}
                height={1000}
              />
            </span>
            <span className="text-gray-800 text-md font-medium md:mt-5 mt-3">
              Sustainable Architecture
            </span>
            <p className="text-sm font-normal text-gray-600 md:mt-5 mt-3">
              Our expert architects specialize in creating innovative and
              functional designs tailored to your unique vision. From
              conceptualization to detailed planning, we ensure that every
              aspect of your project aligns with your aesthetic preferences and
              practical needs.
            </p>
          </div>
          <div className="flex flex-col md:w-1/2 w-full md:p-8 p-3 md:py-20 bg-[#F6F6F6] hover:ring-1 transition delay-75 hover:-translate-y-2 hover:ring-[#ED6125] rounded-lg">
            <span className="">
              <Image
                src={"/images/icon4.svg"}
                className="h-auto md:w-20 w-10"
                alt="icon service"
                width={1000}
                height={1000}
              />
            </span>
            <span className="text-gray-800 text-md font-medium md:mt-5 mt-3">
              Project Management and Construction Oversight
            </span>
            <p className="text-sm font-normal text-gray-600 md:mt-5 mt-3">
              Leave the complexities of project management to us. ArchiSync
              Studio provides comprehensive project management services,
              ensuring seamless coordination from the initial stages to project
              completion. Our team oversees construction with precision,
              adhering to timelines and quality standards.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
