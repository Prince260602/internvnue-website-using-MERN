/* eslint-disable react/no-unescaped-entities */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const DiversityInclusion = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Diversity & inclusion
          </span>
          <div className="my-6 md:text-lg md:my-8">
            Reduce bias in your recruitment process and build diverse teams.
          </div>
          <div className="flex">
            <button className="text-white  h-14 w-full md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-lg mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4 -mt-1 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
        <div
          className="text-center md:px-2 md:flex md:w-[110%] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/2efaf566-c3bd-44f4-bd55-e37f1f9079a2.png"
            alt="assessment"
            className="mb-6 md:mt-12 md:mb-2"
          />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div
          className="text-center md:px-2 md:flex md:w-[110%] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/bb472c49-8781-4393-a3e9-7705121f196b.png"
            alt="assessment"
            className="md:mt-6 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Evaluate everyone equally
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Use our standardised on-demand interviews for all applicants.
            Identify the best candidates based on merit.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-2 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6">
        <div className="container md:container w-full text-left md:mx-auto md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Unbiased interviews
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Intervue’s automated scoring rubrics and detailed candidate
            performance reports lead to consistent and fair candidate
            evaluations.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-2 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div
          className="text-center md:px-2 md:flex md:w-[110%] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/f57a836b-a6e6-4c58-ac51-a78efc16e9da.png"
            alt="assessment"
          />
        </div>
      </div>

      {/* Section - 4 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div
          className="text-center md:px-2 md:flex md:w-[110%] aos-init aos-animate"
          data-aos="fade-up"
          data-aos-offset="100"
        >
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/818c7200-7bd5-49f1-bcf7-e612b0fbc8dd.png"
            alt="assessment"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Empower with analytics
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Intervue's analytics empower you to optimize your hiring strategies
            continually. By tracking key performance indicators and candidate
            feedback, you can refine your interview process over time, make more
            inclusive hires and reduce bias.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-2 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiversityInclusion;
