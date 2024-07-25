function Testimonials() {
  let arr = [
    {
      description:
        "I was extremely impressed by the value that Intervue brought to our initial tech hiring process. From the very beginning, we were impressed by the level of detail provided in the reports for each candidate. The filtration process was strict, and only high-quality candidates made it through the interviews. This meant that we were able to focus our attention on the most promising candidates.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/production/4298/7fe179c6-92c2-49cb-9d74-28713186ef27.jfif",
      name: "Ankit Jaipuria",
      position: "Co-Founder",
      logo: "https://dersyb7nfifdf.cloudfront.net/production/4298/d794640a-8be0-4dc5-9569-0172a741980e.jpg",
    },
    {
      description:
        "Intervue has fast-tracked MoneyView's hiring process by removing the most crucial initial interaction. Intervue's rigorous interviewing standards have aided us in filtering out unsuitable candidates, resulting in better-quality candidates. Their hiring tool features an intuitive interface and a question bank that simplifies the process. Their hiring tool features an intuitive interface that surpasses its competitors, making it an evident choice for us.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/production/4298/60da1b12-13b8-468e-823f-477cdc1e92af.jfif",
      name: "Sachin Kumar",
      position: "Head of Technology",
      logo: "https://dersyb7nfifdf.cloudfront.net/production/4298/d284d4cc-5db6-4324-affc-6599be11d2a5.jpg",
    },
    {
      description:
        "Engineers don't join a company to spend half their day interviewing candidates. Intervue plays a key role in offloading some of this burden and helping companies scale strong engineering teams so they can focus more of their time building product and serving customers.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/Ryan-hoover-2882147924.jpeg",
      name: "Ryan Hoover",
      position: "Founder, Product Hunt",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/ph-logo-382882391012.png",
    },
    {
      description:
        "Intervue is a true game changer in the hiring space. As a hiring manager it makes my team very productive if I am not having to worry about using my team's interviewing bandwidth.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/38293923_329.png",
      name: "Kartik Sura",
      position: "Senior Engineering Manager",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/Twitter-logo-2389392.png",
    },
    {
      description:
        "Intervue is a go to hiring partner at Fampay. Hiring is the biggest pain of a founder and intervue solves the bandwidth problem so beautifully. My team can now focus only on building products",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/23746723489_9393.png",
      name: "Kush Taneja",
      position: "Founder",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/Fam-Pay_logo.png",
    },
    {
      description:
        "I cannot imagine Upstox's hiring without intervue now. As a recruitment lead finding interviewers bandwidth was the biggest frustration that intervue solves seamlessly",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/98923982398_3993.png",
      name: "Anupriya Krishnan",
      position: "Director Talent Acquisition",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/eb7738e7-d908-42f5-97da-61b28e53ce73-1631634736627.png",
    },
    {
      description:
        "Intervue helped us save a lot of recruiting bandwidth with their product. Their product helped us build reliance over how they could actually emulate our internal hiring process so seamlessly.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/2384782384-238.png",
      name: "Niladri Sekhar",
      position: "Manager, Talent Acquisition",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/companies/a05ca8b1-fb38-457c-9c4c-7d8800f0c9fe-1635489695508.png",
    },
    {
      description:
        "Intervue has been a great value add for the tech hiring process at Oro - making it efficient and quick. We have interviewed over 300 candidates till date, something which would have taken hundreds of hours to plan and do otherwise. The team has been very responsive and has extended support whenever needed. We are completely satisfied with the product and it has become an integral part of our hiring process.",
      person_image:
        "https://dersyb7nfifdf.cloudfront.net/public/assets/oro_1604412630885.jpeg",
      name: "Sreekesh Krishnan",
      position: "Co-Founder",
      logo: "https://dersyb7nfifdf.cloudfront.net/public/assets/oro_232349992.png",
    },
  ];

  return (
    <>
      <h3 className="text-center text-3xl font-semibold my-10 opacity-60 ">
        Testimonials
      </h3>
      <div className="main w-full h-full mb-10">
        <div className="cards grid grid-cols-1 lg:grid-cols-2 gap-y-8 gap-x-3 place-items-center">
          {arr.map((value, index) => (
            <div
              key={index}
              className="flex flex-col justify-between text-center bg-white w-[80%] py-6 rounded-2xl drop-shadow-2xl lg:h-[500px]"
            >
              <div className="px-6">
                <p className="text-xl text-start leading-relaxed opacity-75">
                  {value.description}
                </p>
              </div>
              <div className="flex flex-col lg:flex-row lg:justify-between items-center px-6 mt-auto">
                <div className="flex flex-col lg:flex-row lg:gap-2 justify-center items-center">
                  <div className="bg-sky-300 w-14 h-14 lg:w-12 lg:h-12 rounded-full my-4 overflow-hidden">
                    <img
                      className="object-cover w-full h-full"
                      src={value.person_image}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-xl font-semibold leading-6 lg:leading-5 lg:text-start lg:text-lg">
                      {value.name}
                    </h1>
                    <h1 className="text-xl opacity-65 lg:text-start lg:text-lg">
                      {value.position}
                    </h1>
                  </div>
                </div>
                <div>
                  <img
                    className={`h-12 lg:h-10 my-4 lg:my-0 lg:mx-0 object-cover ${
                      index === 6 ? "h-12 lg:h-6" : ""
                    }`}
                    src={value.logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Testimonials;
