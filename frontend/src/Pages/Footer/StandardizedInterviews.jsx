const StandardizedInterviews = () => {
  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-12 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Standardize your interview process
          </span>
          <div className="my-6 md:text-lg md:my-8">
            A scattered evaluation process causes unnecessary time spent on the
            wrong candidates. Streamline it with our large question bank,
            pre-vetted interviewers and rubric-driven feedback.
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
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/b9d112ac-5955-401b-8ef4-3d5d014d044f.png"
            alt="assessment"
            className="mb-10 md:mt-12 md:mb-6"
          />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-6 md:mb-6 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/d569842a-2609-49f8-b2a4-7036eb02b6a0.png"
            alt="assessment"
            className="md:mt-10 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Dependable tech interviews
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Interview questions and formats are often left up to the
            interviewer, leading to inconsistency and noise. Our interviewers
            tailor the interview to align with your hiring bar, eliminating
            unwanted inconsistencies.
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
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Structured rubrics
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Intervue’s automated scoring rubrics lead to consistent and fair
            candidate evaluations.CTA: Request interview.
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

        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/f31fdb2f-ff82-40d2-9b59-5795e39c009d.png"
            alt="assessment"
          />
        </div>
      </div>

      {/* Section - 4 */}
      <div className="flex flex-col md:flex-row text-center md:text-left w-full md:p-14 mb-6 md:mb-6  md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/400b7328-891a-44b1-8454-2626a6a52fba.png"
            alt="assessment"
          />
        </div>

        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Interview reliability quotient
          </span>
          <div className="my-3 md:text-lg md:my-8">
            Interviewer feedback along with the video is recorded for every
            technical interview and a detailed report is generated for your
            perusal. This report is guided by pre-set interview parameters and
            helps you quickly assess how the interview quality matched your
            hiring bar.
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

export default StandardizedInterviews;
