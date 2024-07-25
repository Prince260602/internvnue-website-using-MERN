/* eslint-disable react/no-unescaped-entities */
const CandidatesGuide = () => {
  return (
    <div>
      <div className="align-middle ml-0 mr-0 pl-12 pr-12">
        <h1 className="mx-0 font-sora font-size text-4xl font-normal   ">
          Candidate's guide to Intervue
        </h1>
      </div>
      <div>
        <div className="max:sm:flex max-sm:flex-col md:flex md:flex-col lg:flex lg:flex-row xl:flex xl:flex-row max-sm:m-5 md:m-5">
          <div className="lg:w-[45%]">
            <h3 className=" mt-11 text-start mb-2 text-base font-semibold">
              Contents
            </h3>
            <div className="max-sm:grid max-sm:grid-cols-2 md:grid md:grid-cols-2 lg:flex lg:flex-col ">
              <a>
                <div className="text-start mt-1 mb-1 opacity-80 text-2xl cursor-pointer">
                  Before you start
                </div>
              </a>
              <a>
                <div className="text-start mt-1 mb-1 opacity-80 text-2xl cursor-pointer">
                  Entering the Test
                </div>
              </a>
              <a>
                <div className="text-start mt-1 mb-1 opacity-80 text-2xl cursor-pointer">
                  System Permissions
                </div>
              </a>
              <a>
                <div className="text-start mt-1 mb-1 opacity-80 text-2xl cursor-pointer">
                  Taking the Test
                </div>
              </a>
            </div>
          </div>
          <div className=" mt-5    ">
            <div className="">
              <p className="mb-4 text-start text-lg">
                Hey There, <br />
                You have an upcoming assignment on Intervue and you want to make
                sure you understand how things work?
              </p>
              <p className="mb-4 text-start text-lg">
                You are in the right place.
              </p>
              <p className="mb-4 text-start text-lg">
                Here, you can find all the information you need to perform to
                the best of your abilities.
              </p>
              <p className="mb-4 text-start text-lg">
                Remember, don’t sweat it during the test. Intervue is here to
                make your life easier. You can run your code at any time, and
                use the output to get yourself unstuck.
              </p>
              <p className="mb-4 text-start text-lg">
                If you have any questions or concerns about how things work,
                feel free to ping us on the chat on the bottom right of the page
                or email us at{" "}
                <a href="mailto:support@intervue.io"> support@intervue.io </a> –
                we’re happy to help!
              </p>
              <p className="mb-4 text-start text-lg">Best of Luck</p>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-orange-50 mt-24 ">
        <div className="mx-11 pt-11 pb-11 ">
          <h3 className="align-middle text-lg font-semibold mb-8">
            Before you start
          </h3>
          <div className="mb-8 text-start text-xl">
            There are some things that you need to ensure before you start
            taking the test.
            <strong>
              Remember, once you start the assignment, you can not pause it.
            </strong>
          </div>
          <h3 className="align-middle text-start text-lg font-semibold">
            Stable internet connection
          </h3>
          <div className="mb-8 text-start text-xl">
            A stable internet connection is required to take the assignment.
            Even if you go offline, the timer will not stop, hence fixing an
            internet connection issue will use up time.
            <strong> All your work is auto saved</strong>, so can start right
            where you left.
          </div>
          <h3 className="align-middle text-start text-lg font-semibold">
            Setting up your space
          </h3>
          <div className="mb-8 text-start text-xl">
            Make sure you find a place you can sit for an extended period of
            time without any distractions. If you are using a laptop, keep the
            charger handy.
            <strong>
              Only use a laptop or a desktop to take the assignment.
            </strong>
          </div>
          <h3 className="align-middle text-start text-lg font-semibold">
            Camera attachments
          </h3>
          <div className="mb-8 text-start text-xl">
            Some tests will require you to switch on your camera.{" "}
            <strong>Make sure your webcam is working. </strong> If are using a
            desktop you will need to connect an external camera to the system.
          </div>
          <h3 className="align-middle text-start text-lg font-semibold">
            Test start and end times
          </h3>
          <div className=" text-start text-xl">
            The employer will always specify when you can take the test. Make
            sure you keep these in mind and always be on time.{" "}
            <strong>We cannot help you if you miss the deadline.</strong>In
            cases like these, the employer will have the final say.
          </div>
        </div>
      </div>

      <div className=" mt-24">
        <div className="mx-11 ">
          <h2 className="pt-6 pb-7 font-semibold">Entering the test</h2>
          <div className="text-start text-xl pb-8">
            Note: If you were invited on a Gmail, you can click on "Continue
            with Google" and skip the verification step shown in the video.
          </div>
          <div className="">
            <iframe
              className="w-[100%]  h-96 h-4/56  md:h-[240px]"
              src="https://www.youtube.com/embed/-GyXvKk4Jv4?si=AVYA4jXHj6gUxPNF"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      <div className=" mt-24 bg-orange-50 py-9 ">
        <div className="mx-11 pb-20">
          <h3 className="mb-5 text-sm font-semibold pt-6">
            System Permissions
          </h3>
          <p className="text-start text-xl mb-8">
            Once you enter the test, you will be asked to give camera access
            permissions. Depending on the organization, this step might be
            mandatory. If this step is mandatory, you wont be able to begin the
            test without allowing camera access.
          </p>
          <img
            className=""
            src="https://assets-global.website-files.com/608e9cc36cbcc089f0998643/61233fc64023bc2bbab2a3d9_Screenshot%202021-08-23%20115225-p-1600.png"
          />
        </div>
      </div>

      <div className="max-w-screen-2xl mt-24">
        <div className="mx-11 pb-20 ">
          <h3 className="pb-7 text-sm">Taking the test</h3>
          <iframe
            className="w-[100%] md:h-[400px] lg:h-[400px] xl:h-[400px] h-4/56"
            src="https://www.youtube.com/embed/1bs4RI9H1xc?si=Ut95GCDMriKJi8RI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default CandidatesGuide;
