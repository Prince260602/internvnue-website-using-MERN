/* eslint-disable react/no-unescaped-entities */
function Integration() {
  return (
    <>
      <div className="container flex flex-col justify-center items-center py-6 ">
        <div className="wrapper w-[80%] p-4 flex flex-col gap-4 ">
          <div className="headings">
            <h1 className="text-xl md:text-3xl font-semibold">
              {" "}
              All the integrations you need{" "}
            </h1>
            <p className="text-base md:text-xl font-normal text-gray-400">
              Easily integrate Intervue into your existing workflow and
              infrastructure.
            </p>
          </div>
          <div className="search-box px-4 py-2 md:w-80 flex items-center gap-2 bg-gray-100 rounded-3xl">
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search"
              className="text-black outline-none bg-transparent text-base py-2 font-normal"
            />
          </div>
          <div className="boxes-cont flex flex-col  gap-4">
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/clients/recruitee.jpeg"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Recruitee </h1>
                <p className="text-base font-normal text-gray-400">
                  Send home assignment using recruitee interface. Get candidates
                  list while scheduling pad
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/google-calendar.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Recruitee </h1>
                <p className="text-base font-normal text-gray-400">
                  Schedule interviews directly on google calendar. Send google
                  calendar invite to candidates
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/clients/notion.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Notion </h1>
                <p className="text-base font-normal text-gray-400">
                  Find all your interview data in your Notion Workspace and
                  access those with ease
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/Lever.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Lever </h1>
                <p className="text-base font-normal text-gray-400">
                  Schedule your external interviews directly from Lever
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/greenhouse.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Greenhouse </h1>
                <p className="text-base font-normal text-gray-400">
                  Schedule your external interviews directly from Greenhouse
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/zohoRecruit.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Zoho Recruit </h1>
                <p className="text-base font-normal text-gray-400">
                  Schedule your external interviews directly from Zoho Recruit
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="	https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/calendly.jpg"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> calendly </h1>
                <p className="text-base font-normal text-gray-400">
                  Get your entire panel availability seemlessly with a single
                  click
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/teams.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Microsoft Team's </h1>
                <p className="text-base font-normal text-gray-400">
                  Get reminders and send interview notes automatically on
                  microsoft teams
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/outlook_logo.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium">Outlook </h1>
                <p className="text-base font-normal text-gray-400">
                  Schedule interviews directly on outlook calendar. Send outlook
                  calendar invite to candidates
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/vscode1.svg"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> VS Code </h1>
                <p className="text-base font-normal text-gray-400">
                  Get your meeting schedule in your Visual Studio Code explore
                </p>
              </div>
            </div>
            <div className="box flex flex-col md:flex-row gap-4 px-2 py-2 items-center justify-start hover:bg-gray-100 rounded-xl">
              <img
                src="https://dersyb7nfifdf.cloudfront.net/public/assets/integrations/slack.png"
                alt=""
                className="w-[100px] h-[100px] rounded-xl object-cover"
              />
              <div className="flex flex-col justify-start items-start gap-2">
                <h1 className="text-xl font-medium"> Slack </h1>
                <p className="text-base font-normal text-gray-400">
                  Get reminders and send interview notes automatically on slack
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Integration;
