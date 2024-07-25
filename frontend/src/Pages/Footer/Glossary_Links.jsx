import { useParams } from "react-router-dom";
import Glossary_Section from "./Glossary_Section.jsx";
import { glossaryData } from "../../data/data.js";
import Panel_Interview from "./Panel_Interview.jsx";

const componentMap = {
  "pre-hire-assessment": "",
  "panel-interviews": Panel_Interview,
  "talent-evaluation": "",
  "interview-as-a-service": "",
  "programming-pair-interview": "",
  "resume-screening": "",
  "skill-assessment-platforms": "",
  "appointment-letter": "",
  "key-result-areas": "",
  "cost-to-company-": "",
  "conformity-bias": "",
  "psychometric-tests": "",
  "employee-evaluation-software": "",
  "audio-proctoring": "",
  delayering: "",
  "diversity-candidates": "",
  "ex-gratia-payment": "",
  "e-recruitment": "",
  "employee-lifecycle": "",
  downshifting: "",
};

const Glossary_Links = () => {
  const { data } = useParams();
  const linkData = glossaryData.filter(
    (item) =>
      item.title
        .toLowerCase()
        .split(" ")
        .join("-")
        .replace(/\(.+?\)/g, "") === data
  );

  // to be changed to componentMap[data]
  const SelectedComponent = componentMap["panel-interviews"];

  return (
    <section>
      <div className="mx-auto px-3 w-full min-[1380px]:max-w-[1380px]">
        <div className="flex flex-col items-center md:items-stretch md:flex-row">
          <div className="flex-1 p-0 w-full md:py-4 md:pr-4 md:pl-0">
            <div className="flex items-center gap-2 mb-0 md:mb-[0.8rem]">
              <a href="/glossary" className="hover:text-[#1d68bd]">
                Glossary
              </a>
              <svg
                className="text-black w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                ></path>
              </svg>
              <p className="hover:text-[#1d68bd]">{linkData[0]?.title}</p>
            </div>

            <h1 className="mt-[1.22rem] mb-[0.47rem] text-[1.5rem] font-semibold flex">
              {linkData[0]?.title}
            </h1>

            <p className="max-w-full h-full flex-shrink-0 text-sm leading-6 font-normal md:mt-[0.47rem] md:w-full text-[#6c6c6c] md:text-base md:leading-7">
              {linkData[0]?.desc}
            </p>
          </div>

          <div className="w-full flex-shrink-0 md:p-0 md:flex-1 flex justify-end">
            <video
              className="max-w-full h-auto w-[34.938rem] mt-4"
              controls
              muted
            >
              <source src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* render components based on glossary links */}
      {SelectedComponent && <SelectedComponent />}

      <Glossary_Section />
    </section>
  );
};
export default Glossary_Links;
