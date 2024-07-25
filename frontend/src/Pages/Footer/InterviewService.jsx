/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";

const InterviewService = () => {
  const [subicon1, setSubicon1] = useState(false);
  const [subicon2, setSubicon2] = useState(false);
  const [subicon3, setSubicon3] = useState(false);
  const [subicon4, setSubicon4] = useState(false);
  const [subicon5, setSubicon5] = useState(false);

  //using useToggle Hook
  // const useToggle = (initialState = false) => {
  //     const [state, setState] = useState(initialState)
  //     const toggle = useCallback(() => setState((state) => !state), []);
  //     return [state, toggle];
  //         }
  // const [toggle, setToggle] = useToggle()

  const [divVisibility, setDivVisibility] = useState({});

  const toggleDiv = (divId) => {
    setDivVisibility((prevVisibility) => ({
      ...prevVisibility,
      [divId]: !prevVisibility[divId],
    }));
  };

  return (
    <>
      <div className="px-3 max-w-[1024px] min-h-[700px] md:min-h-[980px] bg-white flex items-center justify-center md:px-14">
        <div className="max-w-[1320px] w-full h-auto px-3 mx-auto md:max-w-[1200px]">
          <div className="bg-white -mx-3 flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-6/12 px-3 items-center md:items-start">
              <div className="max-w-[500px] mx-auto text-center md:text-left">
                <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                  Hire tech talent 10x faster with our Interview as a Service
                  Platform
                </h2>
                <p className="text-base md:text-lg font-light mb-4 md:mb-12">
                  Technical Interview outsourcing platform that conducts
                  interviews on your behalf, enabling your team to focus on
                  candidates that meet your company standards.
                </p>
              </div>
              <div className="flex flex-wrap w-full mt-4 justify-center md:justify-start">
                <a
                  href="/signup"
                  className="px-8 py-4 bg-black rounded-full text-white flex items-center"
                >
                  Get Started for free
                  <span className="ml-2.5 text-lg">&#8594;</span>
                </a>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-3 mt-8 md:mt-0">
              <img
                className="max-w-full md:max-w-[600px] mx-auto"
                src="https://dersyb7nfifdf.cloudfront.net/dev/2146/6afbf660-da18-4505-9b10-874b224cff47.png"
                alt="Banner for Hire tech talent 10x faster with our Interview as a Service Platform"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[5000px] bg-white flex-col gap-0">
        <div className="bg-[#f8f6f9] py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className=" max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className="flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row-reverse">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className="min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3 min-[1201px]:pr-0">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Fastest Interview Scheduling at Scale
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Experience unmatched efficiency with our service. We
                    guarantee to schedule an interview within 38 minutes of
                    receiving your request. Following the technical interview, a
                    comprehensive report is promptly shared within just 5
                    minutes. Effortlessly manage your entire batch scheduling
                    within minutes, ensuring no time is wasted.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/105f9e49-b21c-4528-81a0-0df27df0b894.png"
                  alt="Fastest Interview Scheduling at Scale"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className="max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Diverse Interviewer Profiles for Every Candidate
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Whether you need a VB script expert or a Java backend
                    engineer, we've got you covered. Our extensive network of
                    over 2,500 vetted interviewers, working as engineers in
                    top-tier companies, ensures a wide range of technical skills
                    are available at your fingertips, ready to streamline your
                    technical interview process seamlessly.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/b80da826-4d6d-4336-ac54-b6b7710619c9.png"
                  alt="Diverse Interviewer Profiles for Every Candidate"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f6f9] py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className="max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row-reverse">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3 min-[1201px]:pr-0">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    High-Quality Technical Interview Process
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Trust in the reliability and depth of our interviewers'
                    network. Our rigorously vetted professionals deliver results
                    you can count on. Candidates we recommend post-interview
                    have an impressive 70%+ likelihood of being selected by your
                    organization, a testament to the quality of our assessment.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/705233d9-0ac7-42ab-ad65-54a13e665a4a.png"
                  alt="High-Quality Technical Interview Process"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className=" max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Enhancing Coding Curriculum with Feedback
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Curriculum refinement is crucial for coding schools. Our
                    sophisticated dashboard provides detailed analytics on
                    candidate rejections and identifies gaps in technical
                    knowledge. This vital feedback empowers universities to
                    enhance their curriculum, better preparing students for
                    future challenges.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/828e1702-76d8-495c-91b2-31ea910c4633.png"
                  alt="Enhancing Coding Curriculum with Feedback"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f6f9] py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className="max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row-reverse">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3 min-[1201px]:pr-0">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Interviewers from Top Tech Companies
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Choose from a broad spectrum of interviewers from elite tech
                    firms, including FAANG, startups, and IT services. This
                    diversity ensures that your candidates are evaluated by the
                    best in the field, aligning with the specific needs of your
                    industry.
                  </div>
                  <div className="flex flex-col flex-wrap justify-center gap-4 min-[768px]:flex-row min-[768px]:justify-start min-[768px]:items-center">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                    <a
                      href=""
                      className="pb-0.5 my-4 max-[768px]:mt-[-16px] min-[992px]:mb-0 w-fit text-base text-[#1d68bd] font-semibold "
                    >
                      Our interviews
                      <span className="ml-1 text-xl">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/production/14833/2c0d6c72-0a25-4d99-970b-328dcf76b80a.png"
                  alt="Interviewers from Top Tech Companies"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className=" max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Cost-Effective & Comprehensive Mock Interviews
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Tailor interview process durations from 30 minutes up to 2
                    hours, allowing for both cost-efficiency and thorough
                    candidate assessment. This flexibility ensures comprehensive
                    evaluation while keeping costs in check.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/a6a60930-0862-443a-8067-71ed83ab0ce8.png"
                  alt="Cost-Effective & Comprehensive Mock Interviews"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#f8f6f9] py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className="max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row-reverse">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3 min-[1201px]:pr-0">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Advanced Cheating Detection in Interviews
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Leverage our cutting-edge technology to uphold the integrity
                    of your interview process. Our system vigilantly monitors
                    candidate activity, ensuring a fair and transparent
                    assessment environment.
                  </div>
                  <div className="flex flex-col flex-wrap justify-center gap-4 min-[768px]:flex-row min-[768px]:justify-start min-[768px]:items-center">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/48ccf71b-ab73-497a-bd64-ad5c852ab7d4.png"
                  alt="Interviewers from Top Tech Companies"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white py-4 px-7 min-[992px]:py-1 min-[1200px]:px-14">
          {/* Section */}
          <div className=" max-w-[1200px] w-full h-auto pt-6 md:mx-auto min-[992px]:pt-28 min-[992px]:pb-20 min-[1441px]:max-w-[1320px]">
            {/* container */}
            <div className=" flex mx-0 flex-col items-center justify-center flex-wrap max-[992px]:flex-col-reverse min-[992px]:flex-row relative min-[1201px]:flex-row">
              {/* row */}
              <div className="px-3 max-[992px]:h-6/12 w-full min-[992px]:max-h-full min-[992px]:w-6/12 min-[1201px]:px-0">
                <div className=" min-[992px]:absolute min-[992px]:top-0 min-[992px]:w-6/12 max-[1201px]:left-0 min-[1201px]:left-6/12 min-[992px]:px-3">
                  <h2 className="mb-2 mt-4 text-2xl font-semibold min-[992px]:mt-0 min-[992px]:mb-4 min-[992px]:text-3xl ">
                    Maximizing Placement Success with Real Interviews
                  </h2>
                  <div className="mb-4 text-base font-light">
                    Prepare candidates for real-world challenges with our
                    authentic interview experiences. Our industry veterans offer
                    vital feedback, significantly increasing the likelihood of
                    successful candidate placements.
                  </div>
                  <div className="flex flex-wrap justify-start">
                    <a
                      href="/signup"
                      className="my-4 py-2.5 px-5 bg-black rounded-[50px] text-white flex justify-center items-center md:w-fit min-[992px]:px-8 min-[992px]:py-4 min-[992px]:mb-0"
                    >
                      Request now
                      <span className="ml-2.5 text-lg">&#8594;</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start items-center w-full max-[992px]:h-6/12 min-[992px]:w-6/12 min-[992px]:justify-center min-[992px]:items-center">
                <img
                  className="max-h-[340px] max-w-full  min-[992px]:w-full min-[992px]:max-h-full "
                  src="https://dersyb7nfifdf.cloudfront.net/dev/2146/5bfcfe78-9220-4b0f-8518-9f28b0df5767.png"
                  alt="Cost-Effective & Comprehensive Mock Interviews"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="div1 mb-20">
          <h2 className="mb-2 mt-4 text-2xl font-semibold md:min-[992px]:mt-0 md:min-[992px]:mb-4 md:min-[992px]:text-3xl text-left">
            Security is our top priority
          </h2>
          <div className="mb-4 text-base font-light text-left">
            Intervue serves startups to fortune 500 companies with enterprise
            grade security baked in by design
          </div>
          <br />
          <div className="flex flex-wrap justify-center">
            <div className="column flex-1 max-w-[300px] mx-2 md:mx-4 my-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border border-gray-300 rounded-lg hover:shadow-lg">
              <a href="" className="security block p-4">
                <img src="" className="mx-auto" alt="Security" />
                <p
                  id="p5"
                  className="mt-2 mb-1 text-center text-black font-semibold"
                >
                  Security
                </p>
                <p id="p6" className="text-sm mb-2 text-center text-gray-700">
                  Protecting your data at every layer is fundamental to how
                  intervue works
                </p>
                <span className="ml-1 text-xl" id="sec1">
                  &#8594;
                </span>
              </a>
            </div>
            <div className="column flex-1 max-w-[300px] mx-2 md:mx-4 my-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border border-gray-300 rounded-lg hover:shadow-lg">
              <a href="" className="compliances block p-4">
                <p
                  id="p5"
                  className="mt-2 mb-1 text-center text-black font-semibold"
                >
                  Compliances
                </p>
                <p id="p6" className="text-sm mb-2 text-center text-gray-700">
                  Enterprise grade compliance commitments where we have
                  established controls to adhere to those commitments
                </p>
                <span className="ml-1 text-xl" id="sec2">
                  &#8594;
                </span>
              </a>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-1/2">
                <div className="column flex-1 max-w-[300px] mx-2 md:mx-4 my-4 border border-gray-300 rounded-lg hover:shadow-lg">
                  <a href="#" className="block p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rocket-takeoff-fill mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
                      <path
                        d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"
                        height="30px"
                      />
                    </svg>
                    <p className="mt-2 mb-1 text-center text-black font-semibold">
                      Intervue for startups
                    </p>
                    <span className="ml-1 text-xl">&#8594;</span>
                  </a>
                </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/2">
                <div className="column flex-1 max-w-[300px] mx-2 md:mx-4 my-4 border border-gray-300 rounded-lg hover:shadow-lg">
                  <a href="#" className="block p-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-rocket-takeoff-fill mx-auto"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
                      <path
                        d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925"
                        height="30px"
                      />
                    </svg>
                    <p className="mt-2 mb-1 text-center text-black font-semibold">
                      Intervue for Enterprises
                    </p>
                    <span className="ml-1 text-xl">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container5 flex flex-col md:flex-row items-center justify-center mb-28">
          <div className="video1 rounded-l-lg overflow-hidden w-2/3 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0">
            <video
              id="capsule"
              muted
              controls
              className="w-full h-auto lg:h-auto"
              src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4"
              autoPlay
            ></video>
          </div>
          <div className="text3 ml-8 lg:ml-8 md:ml-0 w-full lg:w-1/2 xl:w-1/2 lg:order-2 text-left">
            <div className="mb-8 text-base font-light">
              <p className="text-black-700">
                After interviewing qualified candidates on Intervue, we were
                able to convert at least 5% of people from our application base
                to hires.
              </p>
            </div>
            <p className="text-lg text-gray-900 font-bold">Niket Gupta</p>
            <p id="group" className="text-sm text-gray-600">
              Group head of talent acquisition, Yubi
            </p>
            <a href="#" className="a1 flex items-center mt-2 text-blue-500">
              See more customer stories{" "}
              <span className="ml-1 text-xl">&#8594;</span>
            </a>
          </div>
        </div>

        <div className="div2">
          <h2 className="mb-2 mt-4 text-2xl font-semibold md:min-[992px]:mt-0 md:min-[992px]:mb-4 md:min-[992px]:text-3xl text-center">
            Explore more products on intervue
          </h2>
          <br />
          <div className="flex justify-center flex-wrap">
            <div className="column1 flex-1 max-w-[300px] mx-2 md:mx-4 my-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <a href="" className="column4 block">
                <img
                  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c6135016fce3dec26c8c4b_technical-interviews.png"
                  alt="On-Demand"
                  className="mx-auto"
                ></img>
                <p id="p5" className="mt-2 mb-1 text-center text-black">
                  On-Demand
                </p>
                <p id="p6" className="text-sm mb-2 text-center text-black">
                  Save 90% of engineering & recruitment bandwidth, outsource
                  candidate interviews to us
                </p>
                <a
                  href=""
                  className="pb-0.5 text-base text-[#1d68bd] font-semibold inline-block text-center"
                >
                  Know more
                  <span className="ml-1 text-xl">&#8594;</span>
                </a>
              </a>
            </div>
            <div className="column1 flex-1 max-w-[300px] mx-2 md:mx-4 my-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <a href="" className="column4 block">
                <img
                  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c61350bf2156a87d68512b_programming.png"
                  alt="Live Interviews"
                  className="mx-auto"
                ></img>
                <p id="p5" className="mt-2 mb-1 text-center text-black">
                  Live Interviews
                </p>
                <p id="p6" className="text-sm mb-2 text-center text-black">
                  Assess candidates in real-time with our live coding
                  environment & integrated video calls
                </p>
                <a
                  href=""
                  className="pb-0.5 text-base text-[#1d68bd] font-semibold inline-block text-center"
                >
                  Know more
                  <span className="ml-1 text-xl">&#8594;</span>
                </a>
              </a>
            </div>
            <div className="column1 flex-1 max-w-[300px] mx-2 md:mx-4 my-4 w-full sm:w-1/2 lg:w-1/3 xl:w-1/3 border border-gray-300 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <a href="" className="column4 block">
                <img
                  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c616d53601adf691d597e4_detailed-report.png"
                  alt="Assessments"
                  className="mx-auto"
                ></img>
                <p id="p5" className="mt-2 mb-1 text-center text-black">
                  Assessments
                </p>
                <p id="p6" className="text-sm mb-2 text-center text-black">
                  Share assessments across batches with MCQ, Programming and
                  Subjective questions
                </p>
                <a
                  href=""
                  className="pb-0.5 text-base text-[#1d68bd] font-semibold inline-block text-center"
                >
                  Know more
                  <span className="ml-1 text-xl">&#8594;</span>
                </a>
              </a>
            </div>
          </div>
        </div>

        <div className="container4 max-[768px]:flex-col max-[768px]:items-center">
          <div className="text4 max-[768px]:px-6">
            <h1 id="h2">FAQs</h1>
            <br />
            <p id="p0">
              Some frequently asked questions related to Interview as a Service
              to clear all your doubts.
            </p>
            <p id="p11">Still have doubts?</p>
            <a href="#" id="a4">
              <p>
                <span className="span1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="29"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                  </svg>
                </span>
                <span className="span2">Talk to our representative </span>{" "}
              </p>{" "}
            </a>
          </div>
          <div className="divtoggle max-[768px]:px-6">
            <div className="togglediv">
              <button
                onClick={() => {
                  toggleDiv("div1");
                  setSubicon1(!subicon1);
                }}
                className="accordion flex justify-between items-center"
              >
                <div>What is interview as a service?</div>
                {subicon1 ? (
                  <div className="font-semibold text-2xl">-</div>
                ) : (
                  <div className="font-semibold text-2xl">+</div>
                )}
              </button>

              {divVisibility.div1 && (
                <p id="p12">
                  Interview as a Service involves delegating the initial rounds
                  of detailed technical interviews to industry experts. This
                  approach ensures that your in-house hiring team engages with a
                  select group of highly qualified candidates, enhancing the
                  efficiency of the interview-to-job offer conversion process.
                </p>
              )}
            </div>
            <div className="togglediv">
              <button
                onClick={() => {
                  toggleDiv("div2");
                  setSubicon2(!subicon2);
                }}
                className="accordion flex justify-between items-center"
              >
                Who are some top Interview as a Service companies in India
                {subicon2 ? (
                  <div className="font-semibold text-2xl">-</div>
                ) : (
                  <div className="font-semibold text-2xl">+</div>
                )}
              </button>

              {divVisibility.div2 && (
                <p id="p12">
                  Intervue is one of the top Intervue as a Service Companies in
                  India. Headquatered in Bangalore, top companies often choose
                  Intervue's Interview-as-a-Service platform for two key
                  reasons: cost savings and expedited hiring procedures.
                </p>
              )}
            </div>
            <div className="togglediv">
              <button
                onClick={() => {
                  toggleDiv("div3");
                  setSubicon3(!subicon3);
                }}
                className="accordion flex justify-between items-center"
              >
                How do I schedule an interview?
                {subicon3 ? (
                  <div className="font-semibold text-2xl">-</div>
                ) : (
                  <div className="font-semibold text-2xl">+</div>
                )}
              </button>

              {divVisibility.div3 && (
                <p id="p12">
                  Go to intervue.io/homepage and select the profile and rounds
                  you want to schedule the interview for. Add qualified
                  candidate and company details and click 'Schedule Interview.'
                </p>
              )}
            </div>

            <div className="togglediv">
              <button
                onClick={() => {
                  toggleDiv("div4");
                  setSubicon4(!subicon4);
                }}
                className="accordion flex justify-between items-center"
              >
                Will I be charged per interview?
                {subicon4 ? (
                  <div className="font-semibold text-2xl">-</div>
                ) : (
                  <div className="font-semibold text-2xl">+</div>
                )}
              </button>

              {divVisibility.div4 && (
                <p id="p12">
                  For interview as a service solution, you will get paid credits
                  to use per month.
                </p>
              )}
            </div>
            <div className="togglediv">
              <button
                onClick={() => {
                  toggleDiv("div5");
                  setSubicon5(!subicon5);
                }}
                className="accordion flex justify-between items-center"
              >
                Can I get a free trial for Interviews as a Service platform?
                {subicon5 ? (
                  <div className="font-semibold text-2xl">-</div>
                ) : (
                  <div className="font-semibold text-2xl">+</div>
                )}
              </button>

              {divVisibility.div5 && (
                <p id="p12">
                  Yes! Enjoy 2 free credits (1 credt = 1 interview) or you can
                  reach out to us.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Only Animation Part is Remaining*/}
    </>
  );
};

export default InterviewService;
