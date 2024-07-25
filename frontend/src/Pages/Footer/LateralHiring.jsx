/* eslint-disable react/no-unescaped-entities */
const LateralHiring = () => {
  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full mb-14 md:px-4 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-32 md:p-2">
          <span className="text-4xl md:text-3xl md:mt-10 sm:mt-10 ">
            Resumes aren't enough
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Remotely assess a developer with take home assignments before taking
            interviews.
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

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c5720c12a0007506d5d109_lateral-hiring-resumes-arent-enough.png"
            alt="assessment"
            className="md:mt-28 md:mb-8"
          />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:px-4 mb-14 md:mb-10 md:bg-gray-100">
        <div className="text-center md:p-4 md:flex md:w-[110%] md:mt-14 md:mb-14">
          <video
            autoPlay
            preload="true"
            controls
            src="https://dersyb7nfifdf.cloudfront.net/production/32/a537b684-e7bb-4c1f-8ad8-0bb120ad9d6f.mp4"
            muted
            data-aos="fade-up"
            data-aos-offset="100"
            className="aos-init aos-animate"
          />
          <source src="https://dersyb7nfifdf.cloudfront.net/production/32/a537b684-e7bb-4c1f-8ad8-0bb120ad9d6f.mp4" />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-28 md:p-2">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10 ">
            Validate test cases automatically
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Intervue automatically validates multiple test cases for every
            question. Get a detailed report on candidate performance.
            <ul>
              <li>
                <img src="\icons8-dot-24.png" alt="" className="inline-block" />{" "}
                Skill-based
              </li>
              <li>
                <img src="\icons8-dot-24.png" alt="" className="inline-block" />{" "}
                Round-based
              </li>
              <li>
                <img src="\icons8-dot-24.png" alt="" className="inline-block" />{" "}
                Experience-based
              </li>
            </ul>
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Learn More
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:px-4 mb-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-16 md:p-2">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10 ">
            Powerful proctoring, customizable as per your needs
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Intervue's proctor controls detects impersonation by taking
            candidate snapshots. It also controls tab switching, gives clipboard
            history, and the ability to customize the stringency of proctoring,
            making sure that your assessments are completely fair.
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Check it Out
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c675b9845988b3d1476042_lateral-hiring-powerful-proctoring-customizable-as-per-your-needs.png"
            alt="assessment"
            className="md:mt-12 md:mb-8"
          />
        </div>
      </div>

      {/* Section - 4 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:px-4 mb-14 md:mb-10 md:bg-gray-100">
        <div className="text-center md:mt-8 md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c5720a8bcb07f3040838c4_campus-hiring-easily-filter-top-performing-candidates.png"
            alt="assessment"
            className="md:mt-12 md:mb-8"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-20 md:p-2">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10 ">
            Export detailed reports directly to Airtable
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Export auto graded reports along with leaderboard directly to your
            Airtable workspace. Get centralized notes that shows the candidate
            journey from a take home assignment to interviews helping you make
            unbiased decisions.
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Learn More
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section - 5 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:px-4 mb-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-16 md:p-2">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10 ">
            Review hours long assignment in minutes
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Intervue documents candidate's keystrokes, clipboard history,
            language changes, tab switches and code executions. Once submitted,
            Playback the whole assignment in minutes.
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-44 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Explore Playback
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c5720b3601adf69166bf2a_campus-hiring-review-hours-long-assignments-in-minutes.png"
            alt="assessment"
            className="md:mt-12 md:mb-8"
          />
        </div>
      </div>

      {/* Section - 6 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full  mb-14 md:mb-10 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/66e33400-e176-46a8-9e8c-de822acf6963.png"
            alt="assessment"
            className="md:mt-12 md:mb-8"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-16 md:p-4">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10">
            Customize assignments as per your need
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Ask multiple choice questions, subjective questions and coding
            problems in 2 (or more) languages in a single assignment.
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section - 7 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:px-4 mb-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-16 md:p-2">
          <span className="text-3xl md:text-3xl md:mt-10 sm:mt-10 ">
            Collaborative assignments
          </span>
          <div className="my-6 md:text-lg  md:my-10">
            Join a candidate live during an assignment. Observe what they are
            doing or have active discussions while collaborating on the code.
          </div>
          <div className="flex">
            <button className="text-white  h-[46px] w-44 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Try it now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4  inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/d7278f93-50ca-4be7-902b-08652ada715c.png"
            alt="assessment"
            className="md:mt-12 md:mb-8"
          />
        </div>
      </div>
    </div>
  );
};

export default LateralHiring;
