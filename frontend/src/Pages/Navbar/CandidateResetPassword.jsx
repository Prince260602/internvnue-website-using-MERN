import React, { useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CandidateResetPassword = () => {
  const { resetToken } = useParams(); // Retrieve reset token from URL params
  const [password, setPassword] = useState(""); // State for password input
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password input
  const [error, setError] = useState(null); // State for form errors
  const navigate = useNavigate(); // useNavigate() must be called directly in the component body

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!password || !confirmPassword) {
      setError("Password and Confirm Password are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Data to send in the request
    const userData = { resetToken, password: password };
    console.log(userData);

    try {
      // Send POST request to reset password endpoint
      const response = await axios.post(
        `http://localhost:8800/api/user/reset-password`,
        userData
      );

      if (response.status === 200) {
        alert("Password reset successful");
        navigate("/CandidateLogin");

        // Redirect user to login page or other appropriate page
        // Example using React Router: history.push('/login');
      }
    } catch (error) {
      console.error("Error resetting the password:", error);
      alert("Password reset failed");
    }
  };

  return (
    <>
      <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
        <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10">
        <img className="h-8 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
          <h1 className="mt-4 text-2xl font-semibold md:text-2xl">
            Reset Your Password
          </h1>
          <form
            className="mt-8 flex flex-col gap-3"
            action=""
            onSubmit={handleSubmit}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14"
              placeholder="New Password"
            />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14"
              placeholder="Confirm Password"
            />
            {error && <p className="text-red-500">{error}</p>}
            <button
              type="submit"
              className="flex justify-center items-center gap-4 mt-8 text-xl w-72 bg-black text-white rounded-md p-2 md:w-96 md:h-14"
            >
              Reset Password 
            </button>
          </form>
        </div>

        <div className="second w-screen flex-grow text-start px-6 bg-stone-100 py-10 md:w-1/2 md:h-screen md:sticky md:top-0 md:flex md:flex-col md:justify-center md:px-20">
          <h1 className="text-2xl md:text-3xl md:font-semibold">Our Clients</h1>
          <p className="mt-4 text-lg md:text-xl">
            We are already working with teams that want to hire the best
            engineers
          </p>
          <div className="my-6 flex flex-wrap gap-x-6 gap-y-8 md:grid grid-cols-4 md:gap-x-4">
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fd1802a069ac6804331d2_htc-logo-w.svg" alt="Client 1" />
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdc415a15832a27d1f9d1_ANSR-Logo-Suite-Final2%20(2).png" alt="Client 2" />
            <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdff4aa88917ebdc896a1_firstmeridian_owler_20190425_180047_original.png" alt="Client 3" />
            <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/rakuten.svg" alt="Client 4" />
            <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/allegis.svg" alt="Client 5" />
          </div>
            
        </div>
      </div>
    </>
  );
};

export default CandidateResetPassword;
