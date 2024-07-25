/* eslint-disable react/no-unescaped-entities */
const PairProgramming = () => {
  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Streamline your tech interviews
          </span>
          <div className="my-6 md:text-lg md:my-8">
            No more IDE setup, screen sharing, and juggling between multiple
            tabs Get everything in one place
          </div>
          <div className="flex">
            <button className="text-white  h-14 w-full md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-lg mb-6">
              <a href="/signup">
                Give it a try
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4 -mt-1 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-[110%] mb-14 md:ml-6">
          <video
            loop
            controls
            src="https://dersyb7nfifdf.cloudfront.net/public/assets/banner/intervue-video-design.mp4"
            muted
            data-aos="fade-up"
            data-aos-offset="100"
            className="aos-init aos-animate"
          >
            <source src="https://dersyb7nfifdf.cloudfront.net/public/assets/banner/intervue-video-design.mp4" />
          </video>
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/60af8639be239e7434a00b80_Video%20calling%20composit-p-800.png"
            alt="assessment"
            className="md:mt-10 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2 md:ml-6">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Pre-prepared environment ready for collaboration
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Get ready-to-use coding environment of your desired language with
            video calling as soon as you enter the session. No need to waste
            time in IDE setup. Eliminate juggling between video calling and
            IDEs.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Check it out
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
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Tighten feedback loops across teams
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Communicate clearly with your team members who are not present in
            the interview. Get question bank, Interview notes, and candidates
            resume all in the same view. Note the feedback side-by-side as the
            candidate codes live without switching your context.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Try it now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-2 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-full md:ml-6 mb-6">
          <video
            style={{ width: "100%" }}
            autoPlay
            preload="true"
            controls
            src="https://dersyb7nfifdf.cloudfront.net/production/32/871cb7fc-2cc2-4a07-b757-02c2c435eb03.mp4"
            muted
            data-aos="fade-up"
            data-aos-offset="100"
            className="aos-init aos-animate"
          >
            <source src="https://dersyb7nfifdf.cloudfront.net/production/32/871cb7fc-2cc2-4a07-b757-02c2c435eb03.mp4" />
          </video>
        </div>
      </div>

      {/* Section - 4 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6  md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <video
            style={{ width: "100%" }}
            autoPlay
            preload="true"
            controls
            src="https://dersyb7nfifdf.cloudfront.net/production/32/10655695-3c7a-4d48-8696-363895607146.mp4"
            muted
            data-aos="fade-up"
            data-aos-offset="100"
            className="aos-init aos-animate"
          >
            <source src="https://dersyb7nfifdf.cloudfront.net/production/32/10655695-3c7a-4d48-8696-363895607146.mp4" />
          </video>
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2 md:ml-6">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Feel at home when working with Intervue
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Change theme, customize key bindings, font size and tab spacing to
            personalize the coding environment as per your preference.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Explore Sandbox
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

      {/* Section - 5 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-6 md:mb-6">
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Want to work with pseudo code? We have it covered
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Use plain text, 5x faster than google docs, to discuss pseudo code.
            All this with industry grade video calling within the plain text
            editor.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Learn More
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-2 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>

        <div className="text-center md:px-2 md:flex md:w-[110%] md:ml-6 mb-6">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/60c0458b144d014e370b1575_Rough%20Draw-Page-1%20(8).svg"
            alt="assessment"
            className="md:mt-10 md:mb-6"
          />
        </div>
      </div>

      {/* Section - 6 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6  md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <video
            style={{ width: "100%" }}
            autoPlay
            preload="true"
            controls
            src="https://dersyb7nfifdf.cloudfront.net/production/32/176a24a2-b305-4527-8d15-ce825c87d492.mp4"
            muted
            data-aos="fade-up"
            data-aos-offset="100"
            className="aos-init aos-animate"
          >
            <source src="https://dersyb7nfifdf.cloudfront.net/production/32/176a24a2-b305-4527-8d15-ce825c87d492.mp4" />
          </video>
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2 md:ml-6">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10">
            Discuss system design and architecture with trackpad friendly
            whiteboarding
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Use Intervue's trackpad friendly whiteboard tool and dive deeper
            into complex discussions. Collaborate with the candidate live on
            this infinitetly scalable whiteboard.
          </div>
          <div className="flex">
            <button className="text-white md:h-[58px] h-12 w-40 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full md:text-lg sm:text-sm mb-6">
              <a href="/signup">
                Learn More
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

export default PairProgramming;
