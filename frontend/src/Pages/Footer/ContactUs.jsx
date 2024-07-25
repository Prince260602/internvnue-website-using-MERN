/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const ContactUs = () => {
  const slides = [
    {
      title: "Outsource your interviews & Save 90% of your bandwidth",
      description:
        "We have over 1500+ pre-vetted pool of talented interviewers working in top firms for end to end evaluation of the candidates",
      imageUrl:
        "https://dersyb7nfifdf.cloudfront.net/production/17900/8675c093-77a6-49db-b9a5-ae675e2c8080.png",
      buttonText: "Request interviews for free",
      buttonLink: "/?selectProfile=true",
    },
    {
      title: "Assess yourself through mock interviews",
      description:
        "Get actionable feedback of your interview from industry experts and share it with 400+ actively hiring brands",
      imageUrl:
        "https://d2b1cooxpkirg1.cloudfront.net/publicAssets/contact-us/mock-interviews-banner.png",
      buttonText: "Take mock interviews",
      buttonLink: "/mock-interviews",
    },
    {
      title: "Filter out candidates using our skill test library",
      description:
        "Over 1000+ ready to use tests available and our test environment is well built for best candidate experience and good evaluation with plagiarism detection",
      imageUrl:
        "https://d2b1cooxpkirg1.cloudfront.net/publicAssets/contact-us/skill-test-library-banner.png",
      buttonText: "View skill library",
      buttonLink: "/technical-assessment-test",
    },
  ];

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    firstName: "",
    lastName: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="pt-1 w-full">
      <h1 className="mt-8 text-center text-3xl mb-3 text-black sm:px-6 lg:px-8">
        <strong>Contact us</strong> for all your hiring needs
      </h1>
      <h2 className="text-center text-xl text-[#5f5f5f] my-5">
        Elevate your hiring game with Intervue’s on-demand interviews,
        <br className="hidden md:block" />
        assessment solutions tailored to your recruitment needs.
      </h2>
      <div className="pt-3 mx-auto flex flex-wrap lg:flex-nowrap">
        <div className="lg:w-1/2 w-full px-4 mt-4 order-2 lg:order-1">
          <div className="left-side flex flex-col">
            <div className="w-full flex flex-col max-w-lg mx-auto">
              <Splide
                options={{
                  type: "loop",
                  gap: "1rem",
                  perPage: 1,
                  arrows: false,
                  pagination: true,
                }}
              >
                {slides.map((slide, index) => (
                  <SplideSlide key={index}>
                    <div className="flex flex-col items-center px-3 py-6 bg-white border border-gray-300 rounded-lg">
                      <h3 className="mb-2 text-lg font-semibold text-center text-black">
                        {slide.title}
                      </h3>
                      <p className="text-base font-normal leading-relaxed text-center text-gray-600">
                        {slide.description}
                      </p>
                      <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="mt-6 mb-1"
                        height="300"
                      />
                      <a
                        href={slide.buttonLink}
                        className="px-6 py-2 mt-6 lg:w-1/2 text-base font-semibold text-white bg-black rounded-full inline-block text-center"
                      >
                        {slide.buttonText}
                      </a>
                    </div>
                  </SplideSlide>
                ))}
              </Splide>
            </div>
            <div className="SectionWrapper max-w-lg my-12 lg:px-12 lg:mx-12 md:px-12 md:mx-12 sm:px-12 sm:mx-12 px-4">
              <div className="text-[#1d68bd] uppercase font-semibold text-[20px] leading-[20px] text-left">
                Sales
              </div>
              <div className="text-black text-[27px] font-semibold leading-[50px] my-[10px] text-left">
                Get in touch today
              </div>
              <div className="sectionDescription mt-2 text-left text-[18px]">
                Have a question? We’d love to hear from you. Use the contact
                form or reach out to us directly.
              </div>
              <a
                href="mailto:support@intervue.io"
                className="SectionLinks flex items-center mt-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3334 5.9496V14.2829C18.3334 14.8355 18.1139 15.3654 17.7232 15.7561C17.3325 16.1468 16.8026 16.3663 16.2501 16.3663H3.75008C3.19755 16.3663 2.66764 16.1468 2.27694 15.7561C1.88624 15.3654 1.66675 14.8355 1.66675 14.2829V5.9496"
                    stroke="#5F5F5F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.3334 5.94961C18.3334 5.39707 18.1139 4.86717 17.7232 4.47647C17.3325 4.08577 16.8026 3.86627 16.2501 3.86627H3.75008C3.19755 3.86627 2.66764 4.08577 2.27694 4.47647C1.88624 4.86717 1.66675 5.39707 1.66675 5.94961L8.89591 10.4635C9.22702 10.6704 9.60962 10.7802 10.0001 10.7802C10.3905 10.7802 10.7731 10.6704 11.1042 10.4635L18.3334 5.94961Z"
                    stroke="#5F5F5F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-3">support@intervue.io</span>
              </a>
            </div>
            <div className="SectionWrapper max-w-lg my-12 lg:px-12 lg:mx-12 px-4 md:px-12 md:mx-12 sm:px-12 sm:mx-12">
              <div className="text-[#1d68bd] uppercase font-semibold text-[20px] leading-[20px] text-left">
                Customer support
              </div>
              <div className="text-black text-[27px] font-semibold leading-[50px] my-[10px] text-left">
                Need help?
              </div>
              <div className="sectionDescription mt-2 text-left text-[18px]">
                Got any doubts? Our dedicated support team is ready to assist
                you.
              </div>
              <a
                href="mailto:support@intervue.io"
                className="SectionLinks flex items-center mt-4"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3334 5.9496V14.2829C18.3334 14.8355 18.1139 15.3654 17.7232 15.7561C17.3325 16.1468 16.8026 16.3663 16.2501 16.3663H3.75008C3.19755 16.3663 2.66764 16.1468 2.27694 15.7561C1.88624 15.3654 1.66675 14.8355 1.66675 14.2829V5.9496"
                    stroke="#5F5F5F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M18.3334 5.94961C18.3334 5.39707 18.1139 4.86717 17.7232 4.47647C17.3325 4.08577 16.8026 3.86627 16.2501 3.86627H3.75008C3.19755 3.86627 2.66764 4.08577 2.27694 4.47647C1.88624 4.86717 1.66675 5.39707 1.66675 5.94961L8.89591 10.4635C9.22702 10.6704 9.60962 10.7802 10.0001 10.7802C10.3905 10.7802 10.7731 10.6704 11.1042 10.4635L18.3334 5.94961Z"
                    stroke="#5F5F5F"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="ml-3">support@intervue.io</span>
              </a>
            </div>
            <div className="SectionWrapper max-w-lg my-12 lg:px-12 lg:mx-12 md:px-12 md:mx-12 sm:px-12 sm:mx-12">
              <div className="text-[#1d68bd] uppercase font-semibold text-[20px] leading-[20px] text-left">
                Our home
              </div>
              <div className="text-black text-[27px] font-semibold leading-[50px] my-[10px] text-left">
                Bangalore, India
              </div>
              <div className="sectionDescription"></div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8860638759634!2d77.642303175016!3d12.915043787395119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae150f71c0e87b%3A0xa223f7d18baad7a1!2sUrbanVault%20HSR%20Layout%201781!5e0!3m2!1sen!2sin!4v1694850978636!5m2!1sen!2sin"
                  // width="400"
                  // height="257"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4 mt-4 order-1 lg:order-2">
          <div className="right-side lg:sticky top-[150px] lg:pb-12 lg:mb-12">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg mx-auto border rounded-3xl lg:p-6 md:p-6 sm:p-6 p-3 box-shadow"
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-left font-medium leading-[20px] text-[17px] mb-2"
                >
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full p-2 bg-gray-100 border-xl rounded-2xl "
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-left font-medium leading-[20px] text-[17px] mb-2"
                >
                  Phone number*
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="w-full p-2 bg-gray-100 border-s rounded-2xl"
                  placeholder="(123) 456 - 789"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 text-left font-medium leading-[20px] text-[17px] mb-2"
                >
                  First Name*
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  className="w-full p-2 bg-gray-100 border-s rounded-2xl"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="lastName"
                  className="block text-gray-700 text-left font-medium leading-[20px] text-[17px] mb-2"
                >
                  Last Name*
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  className="w-full p-2 bg-gray-100 border-s rounded-2xl"
                  placeholder="Carter"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-left font-medium leading-[20px] text-[17px] mb-2"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full p-2 bg-gray-100 border-s rounded-2xl"
                  placeholder="Please type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-3xl"
              >
                Submit
              </button>
            </form>
            <div className="trusted-by lg:m-10 md:m-10">
              <div className="text-black my-4 text-lg font-semibold text-center">
                Trusted by
              </div>
              <div className="companies flex justify-center items-center flex-wrap mb-6 gap-6">
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/12c61a3f-fa9c-4d24-8a8c-be0253615fbe.svg"
                  alt="Zomato"
                />
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/e4666de0-6f5a-42de-a1cc-e6417b722e42.svg"
                  alt="Nykaa"
                />
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/31aa774f-7d65-4ffc-864f-c49fc70583e2.svg"
                  alt="Yubi"
                />
                <img
                  draggable="false"
                  className="company w-13 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/1d05931b-2f39-4033-8d1b-b1606144bfa6.svg"
                  alt="Zopper"
                />
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/ff50fa71-6b6a-41f2-85a8-93fa9f842fb8.svg"
                  alt="Rakuten"
                />
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/2c37cc0d-24f7-4c56-97ba-57c0ae936f95.svg"
                  alt="Allegis"
                />
                <img
                  draggable="false"
                  className="company w-15 h-5"
                  src="https://dersyb7nfifdf.cloudfront.net/uat/219/f966fd4c-c8f8-49cb-b271-b3f394a7e0aa.png"
                  alt="Product Hunt"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 bg-gray-100">
        <div className="text-blue-600 uppercase font-semibold text-lg leading-20 text-center">
          Join the league
        </div>
        <div className="text-black text-2xl font-semibold leading-50 my-4 text-center">
          Elevating Success, One Customer at a Time!
        </div>
        <div className="container lg:px-12 justify-center ">
          <div className="row testimonials-wrapper mt-6 flex flex-wrap justify-between lg:ml-10 ml-5">
            {/* First testimonial */}
            <div className="w-full lg:w-5/12 mb-12 px-5 md:w-5/12 sm:w-5/12">
              <div className="Testimonials">
                <img
                  className="logo h-10 w-auto object-contain object-left"
                  src="https://dersyb7nfifdf.cloudfront.net/uat/219/d92b7e4c-1cd5-4c86-a426-127318e9a7ec.png"
                  alt="Twitter"
                />
                <div className="review text-gray-600 text-left text-lg mt-3 mb-5">
                  Intervue is a true game changer in the hiring space. As a
                  hiring manager, it makes my team very productive if I am not
                  having to worry about using my team’s interviewing bandwidth.
                </div>
                <div className="profile item-center flex">
                  <div>
                    <img
                      className="w-14 h-14 object-cover rounded-full mr-10"
                      src="https://dersyb7nfifdf.cloudfront.net/uat/219/80a2079b-5d13-4c84-96d9-8d202f558f9b.png"
                      alt="Kartik Sura"
                    />
                  </div>
                  <div>
                    <div className="name text-left text-md">Kartik Sura</div>
                    <div className="designation text-left text-md">
                      Senior Engineering Manager
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second testimonial */}
            <div className="w-full lg:w-5/12 mb-12 px-5 md:w-5/12 sm:w-5/12">
              <div className="Testimonials">
                <img
                  className="logo h-10 w-auto object-contain object-left"
                  src="https://dersyb7nfifdf.cloudfront.net/uat/219/9678cf4c-8a85-4cb8-b95f-3b965d17b8ba.png"
                  alt="Upstox"
                />
                <div className="review text-gray-600 text-left text-lg mt-3 mb-5">
                  I cannot imagine Upstox’s hiring without Intervue now. As a
                  recruitment lead, finding interviewers' bandwidth was the
                  biggest frustration that Intervue solves seamlessly.
                </div>
                <div className="profile item-center flex">
                  <div>
                    <img
                      className="w-14 h-14 object-cover rounded-full mr-10"
                      src="https://dersyb7nfifdf.cloudfront.net/uat/219/4ce62fc8-a55f-494c-8300-8a661b3a567d.png"
                      alt="Anupriya Krishnan"
                    />
                  </div>
                  <div>
                    <div className="name text-left text-md">
                      Anupriya Krishnan
                    </div>
                    <div className="designation text-left text-md">
                      Director, Talent Acquisition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third testimonial */}
            <div className="w-full lg:w-5/12 mb-12 px-5 md:w-5/12 sm:w-5/12">
              <div className="Testimonials">
                <img
                  className="logo h-10 w-auto object-contain object-left"
                  src="https://d26rchw36216zf.cloudfront.net/local/1342/31aa774f-7d65-4ffc-864f-c49fc70583e2.svg"
                  alt="Yubi"
                />
                <div className="review text-gray-600 text-left text-lg mt-3 mb-5">
                  Intervue helped us save a lot of recruiting bandwidth with
                  their product. Their product helped us build reliance over how
                  they could actually emulate our internal hiring process so
                  seamlessly.
                </div>
                <div className="profile item-center flex">
                  <div>
                    <img
                      className="w-14 h-14 object-cover rounded-full mr-10"
                      src="https://dersyb7nfifdf.cloudfront.net/uat/219/a8741653-404d-4966-a5b1-aea0121d3a77.png"
                      alt="Niladri Sekhar"
                    />
                  </div>
                  <div>
                    <div className="name text-left text-md">Niladri Sekhar</div>
                    <div className="designation text-left text-md">
                      Manager, Talent Acquisition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fourth testimonial */}
            <div className="w-full lg:w-5/12 mb-12 px-5 md:w-5/12 sm:w-5/12">
              <div className="Testimonials">
                <img
                  className="logo h-10 w-auto object-contain object-left"
                  src="https://dersyb7nfifdf.cloudfront.net/uat/219/caaf6c56-3beb-41e1-a506-d31755edfec2.png"
                  alt="Fampay"
                />
                <div className="review text-gray-600 text-left text-lg mt-3 mb-5">
                  Intervue is a go-to hiring partner at Fampay. Hiring is the
                  biggest pain of a founder and Intervue solves the bandwidth
                  problem so beautifully. My team can now focus only on building
                  products.
                </div>
                <div className="profile item-center flex">
                  <div>
                    <img
                      className="w-14 h-14 object-cover rounded-full mr-10"
                      src="https://dersyb7nfifdf.cloudfront.net/uat/219/79661453-73f6-49dc-9772-67418a6b695a.png"
                      alt="Kush Taneja"
                    />
                  </div>
                  <div>
                    <div className="name text-left text-md">Kush Taneja</div>
                    <div className="designation text-left text-md">Founder</div>
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

export default ContactUs;
