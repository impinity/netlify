"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 xl:px-20 py-2 border-b">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="self-center font-semibold whitespace-nowrap text-[#ED6125]">
              ArchiSync <span className="font-semibold text-black">Studio</span>
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white bg-[#ED6125] transition ease-in delay-75 hover:-rotate-3 font-medium text-sm px-4 py-2 text-center"
            >
              Contact Us
            </button>
            <button
              onClick={toggleMobileMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isMobileMenuOpen ? (
                <svg
                  className="w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-10 h-10"
                  aria-hidden="true"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  ></path>
                </svg>
              )}
            </button>
          </div>

          {/* Mode hp */}
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 transition-transform ease-in-out duration-300 ${
              isMobileMenuOpen
                ? "transform translate-x-0"
                : "transform hidden delay-75"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-normal bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white">
              
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-white transition ease-in delay-75 hover:-translate-y-1 bg-[#ED6125] md:px-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="block py-2 px-3 text-gray-700 hover:text-white transition ease-in delay-75 hover:-translate-y-1 hover:bg-[#ED6125] md:px-4"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 px-3 text-gray-700 hover:text-white transition ease-in delay-75 hover:-translate-y-1 hover:bg-[#ED6125] md:px-4"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#project"
                  className="block py-2 px-3 text-gray-700 hover:text-white transition ease-in delay-75 hover:-translate-y-1 hover:bg-[#ED6125] md:px-4"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="#prices"
                  className="block py-2 px-3 text-gray-700 hover:text-white transition ease-in delay-75 hover:-translate-y-1 hover:bg-[#ED6125] md:px-4"
                >
                  Prices
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="block py-2 px-3 text-gray-700 hover:text-white transition ease-in delay-75 hover:-translate-y-1 hover:bg-[#ED6125] md:px-4"
                >
                  How to
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
