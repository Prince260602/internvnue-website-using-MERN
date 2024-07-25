import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HiringAnalytics = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Hiring analytics to improve the candidate pipeline
          </span>
          <div className="my-6 md:text-lg md:my-8">
            Our platform offers in-depth hiring and interviewing analytics that
            provide valuable insights, empowering you to optimize your hiring
            strategies and improve the quality of your candidate pool.
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/10273ac5-b14e-4dde-a8bc-7e306aeef989.png"
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/937f88cd-7e11-45c9-abf6-a24268a95078.png"
            alt="assessment"
            className="md:mt-6 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Visualize Your Interview Success
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Our intuitive dashboards display key indicators, such as interview
            completion rates, average candidate performance in a batch, and
            assessment scores, etc allowing you to visualize the overall success
            of interviews conducted. These metrics highlight areas of strength
            and improvement, guiding you to make data-backed decisions to
            enhance your candidate pipeline.
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
            Delight Your Candidates
          </span>
          <div className="my-3 md:text-lg md:my-8">
            By leveraging data from candidate reports and feedback, you can make
            adjustments to create an overall positive and candidate-centric
            experience, enhancing your employer brand and attracting the best
            talent.
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/9e1cb418-9ec3-4c7f-aad4-5e879b3500c3.png"
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/ae8edd17-11f1-43f9-8ae5-55182f216d14.png"
            alt="assessment"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Data-Backed Growth
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Candidate insights across a single batch or multiple batches,
            interview and code replays, detailed rubric-driven reports and
            candidate feedback combined serve as a treasure chest of data and
            information that help you refine your end to end hiring process.
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

export default HiringAnalytics;
