/* eslint-disable react/no-unescaped-entities */
import { Box } from "@mui/material";
const Pricing = () => {
  return (
    <div>
      <div className="mt-32">
        <div className="text-3xl font-semibold">Pricing</div>
        <div className="p-1 font-light ">
          <p className="inline-block text-xl">
            4 out of 5 professionals said that intervue was ‘
            <strong>not that expensive</strong>’.
          </p>
          <p className="text-xl">
            Don't be that one person, checkout our plans
          </p>
        </div>

        <div className="lg:justify-center lg:flex">
          <div className="flex flex-row p-2 mt-4">
            <div className="bg-light_pink flex flex-row">
              <img
                className="md:mt-6 md:mr-2 ml-8 mt-5 w-5 h-5 lg:mt-3"
                src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff23b879772c572488ed_on-demand.svg"
                alt=""
              ></img>
              <p className="lg:pr-4 mt-2 font-semibold mb-4 md:ml-0">
                Outsource interviews
              </p>
            </div>

            <div className="bg-light_pink2 flex flex-row">
              <img
                className="md:mt-6 md:mr-2 ml-8 mt-5 w-5 h-5 lg:mt-3"
                src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64acff233343f7de91af31cb_live-interviews.svg"
                alt=""
              ></img>
              <p className="lg:pr-4 mt-2 font-semibold mb-4 md:ml-0">
                Evaluation Platform
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-start ml-1 mt-2">
        <p className="text-xl font-semibold">Outsource interviews</p>
      </div> */}
      </div>

      <div>
        <Box
          height={700}
          width={330}
          display="flex-col"
          sx={{ border: "2px solid grey" }}
        >
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-3xl float-left mt-4 font-normal ml-4">FAANG</h1>

            <p className=" p-2">
              Interviewers who have built the best tech products in the world
            </p>

            <div className="ml-32 mt-8 flex justify-center items-center bg-red-800">
              <img
                className="w-[100px] h-[100px]"
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/interviewer/FAANG.jpg"
              ></img>
            </div>

            <hr className="w-full h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <div className="mt-5">
              <div className="flex flex-row">
                <svg
                  className="ml-4"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1.5em"
                  height="1.5em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                </svg>
                <p className="pr-2 ">
                  Interviewers from companies like Meta, Amazon, Apple, Google &
                  Netflix
                </p>
              </div>

              <div className="flex flex-row mt-2">
                <svg
                  className="ml-4 mt-2 mr-1"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="0.8em"
                  height="0.8em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                </svg>
                <p className="pr-2">Outsource your interviewing</p>
              </div>

              <div className="flex flex-row mt-4">
                <svg
                  className="ml-4"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1.1em"
                  height="1.1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                </svg>
                <h1 className="pr-6">
                  Detailed report & recording after the interview is done
                </h1>
              </div>

              <div className="flex flex-row mt-4">
                <svg
                  className="ml-4"
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="check"
                  width="1.4em"
                  height="1.4em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 0 0-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"></path>
                </svg>
                <h1 className="pr-6">
                  38 minutes to schedule an interview, 5 minutes to share the
                  reports
                </h1>
              </div>

              <div className="bg-blue2 w-11/12 ml-4 flex flex-row justify-center mt-8">
                <p className="pt-2 pb-2 text-white font-semibold">
                  Signup now&nbsp;
                </p>
                <svg viewBox="0 0 17 16" width="1em" fill="currentColor">
                  <path
                    d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                    fill="white"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>

              <div className="bg-white w-11/12 ml-4 flex flex-row justify-center mt-2 border-solid border-[1px] border-black">
                <p className="pt-2 pb-2 text-black font-semibold">
                  Download plan details&nbsp;
                </p>
              </div>
            </div>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Pricing;
