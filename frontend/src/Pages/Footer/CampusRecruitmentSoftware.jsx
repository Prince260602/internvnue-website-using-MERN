/* eslint-disable react/no-unescaped-entities */
function CampusRecruitmentSoftware() {
  const languages = [
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca16bb6414954478ddf_12.png",
      alt: "C++",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca2d317d3547d05eb90_18.png",
      alt: "Java",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca28e661221fbc8b7ff_8.png",
      alt: "PHP",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca1e1bbc552b801e03b_11.png",
      alt: "JavaScript",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca2d298ced8539c66a8_16.png",
      alt: "HTML/CSS",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca1ef603d874843e4b1_15.png",
      alt: "Python",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca1d68e92dc63e2850d_7.png",
      alt: "React",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca0144d015ca40a5598_2.png",
      alt: "Angular",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca101dfcf141b5dd0d0_10.png",
      alt: "C#",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca28e6612948dc8b800_22.png",
      alt: "Kotlin",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca2d718c4fed679fbe0_19.png",
      alt: "Swift",
    },
    {
      src: "https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60c01ca13ee6a263305e4f3b_5.png",
      alt: "MySQL",
    },
  ];
  return (
    <>
      <div className="technicalScreening flex flex-col bg-white items-center justify-center">
        <div className="technicalScreening-div1 flex flex-col items-center justify-center mt-8 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              Resumes aren't enough
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Remotely assess a developer with take home assignments before
              taking interviews
            </p>
          </div>
          <button
            className="bg-black text-white text-lg py-2 px-4 rounded-full mt-8 hover:bg-gray-900"
            onClick={() =>
              (window.location.href = "https://www.intervue.io/signup")
            }
          >
            Get Started →
          </button>
        </div>

        <div className="technicalScreening-div2 flex flex-col mt-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-36 ">
          <img
            src="https://dersyb7nfifdf.cloudfront.net/production/32/a19f3e6b-d848-49f9-97fa-a26d0e3945db.png"
            alt="image1"
            className="w-full h-auto max-w-full rounded-2xl"
          />
        </div>

        <div className="technicalScreening-div3 flex flex-col w-full mt-4 bg-[#FEF7EE]">
          <h2 className="text-center text-black text-xl mb-8 mt-16">
            Trusted By
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20 px-4">
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f88f2b12d870ceec40_olx-dark.png"
              alt="OLX Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f9f6402a37a333a3d3_invideo-dark.png"
              alt="Invideo Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f918a5dfddec002440_paytm-dark.png"
              alt="Paytm Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f87ef92f78f7a2c7e0_karza-dark.png"
              alt="Karza Technologies Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f90391b1322132e5d7_healthi-dark.png"
              alt="HealthifyMe Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60acb5f83ca07b5dd421a131_bounce-dark.png"
              alt="Bounce Logo"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40"
            />
          </div>
        </div>

        <div className="technicalScreening-div4 bg-black text-white flex flex-col py-12 px-4 sm:px-8 md:px-16 lg:px-32 w-full">
          <h2 className="text-4xl font-bold mb-4 text-left">
            35+ coding languages supported
          </h2>
          <p className="text-lg mb-8 text-gray-300">
            C, C++, Java, Python or Medusa, whatever your Jam, we have it all
          </p>
          <div className="flex flex-wrap justify-left  gap-4 mb-8 ">
            {languages.map((language, index) => (
              <img
                key={index}
                src={language.src}
                alt={language.alt}
                className="w-16 h-16 md:w-20 md:h-20 rounded-lg"
              />
            ))}
          </div>
          <button className=" bg-white w-full sm:w-3/12 border text-black text-2xl py-4 mt-8 rounded-3xl hover:bg-black hover:border-white hover:text-white">
            Try Sandbox →
          </button>
        </div>

        <div className="technicalScreening-div5 container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-32 mt-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <video
              className="w-full lg:w-8/12 max-w-2xl rounded-lg border border-gray-200"
              autoPlay
              muted
              loop
              src="https://dersyb7nfifdf.cloudfront.net/production/32/a537b684-e7bb-4c1f-8ad8-0bb120ad9d6f.mp4"
            />
          </div>

          <div className="lg:w-1/2 lg:ml-8 flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Validate test cases automatically
            </h1>
            <p className="text-lg mb-8 text-black text-center lg:text-left ">
              Intervue automatically validates multiple test cases for every
              question. Get a detailed report on candidate performance.
            </p>
            <a
              href="https://www.intervue.io/signup"
              className="bg-black text-white text-lg py-2 px-4 rounded-full flex items-center hover:bg-gray-900 mx-auto lg:mx-0"
            >
              <span>Learn more</span>
              <img
                src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60b2b675500bfe721a3972f1_ArrowRight.svg"
                loading="lazy"
                width="14"
                alt=""
                className="ml-2"
              />
            </a>
          </div>
        </div>

        <div className="technicalScreening-div6 flex flex-col md:flex-row px-8 md:px-32 mt-10 gap-8 md:gap-20">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-black text-2xl md:text-3xl font-bold">
              Powerful proctoring, customizable as per your needs
            </h1>
            <div className="text-base md:text-lg text-black mt-4 md:mt-8">
              Intervue's proctor controls detect impersonation by taking
              candidate snapshots. It also controls tab switching, gives
              clipboard history, and the ability to customize the stringency of
              proctoring, making sure that your assessments are completely fair.
            </div>
            <button
              className="bg-black text-white text-base md:text-lg py-2 px-4 rounded-full mt-4 md:mt-8 w-full md:w-56"
              onClick={() =>
                (window.location.href = "https://www.intervue.io/signup")
              }
            >
              Check it out →
            </button>
          </div>
          <img
            src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60b835b261d6ccf0c8d50f68_Rough%20Draw-Page-1%20(1).svg"
            loading="lazy"
            width="575"
            alt=""
            className="w-full md:w-auto md:mt-0 order-first md:order-last "
          />
        </div>

        <div className="technicalScreening-div7 flex flex-col md:flex-row px-8 md:px-32 mt-10 gap-8 md:gap-20">
          <img
            src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60b838547bb7c972c3ae2a9c_Rough%20Draw-Page-1%20(4).svg"
            loading="lazy"
            width="575"
            alt=""
            className="w-full md:w-auto md:mt-0"
          />
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-black text-2xl md:text-3xl font-bold">
              Export detailed reports directly to Airtable
            </h1>
            <div className="text-base md:text-lg text-black mt-4 md:mt-8 ">
              Export auto graded reports along with leaderboard directly to your
              Airtable workspace. Get centralized notes that shows the candidate
              journey from a take home assignment to interviews helping you make
              unbiased decisions.
              <button
                className="bg-black text-white text-base md:text-lg py-2 px-4 rounded-full mt-4 md:mt-8 w-full md:w-56"
                onClick={() =>
                  (window.location.href = "https://www.intervue.io/signup")
                }
              >
                Learn more →
              </button>
            </div>
          </div>
        </div>

        <div className="technicalScreening-div8 flex flex-col md:flex-row px-8 md:px-32 mt-10 gap-8 md:gap-20">
          <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-black text-2xl md:text-3xl font-bold">
              Review hours long assignment in minutes
            </h1>
            <div className="text-base md:text-lg text-black mt-4 md:mt-8">
              Intervue documents candidate's keystrokes, clipboard history,
              language changes, tab switches and code executions. Once
              submitted, Playback the whole assignment in minutes.
            </div>
            <button
              className="bg-black text-white text-base md:text-lg py-2 px-4 rounded-full mt-4 md:mt-8 w-full md:w-56"
              onClick={() =>
                (window.location.href = "https://www.intervue.io/signup")
              }
            >
              Explore playback →
            </button>
          </div>
          <img
            src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60b0720685586d54f790f0fb_Untitled%20Diagram%20(3)-p-800.png"
            loading="lazy"
            width="575"
            alt=""
            className="order-first md:order-last "
          />
        </div>

        <div className="technicalScreening-div9 container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-32 mt-8">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <video
              className="w-full lg:w-8/12 max-w-2xl rounded-lg border border-gray-200"
              autoPlay
              muted
              loop
              src="https://dersyb7nfifdf.cloudfront.net/production/32/001e45c1-c895-42f2-86fb-94a3408fd42c.mp4"
            />
          </div>

          <div className="lg:w-1/2 lg:ml-8 flex flex-col items-start">
            <h1 className="text-3xl font-bold mb-4 text-center lg:text-left">
              Customize assignments as per your need
            </h1>
            <p className="text-lg mb-8 text-black text-center lg:text-left ">
              Ask multiple choice questions, subjective questions and coding
              problems in 2 (or more) languages in a single assignment
            </p>
            <a
              href="https://www.intervue.io/signup"
              className="bg-black text-white text-lg py-2 px-4 rounded-full flex items-center hover:bg-gray-900 mx-auto lg:mx-0"
            >
              <span>Explore Now →</span>
              <img
                src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60b2b675500bfe721a3972f1_ArrowRight.svg"
                loading="lazy"
                width="14"
                alt=""
                className="ml-2"
              />
            </a>
          </div>
        </div>

        <div className="technicalScreening-div10 flex flex-col md:flex-row px-8 md:px-32 mt-10 gap-8 md:gap-20">
          <div className="flex flex-col w-full md:w-1/2 ">
            <h1 className="text-black text-2xl md:text-3xl font-bold lg:mt-40">
              Collaborative assignments
            </h1>
            <div className="text-base md:text-lg text-black mt-4 md:mt-8">
              Join a candidate live during an assignment. Observe what they are
              doing or have active discussions while collaborating on the code.
            </div>
            <button
              className="bg-black text-white text-base md:text-lg py-2 px-4 rounded-full mt-4 md:mt-8 w-full md:w-56"
              onClick={() =>
                (window.location.href = "https://www.intervue.io/signup")
              }
            >
              Try it Now →
            </button>
          </div>
          <img
            src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60cf520aa776ab8b8a1519e6_Untitled%20Diagram-Page-10.svg"
            loading="lazy"
            width="575"
            alt=""
            className=" h-1/ order-first md:order-last rounded-lg"
          />
        </div>

        <div className="technicalScreening-div11 bg-[#F4E7E7] flex flex-col p-4 md:p-8 mt-8 md:mt-16">
          <p className="text-black text-[20px] md:text-[24px] lg:text-[30px] xl:text-[36px] font-[sans-serif] leading-relaxed mb-4 px-4 md:px-16 lg:px-32 xl:px-56 text-center md:text-left">
            “I've been using a mix of Coderbyte (to share assignments) and
            Google Meets (for the call) and tools like codeshare and Coderpad.
            So this is like one stop shop for me and better in respective
            departments than all of them."
          </p>
          <div className="flex flex-col md:flex-row items-center md:items-start px-4 md:px-16 lg:px-32 xl:px-56 mt-2">
            <img
              src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/60ae0a6221faa1952deb5914_sahil_1234889900.jpeg"
              alt="Sahil Bajaj"
              className="w-10 h-10 rounded-full mr-4"
            />
            <div className="text-center md:text-left">
              <p className="font-medium">Sahil Bajaj</p>
              <p className="text-black text-sm">
                Director of Engineering, InVideo
              </p>
            </div>
          </div>
        </div>

        <div className="technicalScreening-div12 flex flex-col mx-auto p-4 md:p-8 lg:px-12">
          <h2 className="text-3xl font-bold text-center mb-6 mt-8">
            See how Intervue can help you streamline your complete interview
            process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4 md:gap-8 lg:px-36 ">
            <div className="bg-white border border-black rounded-md p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2 md:mb-4">
                Robust take-home assignments
              </h3>
              <p className="text-black">
                Take-home assignments that both developers and hiring managers
                love. With configurable proctor settings and auto-evaluation
                reports.
              </p>
            </div>
            <div className="bg-white border border-black rounded-md p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2 md:mb-4">
                Collaborative Live Interviews
              </h3>
              <p className="text-black">
                Live coding interview environment that ensures collaboration
                between candidates and interviewers.
              </p>
            </div>
            <div className="bg-white border border-black rounded-md p-4 md:p-6">
              <h3 className="text-xl font-bold mb-2 md:mb-4">
                Data-driven decision making
              </h3>
              <p className="text-black">
                Get centralized notes that show the candidate journey from a
                take-home assignment to interviews, helping you make unbiased
                decisions.
              </p>
            </div>
          </div>
        </div>

        <div className="technicalScreening-div13 flex flex-col lg:flex-row lg:gap-8 px-4 lg:px-44 mt-6 mb-20">
          <div className="flex flex-col px-6 lg:px-18 bg-[#F5F5F5] rounded-md shadow-md p-6 lg:w-1/2 lg:mb-0 mb-8">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Safe and secure
            </h2>
            <p className="text-black">
              SSL everywhere, database encryption at rest, 100% cloud-based
              architecture secured behind a VPC, and quarterly independent
              security audits.
            </p>
          </div>
          <div className="flex flex-col px-6 lg:px-18 bg-[#F5F5F5] rounded-md shadow-md p-6 lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              SAML single sign-on
            </h2>
            <p className="text-black">
              Manage employee access at scale with secure single sign-on
              included with our Enterprise Plan.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CampusRecruitmentSoftware;
