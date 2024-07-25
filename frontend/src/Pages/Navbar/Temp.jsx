import React from "react";
import { useGoogleLogout } from 'react-google-login';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const clientId = "454242776427-adh7oc22vecjtk5uansolfgc5hv5k733.apps.googleusercontent.com";

const Temp = () => {
  const navigate = useNavigate();

  // Google Logout
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess: () => {
      console.log('Logged out successfully');
      navigate('/CandidateSignup');
    },
    onFailure: () => {
      console.log('Logout failed');
    }
  });

  // Normal Logout
  const handleNormalLogout = () => {
    // Clear user data from local storage or wherever it's stored
    localStorage.removeItem('authToken'); // Replace 'authToken' with your actual key
    console.log('Logged out from normal account');
    navigate('/CandidateLogin');
  };

  return (
    <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
      <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10">
        <h1>Temporary Page</h1>
        <button onClick={signOut} className="flex justify-center items-center gap-2 mt-4 text-lg w-72 bg-red-500 text-white rounded-md p-2 md:w-96 md:h-14">
          <FcGoogle className="mr-2" />
          Logout from Google
        </button>
        <button onClick={handleNormalLogout} className="flex justify-center items-center gap-2 mt-4 text-lg w-72 bg-blue-500 text-white rounded-md p-2 md:w-96 md:h-14">
          Logout from Normal Account
        </button>
      </div>
    </div>
  );
};

export default Temp;
