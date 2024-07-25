import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const MockInterviews = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Mock interviews for campuses
          </span>
          <div className="my-6 md:text-lg md:my-8">
            Increase chances of placements via campus drives using our mock
            technical interviews to prepare your students in advance.
          </div>
          <div className="flex">
            <button className="text-white  h-14 w-full md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-lg mb-6">
              <a href="/signup">
                Get Started
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/5c5d40fe-5995-4371-9340-9165ddde2c9f.png"
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/494dd43c-f212-4808-93ae-48a5dd8dc644.png"
            alt="assessment"
            className="md:mt-6 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Efficiency at its best
          </span>
          <div className="my-3 md:text-lg md:my-8">
            With Intervue, conduct interviews online, saving valuable time and
            resources while maintaining a consistent and standardized evaluation
            process.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Get Started
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
            Engage across multiple campuses
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Mock interviews empower you to engage with students across a wide
            array of campuses, breaking down geographical barriers and helping
            them prepare for campus drives.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Get Started
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/046242d5-632e-46b9-8047-4a36637173b9.png"
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/c887dcde-1010-4ab5-bc32-4fd95a405a70.png"
            alt="assessment"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Support your campus stars
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Our platform offers a range of interview formats for multiple
            technical roles. Candidates can engage with industry experts to
            increase their chances of getting a placement.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Get Started
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

export default MockInterviews;
