import Image from "next/image";
export default function HowtoSection() {
  return (
    <>
      <section className="w-full h-auto xl:px-20 px-5 py-10 bg-gray-200 pt-20">
        <div className="flex md:flex-row flex-col justify-center gap-10 items-center">
          <div className="flex flex-col md:w-1/2 gap-3">
            <span className="font-bold text-gray-700 md:text-3xl text-3xl">How to</span>
            <span className="font-normal text-sm text-gray-500">
              Explore the seamless journey of turning your vision into reality
              with ArchiSync Studio step-by-step guide, encompassing
              consultation, design conceptualization, meticulous planning,
              construction oversight, and post-construction support
            </span>
            <Image
              className="w-full h-auto rounded-xl"
              src={"/images/img_howto.jpg"}
              width={1000}
              height={1000}
              alt="How to"
            />
          </div>
          <div className="md:w-1/2 grid md:grid-cols-2 md:gap-20 gap-8 justify-center">
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                01 - Consultation and Visioning
              </span>
              <span className="font-normal text-sm text-gray-500">
                Begin your journey with a collaborative consultation where we
                discuss your vision, preferences, and project goals. We work
                closely with you to understand your unique requirements and set
                the foundation for the project.
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                02 - Conceptualization and Design
              </span>
              <span className="font-normal text-sm text-gray-500">
                Our experienced architects translate your ideas into conceptual
                designs. Through multiple iterations and feedback sessions, we
                refine the design to align with your vision, ensuring a
                harmonious blend of creativity and functionality.
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                03 - Planning and Approval
              </span>
              <span className="font-normal text-sm text-gray-500">
                Explore the seamless journey of turning your vision into reality
                with ArchiSync Studio step-by-step guide, encompassing
                consultation, design conceptualization, meticulous planning,
                construction oversight, and post-construction support
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                04 - Interior Design and Material Selection
              </span>
              <span className="font-normal text-sm text-gray-500">
                Collaborate with our interior design experts to personalize your
                space. We assist in selecting materials, finishes, and
                furnishings that complement the architectural design, creating a
                cohesive and inviting environment.
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                05 - Construction and Project Management
              </span>
              <span className="font-normal text-sm text-gray-500">
                With meticulous project management, we oversee the construction
                phase, ensuring timelines and quality standards are met. Regular
                updates and transparent communication keep you informed
                throughout the construction process.
              </span>
            </div>
            <div className="flex flex-col text-center">
              <span className="font-bold text-gray-800 md:text-xl">
                06 - Final Inspections and Handover
              </span>
              <span className="font-normal text-sm text-gray-500">
                Before project completion, we conduct thorough inspections to
                guarantee that every detail meets our high standards. Upon your
                satisfaction, we officially hand over the completed project,
                turning your vision into a tangible reality.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
