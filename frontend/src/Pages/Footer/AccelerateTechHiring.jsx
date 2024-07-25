const AccelerateTechHiring = () => {
  return (
    <div className="text-center sm:text-left p-6 md:p-0 justify-center">
      {/* Section - 1 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full mb-16 md:p-14 md:mb-10">
        <div className="container md:container w-full text-left md:mx-auto md:mt-16 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Accelerate engineering hiring
          </span>
          <div className="my-6 md:text-lg md:my-10">
            Improve the scalability of engineering recruitment through increased
            technical interview bandwidth.
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
            src="https://dersyb7nfifdf.cloudfront.net/dev/2146/618f9362-917f-4240-97dc-1483a0516dae.png"
            alt="assessment"
            className="mb-10 md:mt-12 md:mb-6"
          />
        </div>
      </div>

      {/* Section - 2 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-14 md:mb-10 md:bg-gray-100">
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c67258d320f8a14109841b_seamless-integrations-trustworthy-recommendations.png"
            alt="assessment"
            className="md:mt-10 md:mb-6"
          />
        </div>
        <div className="container md:container w-full text-left md:mx-auto md:mt-10 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-20 sm:mt-10 ">
            Scalable technical interviews
          </span>
          <div className="my-6 md:text-lg md:my-10">
            1000+ experienced developers, dedicated to interviewing, available
            24/7.
          </div>
          <div className="flex">
            <button className="text-white  h-[50px] w-44 md:w-[40%] bg-black hover:bg-neutral-700 focus:outline-none focus:ring-4 font-normal rounded-full text-sm mb-6">
              <a href="/signup">
                Request Now
                <img
                  src="icons8-arrow-30.png"
                  alt="arrow icon"
                  className="ml-4 inline-flex"
                />
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Section - 3 */}
      <div className="flex flex-col md:flex-row gap-2 text-center md:text-left w-full md:p-14 mb-10 md:mb-4">
        <div className="container md:container w-full text-left md:mx-auto md:mt-4 md:p-2">
          <span className="text-[30px] font-semibold md:text-4xl md:mt-10 sm:mt-10 ">
            Trustworthy recommendations
          </span>
          <div className="my-6 md:text-lg md:my-10">
            Get reliable recommendations from consistent tech evaluations.
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
        <div className="text-center md:px-2 md:flex md:w-[110%]">
          <img
            src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c6725885d5477b4c95a322_seamless-integrations-scalable-technical-interviews.png"
            alt="assessment"
            className="md:mt-0 md:mb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default AccelerateTechHiring;
