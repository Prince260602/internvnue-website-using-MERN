import arrow from "../../assets/arrow.svg";
import { useRef } from "react";

const Customer_Stories = () => {
  const vidRef = useRef(null);

  const handlePlay = () => {
    const elem = vidRef.current;
    if (elem) {
      //checking if ref was initiated
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      }
    }
  };

  return (
    <section className="md:py-28 relative text-[16px]">
      <div className="pr-6 w-full mx-auto">
        <div className="flex  items-center justify-center flex-wrap">
          <div className="lg:w-7/12 w-full xl:flex justify-center max-w-full pr-3">
            <div
              onClick={handlePlay}
              className="cursor-pointer h-[18.75rem] xl:w-4/5 rounded-r-[12.5rem] block  overflow-hidden relative bg-black after:content-['▷'] after:absolute after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2 after:text-[4.43rem] after:text-[#1d68bd] after:hover:text-[#1dbabd]"
            >
              <video
                ref={vidRef}
                muted
                autoPlay
                loop
                preload="true"
                src="https://d26rchw36216zf.cloudfront.net/public/assets/homepage_temp_assets/b970b78d-517b-4a9e-be2f-fad79e018e5a.mp4"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="lg:w-5/12 max-w-full pl-3 md:pl-6 xl:pl-8 mt-5 lg:mt-0">
            <p className="text-[1.1rem] font-light lg:pr-12">
              After interviewing candidates on Intervue, we were able to convert
              at least 5% of people from our application base to hires.
            </p>
            <h4 className="font-semibold mt-6">Niket Gupta</h4>
            <p className="font-normal mb-6">
              Group head of talent acquisition, Yubi
            </p>
            <a
              href="#"
              className="w-fit flex items-center text-[#1d68bd] text-lg font-semibold relative group cursor-pointer overflow-hidden pb-[0.125rem]"
            >
              <p className="text-[0.875rem] font-semibold text-inherit mr-1">
                See more customer stories
              </p>
              <img
                className="align-middle mt-1 ml-[0.4rem] w-[0.825rem]"
                src={arrow}
              />
              <div className="absolute left-0 bottom-0 w-0 h-[.125rem] bg-current rounded-md transition-all duration-300 transform group-hover:w-full"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Customer_Stories;
