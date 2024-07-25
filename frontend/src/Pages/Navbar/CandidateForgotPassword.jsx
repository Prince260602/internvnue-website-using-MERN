import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom"; // Import Link and useNavigate from React Router Dom
import axios from 'axios'; // Import axios for making HTTP requests

const CandidateForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const formErrors = {};
    if (!email) {
      formErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Email address is invalid";
    }
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ email });
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const userData = { email };
    console.log(userData);

    try {
      const response = await axios.post('http://localhost:8800/api/user/forgot-password', userData);
      if (response.status === 200) {
        alert("Reset Link is sent to email");
        navigate("/CandidateLogin"); // Use navigate to redirect
      }
    } catch (error) {
      console.error('Error resetting the password:', error);
    }
  };

  return (
    <>
      <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
        <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10 ">
          <img className="h-8 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
          <h1 className="mt-4 text-2xl font-semibold md:text-2xl">Hire better teams faster</h1>
          <h1 className="mt-2 text-2xl opacity-50 font-semibold md:text-xl">We suggest using your work mail for Login/Signup</h1>

          <form className="mt-20 flex flex-col gap-3" action="" onSubmit={handleSubmit}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              type="text"
              className="placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14"
              id=""
              placeholder="Work Email"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <button type="submit" className="flex justify-center items-center gap-4 mt-8 text-xl w-72 bg-black text-white rounded-md p-2 md:w-96 md:h-14">
              Send recovery link <FaArrowRightLong />
            </button>
          </form>
          <Link to="/CandidateLogin" className="mt-10 text-gray-500 underline">
            Login instead?
          </Link>
        </div>

        <div className="second w-screen flex-grow text-start px-6 bg-stone-100 py-10 md:w-1/2 md:h-screen md:sticky md:top-0 md:flex md:flex-col md:justify-center md:px-20">
          <h1 className="text-2xl md:text-3xl md:font-semibold">Our Clients</h1>
          <p className="mt-4 text-lg md:text-xl">We are already working with teams that want to hire the best engineers</p>
          <div className="my-6 flex flex-wrap gap-x-6 gap-y-8 md:grid grid-cols-4 md:gap-x-4">
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fd1802a069ac6804331d2_htc-logo-w.svg" alt="Client 1" />
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdc415a15832a27d1f9d1_ANSR-Logo-Suite-Final2%20(2).png" alt="Client 2" />
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdff4aa88917ebdc896a1_firstmeridian_owler_20190425_180047_original.png" alt="Client 3" />
            <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/rakuten.svg" alt="Client 4" />
            <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/allegis.svg" alt="Client 5" />
          </div>
          <Link to="/login" className="flex gap-3 items-center text-sky-600 font-semibold hover:underline">
            View all success stories <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CandidateForgotPassword;
