import arrow from "../../assets/arrow.svg";
import OnDemand from "../../assets/technical-interviews.png";
import Live from "../../assets/programming.png";
import Assessment from "../../assets/detailed-report.png";

const data = [
  {
    id: 1,
    img: OnDemand,
    title: "On-Demand",
    desc: "Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us",
  },
  {
    id: 2,
    img: Live,
    title: "Live interviews",
    desc: "Assess candidates in real-time with our live coding environment & integrated video calls",
  },
  {
    id: 3,
    img: Assessment,
    title: "Assessments",
    desc: "Share assessments across batches with MCQ, Programming and Subjective questions.",
  },
];

const Section_Explore_More = () => {
  return (
    <section>
      <div className="py-[90px] md:py-28 px-3 lg:px-0">
        <div className="min-[1200px]:max-w-[1200px] w-full mx-auto px-3">
          <h3 className="text-center text-3xl md:text-[2rem]">
            Explore more products on intervue
          </h3>
          <div className="flex flex-wrap justify-center mt-9 gap-6 max-w-[1140px] mx-auto">
            {data.map((item) => (
              <a
                key={item.id}
                href="#"
                className="p-3 rounded-[5px] text-sm block max-w-[300px] shadow-[0_0_10px_rgba(0,0,0,0.1)] transition-transform duration-300 ease-in bg-white hover:scale-105"
              >
                <img
                  src={item.img}
                  alt="on Demand"
                  className="max-w-full h-auto align-middle"
                />
                <div className="mt-4">
                  <h3 className="text-[1rem] font-semibold text-black">
                    {item.title}
                  </h3>
                  <p className="mt-[5px] leading-5 font-normal h-[110px] text-[#00000080]">
                    {item.desc}
                  </p>
                  <div className="mt-[20px] flex items-center text-[#1d68bd] text-[14px] font-semibold">
                    <p className="text-inherit">Know more</p>
                    <img
                      className="align-middle ml-[5px] w-[0.825rem]"
                      src={arrow}
                    />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Section_Explore_More;
