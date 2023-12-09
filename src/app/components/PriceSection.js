export default function PriceSection() {
  return (
    <>
      <section
        id="prices"
        className="xl:px-20 px-5 w-full h-auto md:py-20 py-10"
      >
        <div className="text-center flex flex-col">
          <span className="font-bold text-gray-700 text-3xl">
            Prices
          </span>
          <span className="font-normal text-gray-600 md:mt-4 text-sm">
            Explore our transparent pricing options, designed to cater to
            diverse needs, ensuring a clear and customized path for turning your
            architectural dreams into reality.
          </span>
        </div>

        <div className="flex md:flex-row flex-col md:gap-20 gap-5 justify-center mt-10">
          <div
            className="max-w-sm w-full ring-1 ring-black rounded-lg flex flex-col items-center h-auto gap-8 py-8 px-8 transition delay-75 hover:shadow-lg hover:ring-1 hover:ring-[#ED6125]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span className="font-bold text-md text-gray-900">
              Silver Package
            </span>
            <span className="font-bold text-2xl text-[#ED6125]">
              $100/m<sup>2</sup>
            </span>
            <ul className="list-disc list-inside text-gray-500 font-normal text-sm">
              <li>Conceptual Architectural Design</li>
              <li>Basic Interior Layout</li>
              <li>Standard Material Selection</li>
              <li>Project Management Oversight</li>
            </ul>
            <button className="font-normal text-md py-2 w-full bg-[#ED6125] text-white transition delay-75 hover:rotate-6">
              Book now!
            </button>
          </div>

          <div
            className="max-w-sm w-full ring-1 ring-black rounded-lg flex flex-col items-center h-auto gap-8 py-8 px-8 transition delay-75 hover:shadow-lg hover:ring-1 hover:ring-[#ED6125]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span className="font-bold text-md text-gray-900">
              Gold Package
            </span>
            <span className="font-bold text-2xl text-[#ED6125]">
              $150/m<sup>2</sup>
            </span>
            <ul className="list-disc list-inside text-gray-500 font-normal text-sm">
              <li>Detailed Architectural Design</li>
              <li>Custom Interior Design</li>
              <li>Premium Material Selection</li>
              <li>Sustainable Design Elements</li>
              <li>Construction Supervision</li>
            </ul>
            <button className="font-normal text-md py-2 w-full bg-[#ED6125] text-white transition delay-75 hover:rotate-6">
              Book now!
            </button>
          </div>

          <div
            className="max-w-sm w-full bg-[#ED6125] ring-1 ring-black rounded-lg flex flex-col items-center h-auto gap-8 py-8 px-8 transition delay-75 hover:shadow-lg hover:ring-1 hover:ring-[#ED6125]"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <span className="font-bold text-md text-white">
              Platinum Package
            </span>
            <span className="font-bold text-2xl text-gray-800">
              $200/m<sup>2</sup>
            </span>
            <ul className="list-disc list-inside text-gray-200 font-normal text-sm">
              <li>High-End Architectural Design</li>
              <li>Luxury Interior Design</li>
              <li>Exclusive Material Selection</li>
              <li>Sustainable and Green Building Features</li>
              <li>Comprehensive Project Management</li>
              <li>Post-Construction Support</li>
            </ul>
            <button className="font-normal text-md py-2 w-full bg-[#121212] text-white transition delay-75 hover:rotate-6">
              Book now!
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
