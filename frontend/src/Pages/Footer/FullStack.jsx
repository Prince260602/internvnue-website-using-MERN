/* eslint-disable react/no-unescaped-entities */
import "../../css/footer/fullstack.css";

function FullStack() {
  return (
    <>
      <div>
        <div className=" bg-white mt-24 m-0 p-0  w-full  h-screen  flex flex-wrap justify-between  md:flex-nowrap  ">
          <div className=" w-full px-10 py-10 flex flex-col justify-center  md:w-2/4">
            <h1 className="text-3xl mb-3 tracking-wider">
              Real-world scenarios for your best hires
            </h1>
            <p className="font-extralight mb-3">
              Assess full-stack development skills with full access to
              full-stack environments
            </p>
            <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
              Get Started {"->"}
            </button>
          </div>
          <div className="image w-full py-10 md:w-2/4 "></div>
        </div>

        <div>
          <div className=" bg-slate-100 mt-24 m-0 p-0 w-full h-screen flex flex-wrap justify-between  md:flex-nowrap ">
            <div className="image2  py-10 w-full md:w-2/4"></div>

            <div className=" w-full px-10 py-10 flex flex-col justify-center  md:w-2/4">
              <h1 className="text-3xl mb-3 tracking-wider">
                Library of project-based questions on full-stack
              </h1>
              <p className="font-extralight mb-3">
                Access 500+ project-based questions and test the candidate's
                hands-on skills on real-world projects before making a hiring
                decision
              </p>
              <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
                Get Started {"->"}{" "}
              </button>
              <button className="learn">Learn more {"->"}</button>
            </div>
          </div>
        </div>

        <div className=" bg-white mt-24 m-0 p-0  w-full  h-screen  flex flex-wrap justify-between  md:flex-nowrap  ">
          <div className=" w-full px-10 py-10 flex flex-col justify-center  md:w-2/4">
            <h1 className="text-3xl mb-3 tracking-wider">
              Configure your project as per need
            </h1>
            <p className="font-extralight mb-3">
              Configure your project to take the candidate’s camera snapshot,
              define an end time to the project, preview a project before
              sending it to the candidates
            </p>
            <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
              Get Started {"->"}{" "}
            </button>
          </div>
          <div className="image3  py-10 w-full md:w-2/4"></div>
        </div>
        <div>
          <div className=" bg-slate-100 mt-24 m-0 p-0  w-full  h-screen  flex flex-wrap justify-between  md:flex-nowrap  ">
            <div className="image4 py-10 w-full md:w-2/4"></div>

            <div className="  w-full px-10 py-10 flex flex-col justify-center  md:w-2/4">
              <h1 className="text-3xl mb-3 tracking-wider">
                GitHub Integration
              </h1>
              <p className="font-extralight mb-3">
                Avoid zip files and public repo links in submissions with our
                exclusive GitHub integration
              </p>
              <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
                Get Started {"->"}{" "}
              </button>
              <button className="learn">Learn more {"->"}</button>
            </div>
          </div>
        </div>
        <div className=" bg-white mt-24 m-0 p-0  w-full  h-screen  flex flex-wrap justify-between  md:flex-nowrap  ">
          <div className="  w-full px-10 py-10 flex flex-col justify-center  md:w-2/4">
            <h1 className="text-3xl mb-3 tracking-wider">Custom forms</h1>
            <p className="font-extralight mb-3">
              Gather basic info about the candidate before starting the test
              with our custom forms
            </p>
            <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
              Get Started {"->"}{" "}
            </button>
          </div>
          <div className="image5  py-10 w-full md:w-2/4"></div>
        </div>

        <div>
          <div className=" bg-slate-100 mt-24 m-0 p-0  w-full  h-screen  flex flex-wrap justify-between  md:flex-nowrap  ">
            <div className="image6  py-10 w-full md:w-2/4"></div>

            <div className=" w-full px-10 py-10 flex flex-col justify-center md:w-2/4">
              <h1 className="text-3xl mb-3 tracking-wider">
                Informative project submission reports
              </h1>
              <p className="font-extralight mb-3">
                Preview candidate’s reports, info, and other rounds all in one
                go. Get a detailed analysis of the candidate’s code with our
                coding insights functionality
              </p>
              <button className="bg-black pt-2 pr-5 pb-2 pl-5 text-white rounded-full cursor-pointer">
                Get Started {"->"}{" "}
              </button>
              <button className="learn">Learn more {"->"}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullStack;
