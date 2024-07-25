function Features() {
  return (
    <>
      <div className="features flex flex-col items-center justify-center">
        <div className="features-1 flex flex-col mx-auto text-center mt-16 pb-4 max-w-screen-lg">
          <h1 className="font-semibold mb-4 text-3xl md:text-4xl lg:text-6xl">
            Lots of useful features
          </h1>
          <p className="text-base md:text-lg lg:text-2xl mb-8">
            Question bank, resume, interview history and many more.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="bg-black text-white font-medium text-base md:text-lg px-8 py-3 rounded-full"
              onClick={() =>
                (window.location.href = "https://www.intervue.io/pricing")
              }
            >
              See Pricing
            </button>
            <button
              className="bg-white text-gray-600 font-medium text-base md:text-lg px-8 py-3 rounded-full underline"
              onClick={() =>
                (window.location.href = "https://www.intervue.io/demo")
              }
            >
              Try Demo
            </button>
          </div>
        </div>

        <div className="features-2 flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="transition-all duration-400 ease-[cubic-bezier(0,0,0.13,1.01)] opacity-100 transform-none">
                <img
                  src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-4.png"
                  alt="Main"
                  className="w-11/12 mx-auto"
                />
                <img
                  src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-5.png"
                  alt="Playback"
                  className="absolute top-12 left-1/2 lg:top-16 lg:w-72 lg:left-[22rem] lg:transform-none md:top-16 md:left-80 md:w-48 w-32 transform -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0,0,0.13,1.01)] delay-300 opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 pr-0 md:pl-12 text-center md:text-right order-2 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Playback your interviews
            </h1>
            <div className="text-lg md:text-xl">
              Make informed decisions with step-by-step analysis
              <div className="flex justify-center md:justify-end mt-5">
                <a
                  className="ant-btn-lg ant-btn btn primary-link flex items-center justify-center text-white bg-black rounded-full py-2 px-4 w-44"
                  href="https://www.intervue.io/signup"
                >
                  <span>Free trial</span>
                  <i className="ml-2">
                    <svg viewBox="0 0 17 16" width="1em" fill="currentColor">
                      <path
                        d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="features-3 flex flex-col lg:flex-row items-center justify-center mt-12 pl-4">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-3xl font-semibold mb-4">
              Code Editor + Code Execution
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Power of Google docs and the simplicity of a code editor.
              Collaborate with candidates using the simplest and the fastest way
              possible over an interview. It is one of the best tools to take
              interviews.
            </p>
            <a
              className="bg-black text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center justify-center"
              href="https://www.intervue.io/signup"
            >
              Free trial
              <svg
                className="ml-2"
                viewBox="0 0 17 16"
                width="1em"
                fill="currentColor"
              >
                <path
                  d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-end order-first md:order-last">
            <img
              src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-2.png"
              alt="Code Editor"
              className="w-full lg:w-10/12"
            />
          </div>
        </div>

        <div className="features-4 flex flex-col md:flex-row mt-12">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative">
              <div className="transition-all duration-400 ease-[cubic-bezier(0,0,0.13,1.01)] opacity-100 transform-none">
                <img
                  src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-2.png"
                  alt="Main"
                  className="w-11/12 mx-auto"
                />
                <img
                  src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-3.png"
                  alt="Playback"
                  className="absolute top-12 left-1/2 lg:top-16 lg:w-72 lg:left-[22rem] lg:transform-none md:top-16 md:left-80 md:w-48 w-32 transform -translate-x-1/2 transition-all duration-500 ease-[cubic-bezier(0,0,0.13,1.01)] delay-300 opacity-100"
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center pl-0 pr-0 md:pl-12 text-center md:text-right order-2 mt-4 md:mt-0">
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">
              Customized question bank
            </h1>
            <div className="text-lg md:text-xl">
              Ask better questions without leaving the interview session. Add
              your own questions that align with your interview process. Keep
              them confidential and secure with our data security policy.
              <div className="flex justify-center md:justify-end mt-5">
                <a
                  className="ant-btn-lg ant-btn btn primary-link flex items-center justify-center text-white bg-black rounded-full py-2 px-4 w-44"
                  href="https://www.intervue.io/signup"
                >
                  <span>Free trial</span>
                  <i className="ml-2">
                    <svg viewBox="0 0 17 16" width="1em" fill="currentColor">
                      <path
                        d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                        fill="currentColor"
                        fillRule="nonzero"
                      />
                    </svg>
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="features-5 flex flex-col lg:flex-row items-center justify-center mt-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
              Integrated Audio/Video Calling
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Connect via a Reliable audio/video with the other person on the
              same URL without downloading any additional software. Audio/video
              call adapts well to fluctuating internet to make sure remote
              interviews are done seamlessly.
            </p>
            <a
              className="bg-black text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center justify-center"
              href="https://www.intervue.io/signup"
            >
              Free trial
              <svg
                className="ml-2"
                viewBox="0 0 17 16"
                width="1em"
                fill="currentColor"
              >
                <path
                  d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-8/12 mt-8 lg:mt-0 flex justify-center md:justify-end">
            <div className="flex relative justify-center md:justify-end">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-1.png"
                alt="Main"
                className="w-full lg:w-10/12 rounded-sm"
              />
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-7.png"
                alt="Overlay"
                className="absolute -bottom-4 right-96 w-32 lg:w-48 transition-all duration-500 ease-[cubic-bezier(0,0,0.13,1.01)] delay-300 opacity-100 transform-none"
              />
            </div>
          </div>
        </div>

        <div className="features=6 flex flex-col lg:flex-row items-center justify-center mt-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-1.png"
                alt="Main"
                className="w-full lg:w-10/12"
              />
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/multiple-languages.png"
                alt="Overlay"
                className="absolute -bottom-4 right-48 w-32 lg:w-80 rounded-lg transition-all duration-500 ease-[cubic-bezier(0,0,0.13,1.01)] delay-300 opacity-100 transform-none"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-right px-6 lg:px-0">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
              Support for multiple languages
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Support for 35+ languages that can be customized as per
              requirements.
            </p>
            <a
              className="bg-black text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center justify-center"
              href="https://www.intervue.io/signup"
            >
              Free trial
              <svg
                className="ml-2"
                viewBox="0 0 17 16"
                width="1em"
                fill="currentColor"
              >
                <path
                  d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="features-7 flex flex-col lg:flex-row items-center justify-center mt-12">
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 text-left px-6 lg:px-0">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4">
              Collaborative Interviewer Notes
            </h1>
            <p className="text-lg lg:text-xl mb-8">
              Get centralized notes that shows the candidate journey from a take
              home assignment to interviews helping you make unbiased decisions.
            </p>
            <a
              className="bg-black text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center justify-center"
              href="https://www.intervue.io/signup"
            >
              Free trial
              <svg
                className="ml-2"
                viewBox="0 0 17 16"
                width="1em"
                fill="currentColor"
              >
                <path
                  d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
          <div className="flex-1 md:w-1/2 p-4">
            <div className="relative">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-1.png"
                className="w-full mb-4 rounded-lg shadow-lg"
                alt="Main"
              />
              <div className="absolute top-0 right-0 w-full h-full flex items-center justify-center">
                <img
                  src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-5.png"
                  className="w-3/4 rounded-lg shadow-lg"
                  alt="Secondary"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="features-8 flex flex-col lg:flex-row items-center justify-center mt-12 p-4">
          <div className="lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="relative">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-2.png"
                className="w-full mb-4 rounded-lg shadow-lg"
                alt="Main"
              />
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/remote-panel-interview2.png"
                className="absolute w-1/2 shadow-lg -bottom-6 lg:left-1/2 transform lg:-translate-x-1/4"
                alt="Secondary"
              />
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/how-it-works/invite-someone-7.png"
                className="absolute w-1/3 shadow-lg bottom-2 right-1/4 lg:right-1/2 lg:bottom-4 lg:w-1/3 transform lg:translate-x-1/4"
                alt="Tertiary"
              />
            </div>
          </div>
          <div className="lg:w-1/2 p-4 text-center lg:text-right">
            <h1 className="text-2xl lg:text-3xl font-semibold mb-4">
              Remote Panel Interviews
            </h1>
            <p className="text-base lg:text-lg mb-6">
              Conduct remote panel interviews & collaborate on interview notes.
              Use markdown support to format your notes to make them more
              readable.
            </p>
            <a
              className="bg-black text-white font-medium text-lg px-8 py-3 rounded-full inline-flex items-center justify-center"
              href="https://www.intervue.io/signup"
            >
              Free trial
              <svg
                className="ml-2"
                viewBox="0 0 17 16"
                width="1em"
                fill="currentColor"
              >
                <path
                  d="M13.586 7L8.293 1.707A1 1 0 019.707.293l7 7a1 1 0 010 1.414l-7 7a1 1 0 11-1.414-1.414L13.586 9H1a1 1 0 110-2h12.586z"
                  fill="currentColor"
                  fillRule="nonzero"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Features;
