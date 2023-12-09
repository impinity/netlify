"use client";
export default function Footer() {
  return (
    <>
      <footer className="bg-white w-full xl:px-20 px-5 border-t py-20">
        <div className="mx-auto grid md:grid-cols-3 md:gap-32 gap-5">
          <div className="w-full mb-4 md:mb-0">
            <span className="font-semibold text-[#ED6125] text-2xl">
              ArchiSync <span className="font-semibold text-black">Studio</span>
            </span>
            <p className="text-sm font-normal text-gray-500">
              Whether you are envisioning a new home, an office space, or a
              community hub, ArchiSync Studio is ready to embark on the journey
              with you. Lets collaborate and create spaces that inspire.
            </p>
          </div>

          <div className="w-full mb-4 md:mb-0">
            <span className="font-semibold text-2xl">
              Services
            </span>
            <ul className="list-disc list-inside">
              <li>
              Architectural Design
              </li>
              <li>
              Interior Design
              </li>
              <li>
              Sustainable Architecture
              </li>
              <li>
              Project Management
              </li>
            </ul>
          </div>

          <div className="w-full mb-4 md:mb-0">
            <span className="font-semibold text-2xl">
              Services
            </span>
            <ul className="list-disc list-inside">
              <li>
              Architectural Design
              </li>
              <li>
              Interior Design
              </li>
              <li>
              Sustainable Architecture
              </li>
              <li>
              Project Management
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-32">
          <hr />
          <div className="font-normal text-md text-center">
          © 2023 <span className="font-bold text-md text-[#ED6125]">ArchiSync <span className="text-gray-800">Studio</span></span>. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
