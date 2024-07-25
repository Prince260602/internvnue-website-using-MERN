/* eslint-disable react/no-unescaped-entities */
const CandidateExperience = () => {
  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Candidate experience
          </span>
          <div className="my-6 md:text-lg md:my-8">
            Say goodbye to traditional, cumbersome interviews, and embrace a
            modern and inclusive approach that leaves candidates impressed and
            eager to join your team.
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/7ff90b99-7cc5-4740-97d2-0cd8cc876a09.png"
            alt="assessment"
            className="mb-8 md:mt-12 md:mb-2"
          />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/8ac0520f-9eec-4e22-92f2-1ce083fa2dda.png"
            alt="assessment"
            className="md:mt-6 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-20 sm:mt-10 ">
            Engaging and Interactive Interviews
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Interviewer and candidate code, call and collaborate on Intervue’s
            unified interface. Engaged candidates are more likely to give their
            best, leading to a more accurate assessment of their abilities.
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
            Real-Time Collaboration and Feedback
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Conduct joint interviews, share feedback, and collectively assess
            candidates' performance in real time with our live interview
            platform.
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

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/ab6e91c6-10ca-4a58-9dc5-8bfa8c739dcf.png"
            alt="assessment"
          />
        </div>
      </div>

      {/* Section - 4 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/7510d4ce-e7ba-46a0-bef5-0800cf60da93.png"
            alt="assessment"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Candidate-Friendly Interface
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Intervue eliminates context switching and promotes a stress-free
            experience, allowing candidates to focus solely on showcasing their
            skills and abilities.
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

export default CandidateExperience;
