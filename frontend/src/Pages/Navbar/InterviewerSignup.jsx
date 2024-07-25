// import React from "react";
import React, { useState } from "react";

const SignupPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    {
      title: "Sign up with Intervue",
      image:
        "https://dersyb7nfifdf.cloudfront.net/dev/2146/4bf7003a-901c-4b39-90d6-af481ae476ce.png",
    },
    {
      title: "Download the interviewer app",
      image:
        "https://dersyb7nfifdf.cloudfront.net/production/1342/9403c768-bb86-4b90-a10c-6ec3343135f9.png",
    },
    {
      title: "Earn money by taking interviews",
      image:
        "https://dersyb7nfifdf.cloudfront.net/dev/2146/6fe2bbd0-fa5d-4b9a-9b31-9540076b9293.png",
    },
  ];
  return (
    <>
      <div className="singnup flex flex-col">
        <div className="section-Navbar flex flex-row fixed top-0 left-0 w-full  justify-between bg-white shadow-md z-50 pt-6 pl-28 pr-28 pb-4">
          <h1 className="text-2xl md:text-3xl font-bold">intervue</h1>
          <a
            href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
            className="flex gap-2 md:gap-4 w-auto md:w-64 px-2 md:px-4 py-2 bg-blue-900 text-white font-medium md:text-sm leading-tight  rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl"
          >
            <span className=" flex items-center">
              <svg
                className="w-4 h-4 md:w-6 md:h-6"
                viewBox="0 0 20 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </span>
            <p className="hidden md:block my-1">Connect with LinkedIn</p>
          </a>
        </div>

        <div className="section-one flex flex-col md:flex-row justify-around mt-24">
          <div className="bg-white p-8 order-2 md:order-1">
            <div className="flex justify-left mb-4">
              <button className="bg-gray-200 px-4 py-2 rounded-md text-black">
                <span className="inline-block mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M8 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm4 12a1 1 0 11-2 0v-7a1 1 0 012 0v7zm4-12a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1z" />
                  </svg>
                </span>
                Earn money by taking interviews
              </button>
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Become an Interview Engineer
            </h2>

            <p className="text-black mb-8">
              Get instantly paid for every interview that you take & offer more
              services to candidates
            </p>

            <a
              href="https://www.linkedin.com/?trk=guest_homepage-basic_nav-header-logo"
              className="flex gap-2 md:gap-4 w-auto md:w-64 px-2 md:px-4 py-2 bg-blue-900 text-white font-medium md:text-sm leading-tight rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out text-xl"
            >
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 md:w-6 md:h-6"
                  viewBox="0 0 20 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
              </span>
              <p className="show md:block text-lg  my-1">
                Connect with LinkedIn
              </p>
            </a>

            <div className="flex items-center mt-8">
              <div className="flex">
                <img
                  src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/become-an-interviewer/interviewer-combo.png"
                  alt="User"
                  className="w-18 h-8 rounded-full mr-1"
                />
              </div>
              <p className="ml-2">
                1000+ interviewers have already joined the league
              </p>
            </div>
          </div>

          <div className="flex justify-center order-2 md:order-2">
            <img
              src="https://dersyb7nfifdf.cloudfront.net/production/1342/21ef5d35-6102-41ff-93c3-765ec8da287a.png"
              alt="picone"
              className="w-full md:w-80 pb-8 px-4"
            />
          </div>
        </div>

        <div className="section-two flex flex-col lg:flex-row gap-4 lg:gap-0 bg-zinc-700 pb-14">
          <div className="flex flex-col lg:w-1/2 space-y-4 px-4 lg:px-28 mt-14 order-1 lg:order-1 text-white text-base">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center cursor-pointer p-4 ${
                  activeIndex === index ? "bg-zinc-800 tracking-wider" : ""
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="text-2xl font-bold mr-4">{index + 1}</div>
                <h3 className="text-xl">{step.title}</h3>
              </div>
            ))}
          </div>

          <div className="lg:w-1/2 flex flex-col items-center mt-14 order-1 lg:order-2">
            <div className="flex justify-between w-full px-4 lg:px-0 mb-4 lg:hidden">
              <button
                className="p-2"
                onClick={() =>
                  setActiveIndex(
                    (activeIndex - 1 + steps.length) % steps.length
                  )
                }
              >
                <svg viewBox="0 0 17 15" width="1em" fill="currentColor">
                  <path
                    d="M15.5 7.5H1m0 0L7.5 1M1 7.5L7.5 14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </button>
              <button
                className="p-2"
                onClick={() => setActiveIndex((activeIndex + 1) % steps.length)}
              >
                <svg viewBox="0 0 17 16" width="1em" fill="currentColor">
                  <path
                    d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                    fill="currentColor"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </button>
            </div>
            <img
              src={steps[activeIndex].image}
              alt={steps[activeIndex].title}
              className="w-full lg:w-3/4"
            />
          </div>
        </div>

        <div className="section-three flex flex-col md:flex-row justify-around items-center mt-6 pb-4">
          <div className="flex flex-col text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-xl font-bold">
              Download the Intervue Partner app!
            </h2>
            <p className="text-black">
              For seamless scheduling, payouts and tracking your schedule
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.intervueapp"
              className="flex mb-4 sm:mb-0 sm:mr-4"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
                className="w-36 h-14"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/intervue-partner/id1660905688"
              className="flex"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
                className="w-36 h-14"
              />
            </a>
          </div>
        </div>

        <div className="section-four flex flex-col mx-auto py-16 lg:px-28">
          <h2 className="text-3xl font-bold text-center mb-8">
            Our Elite Expert Panel
          </h2>
          <p className="text-center text-black text-lg mb-6">
            1000+ qualified interviewers available round the clock
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
              <div className="bg-white rounded-lg w-full max-w-xs mx-auto">
                <a href="https://www.intervue.io/oshi-agrawal">
                  <img
                    src="https://dersyb7nfifdf.cloudfront.net/production/interviewer-profile-pictures/5fa1f3f4-f66c-44d8-a814-fd08ee85beca.jpg"
                    alt="Oshi Agrawal"
                    className="rounded-t-lg w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Oshi Agrawal</h2>
                    <p className="text-gray-600">
                      Paytm, Senior Software Engineer
                    </p>
                    <div className="flex items-center">
                      <span className="text-xl font-bold">4.70 ⭐</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-lg w-full max-w-xs mx-auto">
                <a href="https://www.intervue.io/sahasumalya">
                  <img
                    src="https://dersyb7nfifdf.cloudfront.net/production/interviewer-profile-pictures/0f6fee60-187e-44ed-8ccf-e0bc3b56eeac.jpg"
                    alt="Sumalya Saha"
                    className="rounded-t-lg w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Sumalya Saha</h2>
                    <p className="text-gray-600">
                      Intuit, Senior Software Engineer
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold">4.60 ⭐</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-lg w-full max-w-xs mx-auto">
                <a href="https://www.intervue.io/kajal-kaushik">
                  <img
                    src="https://dersyb7nfifdf.cloudfront.net/production/interviewer-profile-pictures/68935ce6-16ff-437f-bc4a-5f85c7e238fe.jpg"
                    alt="Kajal Kaushik"
                    className="rounded-t-lg w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Kajal Kaushik</h2>
                    <p className="text-gray-600">
                      Infosys, Front-end Developer
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold">3.00 ⭐</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-lg w-full max-w-xs mx-auto">
                <a href="https://www.intervue.io/sumit-kapoor">
                  <img
                    src="https://dersyb7nfifdf.cloudfront.net/production/interviewer-profile-pictures/bb34b3a9-006d-4b7e-b885-8cd040cd60b5.jpg"
                    alt="Sumit Kapoor"
                    className="rounded-t-lg w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Sumit Kapoor</h2>
                    <p className="text-gray-600">Adobe, Full Stack Developer</p>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold">4.95 ⭐</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="bg-white rounded-lg w-full max-w-xs mx-auto">
                <a href="https://www.intervue.io/prakhsharma">
                  <img
                    src="https://dersyb7nfifdf.cloudfront.net/production/interviewer-profile-pictures/a7e93f4c-d40c-4598-9728-cf71c93a1ee6.jpg"
                    alt="Prakhar Sharma"
                    className="rounded-t-lg w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold">Prakhar Sharma</h2>
                    <p className="text-gray-600">
                      Microsoft, Senior Software Engineer
                    </p>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold">4.75 ⭐</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="https://www.intervue.io/all-interviewers"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="bg-black text-white font-bold py-2 px-4 rounded-3xl">
                View all interviewers
              </button>
            </a>
          </div>
        </div>

        <div class="section-five flex flex-col lg:flex-row py-6 pl-4 lg:pl-28 bg-zinc-700 gap-8 lg:gap-20 pb-0">
          <div class="w-full lg:w-1/3 order-2 lg:order-1 text-white">
            <h2 class="text-3xl font-bold mb-4 lg:mb-8 mt-6">Why Intervue?</h2>
            <div class="space-y-6">
              <div class="mt-5 lg:mt-0">
                <h3 class="BlockTitle text-xl font-bold mb-2">
                  Skyrocket your earnings
                </h3>
                <p class="BlockDescription text-white">
                  Become an interview engineer and boost your income. The more
                  you interview, the more you earn.
                </p>
              </div>
              <div class="Block">
                <h3 class="BlockTitle text-xl font-bold mb-2">
                  Set your own hours
                </h3>
                <p class="BlockDescription text-white">
                  Choose when and where you want to conduct interviews. Whether
                  you're at home, in a cafe, or traveling the world.
                </p>
              </div>
              <div class="Block">
                <h3 class="BlockTitle text-xl font-bold mb-2">
                  Become an industry influencer
                </h3>
                <p class="BlockDescription text-white">
                  As an interview engineer, you're at the forefront of the tech
                  hiring landscape. Shape the future of aspiring tech
                  professionals with your insights and evaluations.
                </p>
              </div>
            </div>
          </div>

          <div class="w-full lg:w-2/3 order-2 lg:order-2 lg:mb-0 mt-6 lg:mt-0">
            <div class="SectionImage mt-6">
              <img
                src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/become-an-interviewer/why-intervue.png"
                alt="Why Intervue?"
                class="w-full h-full left-rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
