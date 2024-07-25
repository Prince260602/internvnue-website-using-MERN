// eslint-disable-next-line react-refresh/only-export-components
const Profile_Page = () => {
  return (
    <div className=" ">
      <div className="my-20 ">
        <div className="flex flex-col gap-8">
          <div className="mx-5 xl:mx-28 max-sm:mx-10 lg:mx-10 md:mx-28">
            <div className="text-start  text-2xl my-4 ">
              <strong>All profiles</strong>
            </div>
            <div className=" flex flex-row ">
              {/* <svg className='ml-5 mt-5' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_5667_14900)"><path d="M6.70203 11.705C9.48873 11.705 11.7478 9.44594 11.7478 6.65924C11.7478 3.87253 9.48873 1.61346 6.70203 1.61346C3.91532 1.61346 1.65625 3.87253 1.65625 6.65924C1.65625 9.44594 3.91532 11.705 6.70203 11.705Z" stroke="black" stroke-opacity="0.3"strokeWidth="1.23031"></path><path d="M10.6016 10.5523L14.4958 14.4465L10.6016 10.5523Z" fill="black" fill-opacity="0.3"></path><path d="M10.6016 10.5523L14.4958 14.4465" stroke="black" stroke-opacity="0.3"strokeWidth="1.23031"></path></g><defs><clipPath id="clip0_5667_14900"><rect width="14.7637" height="14.7637" fill="white" transform="translate(0.867188 0.818493)"></rect></clipPath></defs></svg> */}
              <input
                className="bg-gray-100 max-sm:w-[272px] lg:w-[480px] h-[51px]   rounded-full pl-7"
                type="text"
                placeholder="Search profile"
              ></input>
            </div>
          </div>
          <div className="mx-5 xl:mx-28 max-sm:mx-10 lg:mx-10 md:mx-28">
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-row gap-3 border border-gray-200 rounded-md  lg:pr-10  p-3 pr-20 md:pr-64 xl:pr-32 xl:pb-5 ">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/frontend.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Frontend</strong>
                  </p>
                  <p className=" text-gray-400">Frontend</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md lg:pr-10 md:pr-64 p-3 pr-20 xl:pr-32  xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="	https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/backend.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Backend</strong>
                  </p>
                  <p className=" text-gray-400">Backend</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md lg:pr-10 md:pr-64 p-3 pr-20 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="	https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/fullstack.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Full Stack</strong>
                  </p>
                  <p className=" text-gray-400">Full Stack</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md  p-3 md:pr-64  pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/android.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Android</strong>
                  </p>
                  <p className=" text-gray-400">Android</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md  p-3 md:pr-64 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/data-science.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Data Science</strong>
                  </p>
                  <p className=" text-gray-400">Data Science</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/sdet.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Automation QA</strong>
                  </p>
                  <p className=" text-gray-400">Automation QA</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64  p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/ml-ai.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>ML/AI</strong>
                  </p>
                  <p className=" text-gray-400">ML/AI</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/flutter.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Flutter</strong>
                  </p>
                  <p className=" text-gray-400">Flutter</p>
                  <div className="flex flex-row mt-2 ">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1  "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/react.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>React Native</strong>
                  </p>
                  <p className=" text-gray-400">React Native</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/adobe-aem.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>AEM</strong>
                  </p>
                  <p className=" text-gray-400">AEM</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/architect.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Architect</strong>
                  </p>
                  <p className=" text-gray-400">Architect</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/automation.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Automation engineering</strong>
                  </p>
                  <p className=" text-gray-400">Automation engineering</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/business-analyst.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Business Analyst</strong>
                  </p>
                  <p className=" text-gray-400">Business Analyst</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/business-intelligence.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Business Intelligence</strong>
                  </p>
                  <p className=" text-gray-400">Business Intelligence</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/data-engineering.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Data Engineering</strong>
                  </p>
                  <p className=" text-gray-400">Data Engineering</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/database.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Database administrator</strong>
                  </p>
                  <p className=" text-gray-400">Database administrator</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/drupal.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Drupal developer</strong>
                  </p>
                  <p className=" text-gray-400">Drupal developer</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/microsoft-business-app.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Microsoft Business Apps</strong>
                  </p>
                  <p className=" text-gray-400">Microsoft Business Apps</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/plc.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>PLC Engineer</strong>
                  </p>
                  <p className=" text-gray-400">PLC Engineer</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/product.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Product Manager</strong>
                  </p>
                  <p className=" text-gray-400">Product Manager</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/project-manager.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Project Manager</strong>
                  </p>
                  <p className=" text-gray-400">Project Manager</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/sap.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>SAP</strong>
                  </p>
                  <p className=" text-gray-400">SAP</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/salesforce.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Salesforce developer</strong>
                  </p>
                  <p className=" text-gray-400">Salesforce developer</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/scrum.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Scrum Master</strong>
                  </p>
                  <p className=" text-gray-400">Scrum Master</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/service-now.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>ServiceNow Developer</strong>
                  </p>
                  <p className=" text-gray-400">ServiceNow Developer</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/sharepoint.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>SharePoint</strong>
                  </p>
                  <p className=" text-gray-400">SharePoint</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/site-reliability.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Site reliability engineer</strong>
                  </p>
                  <p className=" text-gray-400">Site reliability engineer</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/software-development.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Software development</strong>
                  </p>
                  <p className=" text-gray-400">Software development</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/ios.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>iOS</strong>
                  </p>
                  <p className=" text-gray-400">iOS</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-3 border border-gray-200 rounded-md md:pr-64 p-3 pr-20 lg:pr-10 xl:pr-32 xl:pb-5">
                <div className="w-14 h-12 bg-gray-200">
                  <img
                    className=" mx-auto my-auto w-11 h-11"
                    src="https://dersyb7nfifdf.cloudfront.net/dev/32/homepage-icons/cyber-security.svg"
                  />
                </div>
                <div className="flex flex-col">
                  <p className="">
                    <strong>Cyber Security</strong>
                  </p>
                  <p className=" text-gray-400">Cyber Security</p>
                  <div className="flex flex-row mt-2">
                    <div className=" text-blue-600">
                      <strong>Request an interview</strong>
                    </div>
                    <svg
                      className="my-2 ml-1 "
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                        stroke="#1D68BD"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-pink-50">
            <div className="fle flex-col gap-4 my-20  xl:mx-28 max-sm:mx-3 lg:mx-10 md:mx-28">
              <div className="flex flex-col gap-5">
                <div className="text-4xl font-semibold ">
                  Security is our top priority
                </div>
                <div className="text-xl max-w-[500px]">
                  Intervue serves startups to fortune 500 companies with
                  enterprise grade security baked in by design
                </div>
              </div>
              <div className="xl:flex xl:flex-row lg:flex lg:flex-row gap-5">
                <div className="xl:w-[266px] xl:h-[220px] p-4 border max-sm:my-4 md:my-4 shadow-md bg-white">
                  <div>
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 500 500"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M56.629 379.2C42.539 393.271 42.539 416.175 56.629 430.255C70.709 444.342 93.61 444.342 107.594 430.255L117.771 420.175L160.209 462.603C167.466 469.871 179.097 469.871 186.364 462.603L249.608 399.359C256.876 392.104 256.876 380.469 249.608 373.202L207.179 330.775L282.765 255.093C298.939 263.45 317.375 268.168 336.824 268.168C402.058 268.168 454.935 215.299 454.935 150.059C454.935 84.8272 402.058 31.9482 336.824 31.9482C271.586 31.9482 218.714 84.8272 218.714 150.059C218.714 169.508 223.435 187.945 231.791 204.119L56.629 379.2ZM291.396 150.059C291.396 124.984 311.75 104.63 336.823 104.63C361.899 104.63 382.249 124.984 382.249 150.059C382.249 175.134 361.899 195.485 336.823 195.485C311.751 195.485 291.396 175.133 291.396 150.059Z"
                        fill="#010101"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-semibold mb-2">Security</div>
                  <div>
                    Protecting your data at every layer is fundamental to how
                    Intervue works
                  </div>
                  <span>
                    <i className="">
                      <svg
                        className="mt-8 ml-52 max-sm:ml-60"
                        width="1.3333em"
                        height="1em"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                  </span>
                </div>

                <div className="xl:w-[266px] xl:h-[220px] mt-5 border max-sm:mb-4 md:mb-4 shadow-md p-4 bg-white">
                  <div>
                    <svg
                      className="w-10 h-10"
                      viewBox="0 0 300 300"
                      fill="none"
                    >
                      <path
                        d="M252.91 193.999C253.967 195.833 254.254 198.01 253.708 200.055C253.163 202.1 251.829 203.845 250 204.909L154 260.909C152.777 261.623 151.386 261.998 149.97 261.998C148.554 261.998 147.163 261.623 145.94 260.909L49.94 204.909C48.1369 203.826 46.8332 202.076 46.311 200.038C45.7888 198 46.0902 195.839 47.15 194.022C48.2098 192.205 49.9426 190.878 51.9733 190.329C54.004 189.78 56.1692 190.053 58 191.089L150 244.739L242 191.089C243.834 190.033 246.011 189.746 248.056 190.291C250.101 190.836 251.846 192.17 252.91 193.999ZM242 143.089L150 196.739L58 143.089C56.1784 142.182 54.0797 142.004 52.1311 142.589C50.1824 143.175 48.5302 144.482 47.5107 146.243C46.4913 148.004 46.1813 150.087 46.6437 152.069C47.1062 154.05 48.3064 155.781 50 156.909L146 212.909C147.223 213.623 148.614 213.998 150.03 213.998C151.446 213.998 152.837 213.623 154.06 212.909L250.06 156.909C250.982 156.388 251.791 155.688 252.441 154.851C253.09 154.014 253.567 153.056 253.843 152.034C254.12 151.011 254.19 149.944 254.051 148.893C253.912 147.843 253.565 146.831 253.031 145.916C252.497 145.001 251.787 144.201 250.942 143.562C250.097 142.924 249.133 142.46 248.106 142.197C247.08 141.934 246.012 141.877 244.964 142.03C243.915 142.184 242.908 142.544 242 143.089ZM46 101.999C46.0032 100.598 46.3744 99.2222 47.0763 98.0095C47.7783 96.7968 48.7865 95.7898 50 95.0892L146 39.0892C147.223 38.3759 148.614 38 150.03 38C151.446 38 152.837 38.3759 154.06 39.0892L250.06 95.0892C251.268 95.7938 252.27 96.8025 252.966 98.0149C253.662 99.2273 254.029 100.601 254.029 101.999C254.029 103.397 253.662 104.771 252.966 105.983C252.27 107.196 251.268 108.205 250.06 108.909L154.06 164.909C152.837 165.623 151.446 165.998 150.03 165.998C148.614 165.998 147.223 165.623 146 164.909L50 108.909C48.7865 108.209 47.7783 107.202 47.0763 105.989C46.3744 104.776 46.0032 103.4 46 101.999ZM69.88 101.999L150 148.739L230.12 101.999L150 55.2592L69.88 101.999Z"
                        fill="#000"
                      ></path>
                      <path
                        d="M147.768 150L62 100.31L147.768 49L233 100.31L147.768 150Z"
                        fill="#000"
                        stroke="#000"
                      ></path>
                    </svg>
                  </div>
                  <div className="font-semibold mb-2">Compliances</div>
                  <div>
                    Enterprise grade compliance commitments where we have
                    established controls to adhere to those commitments
                  </div>
                  <span>
                    <i>
                      <svg
                        className="mt-2 ml-52 max-sm:ml-60"
                        width="1.3333em"
                        height="1em"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                  </span>
                </div>

                <div className="xl:w-[266px] xl:h-[220px] mt-5 flex flex-col gap-3  ">
                  <div className="h-[50%] bg-white p-4 border shadow-md ">
                    <div>
                      <svg
                        className="w-10 h-10"
                        viewBox="0 0 256 256"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M219.976 47.3392C219.964 46.7922 219.944 46.2452 219.923 45.6962C219.901 45.0836 219.882 44.4731 219.85 43.8586C219.786 42.6253 219.706 41.3859 219.602 40.1423C219.437 38.149 217.856 36.5675 215.867 36.3995C214.626 36.295 213.393 36.2172 212.164 36.1516C211.541 36.1188 210.923 36.1004 210.306 36.0778C209.77 36.0594 209.233 36.0369 208.699 36.0266C207.806 36.0061 206.918 36 206.033 36C205.886 36 205.737 36 205.589 36.002C187.95 36.0881 171.758 40.4271 155.41 49.3714C155.122 49.5312 154.833 49.6808 154.545 49.8385C154.443 49.8959 154.343 49.945 154.241 50.0024C154.218 50.0147 154.2 50.0352 154.177 50.0475C140.774 57.5332 127.393 68.098 113.543 81.9754C111.969 83.5529 110.43 85.1508 108.907 86.7569L81.9932 88.8076C81.2061 88.867 80.4537 89.1538 79.8261 89.6312L37.614 121.821C36.2708 122.846 35.6922 124.591 36.1604 126.216C36.6265 127.84 38.0413 129.01 39.7218 129.164L79.3293 132.747L91.87 145.313C87.4254 146.331 82.8969 148.826 79.0185 152.711C76.696 155.04 74.8314 157.65 73.4657 160.502C71.6809 164.289 67.7617 174.043 63.6114 184.37L61.5853 189.408C60.972 190.932 61.3257 192.675 62.487 193.837C63.2679 194.622 64.3147 195.037 65.3799 195.037C65.893 195.037 66.4123 194.939 66.9091 194.738L72.1164 192.634C82.3387 188.508 91.9947 184.61 95.7831 182.821C98.6045 181.461 101.211 179.593 103.532 177.268C107.408 173.383 109.896 168.846 110.912 164.392L123.081 176.585L126.657 216.271C126.808 217.955 127.977 219.373 129.599 219.84C129.973 219.949 130.353 220 130.729 220C131.985 220 133.197 219.42 133.984 218.384L166.105 176.088C166.581 175.459 166.867 174.705 166.926 173.916L168.912 147.745C170.664 146.083 172.4 144.395 174.119 142.674C187.978 128.787 198.528 115.372 206 101.933C206.009 101.919 206.021 101.907 206.029 101.892C206.066 101.827 206.096 101.763 206.133 101.698C206.475 101.081 206.8 100.464 207.127 99.8456C215.728 83.77 219.907 67.8153 219.997 50.4756C219.999 50.3056 219.999 50.1376 219.999 49.9676C220.003 49.0969 219.997 48.2201 219.976 47.3392ZM167.699 112.615C164.475 115.845 160.186 117.628 155.623 117.628C151.061 117.628 146.772 115.848 143.546 112.615C136.887 105.94 136.887 95.0846 143.546 88.4102C150.209 81.7378 161.045 81.7419 167.699 88.4102C170.925 91.6409 172.704 95.9389 172.704 100.511C172.704 105.084 170.928 109.382 167.699 112.615Z"
                          fill="black"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-row space-x-16 max-sm:space-x-24 ">
                      <div>Intervue for Startups</div>
                      <span>
                        <i>
                          <svg
                            className=""
                            width="1.3333em"
                            height="1em"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                  </div>

                  <div className="h-[50%] bg-white  p-4 border shadow-md">
                    <div>
                      <svg
                        className="w-10 h-10"
                        viewBox="0 0 420 420"
                        fill="none"
                      >
                        <path
                          d="M209.231 60C169.515 60.2037 131.502 76.1497 103.527 104.341C75.5517 132.532 59.8987 170.668 60.0005 210.384C60.1023 250.1 75.9507 288.154 104.07 316.202C132.189 344.249 170.284 360 210 360C249.716 360 287.811 344.249 315.93 316.202C344.049 288.154 359.898 250.1 360 210.384C360.101 170.668 344.448 132.532 316.473 104.341C288.498 76.1497 250.485 60.2037 210.769 60H209.231Z"
                          stroke="black"
                          strokeWidth="26"
                        ></path>
                        <path
                          d="M210 60V360M360 210H60M93.8462 117.692C127.748 141.879 168.355 154.879 210 154.879C251.645 154.879 292.252 141.879 326.154 117.692M326.154 302.308C292.252 278.121 251.645 265.121 210 265.121C168.355 265.121 127.748 278.121 93.8462 302.308M198.462 63.8462C177.086 81.8984 159.907 104.397 148.123 129.773C136.339 155.149 130.234 182.791 130.234 210.769C130.234 238.748 136.339 266.389 148.123 291.765C159.907 317.141 177.086 339.64 198.462 357.692M221.538 357.692C242.914 339.64 260.093 317.141 271.877 291.765C283.661 266.389 289.766 238.748 289.766 210.769C289.766 182.791 283.661 155.149 271.877 129.773C260.093 104.397 242.914 81.8984 221.538 63.8462"
                          stroke="black"
                          strokeWidth="18"
                        ></path>
                      </svg>
                    </div>
                    <div className="flex flex-row space-x-16 max-sm:space-x-24">
                      <div>Intervue for Startups</div>
                      <span className="">
                        <i>
                          <svg
                            width="1.3333em"
                            height="1em"
                            viewBox="0 0 16 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </i>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="lg:flex lg:flex-row xl:flex xl:flex-row sm:flex sm:flex-col md:flex md:flex-col  xl:mx-24  max-sm:mr-4 lg:mx-10 md:mr-5">
              <div className="">
                <video
                  className="rounded-e-full vjs-tech"
                  id=""
                  muted="muted"
                  autoPlay=""
                  tabIndex="-1"
                  preload="true"
                  loop=""
                  src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4"
                >
                  <source src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4" />
                </video>
              </div>
              <div className="xl:my-auto lg:my-auto m-5  xl:mx-24 lg:mx-24 flex flex-col gap-5">
                <div className="text-xl">
                  After interviewing candidates on Intervue, we were able to
                  convert at least 5% of people from our application base to
                  hires.
                </div>
                <div>
                  <div className="text-xl font-semibold">Niket Gupta</div>
                  <div className="text-xl">
                    Group head of talent acquisition, Yubi
                  </div>
                </div>
                <div className="flex flex-row text-lg text-blue-500 font-semibold">
                  See more customer stories
                  <span>
                    <i className="">
                      <svg
                        className="mt-2 p-1"
                        width="1.3333em"
                        height="1em"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </i>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-20 xl:mx-auto lg:mx-auto max-sm:mx-5 md:mx-8 ">
            <div className="text-4xl text-center">
              Explore more products on intervue
            </div>
            <div className="flex flex-wrap  gap-5 ">
              <div className="border rounded-md shadow-md w-[300px] px-4 pt-4 h-[395px]">
                <img
                  className="w-[276px] h-[176px]"
                  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c6135016fce3dec26c8c4b_technical-interviews.png"
                  alt="On-demand"
                />
                <div className="flex flex-col gap-3">
                  <div className="font-semibold text-lg">On-demand</div>
                  <div className="text-gray-500 font-semibold">
                    Save 90% of engineering & recruitment bandwidth, outsource
                    candidate interviews to us
                  </div>
                  <div className="flex flex-row mt-10 text-blue-600 text-base font-semibold">
                    <div>Know more</div>
                    <span>
                      <i className="">
                        <svg
                          className="mt-2 p-1"
                          width="1.3333em"
                          height="1em"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border rounded-md shadow-md w-[300px] px-4 pt-4 h-[395px]">
                <img
                  className="w-[276px] h-[176px]"
                  src="	https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c61350bf2156a87d68512b_programming.png"
                  alt="On-demand"
                />
                <div className="flex flex-col gap-3">
                  <div className="font-semibold text-lg">Live interviews</div>
                  <div className="text-gray-500 font-semibold">
                    Assess candidates in real-time with our live coding
                    environment & integrated video calls
                  </div>
                  <div className="flex flex-row mt-10 text-blue-600 text-base font-semibold">
                    <div>Know more</div>
                    <span>
                      <i className="">
                        <svg
                          className="mt-2 p-1"
                          width="1.3333em"
                          height="1em"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </i>
                    </span>
                  </div>
                </div>
              </div>

              <div className="border rounded-md shadow-md w-[300px] p-4 pt-4 h-[395px]">
                <img
                  className="w-[276px] h-[176px]"
                  src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/64c616d53601adf691d597e4_detailed-report.png"
                  alt="Assessments"
                />
                <div className="flex flex-col gap-3">
                  <div className="font-semibold text-lg">Assessments</div>
                  <div className="text-gray-500 font-semibold">
                    Share assessments across batches with MCQ, Programming and
                    Subjective questions.
                  </div>
                  <div className="flex flex-row mt-10 text-blue-600 text-base font-semibold">
                    <div>Know more</div>
                    <span>
                      <i className="">
                        <svg
                          className="mt-2 p-1"
                          width="1.3333em"
                          height="1em"
                          viewBox="0 0 16 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 6H14.5M14.5 6L9.5 1M14.5 6L9.5 11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile_Page;
