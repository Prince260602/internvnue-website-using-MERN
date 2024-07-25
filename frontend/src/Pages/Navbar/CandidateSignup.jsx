import React, { useState, useEffect } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom"; // Use useNavigate instead of useHistory
import axios from 'axios';
import { useGoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import Temp from "./Temp";

const clientId = "454242776427-adh7oc22vecjtk5uansolfgc5hv5k733.apps.googleusercontent.com";

const Candidatesignuppage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Initialize useNavigate

  const validateForm = () => {
    let formErrors = {};
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    if (!mobile) formErrors.mobile = "Mobile number is required";
    if (!password) formErrors.password = "Password is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    const userData = { username: name, email, mobileNumber: mobile, password }; // Adjusted field name to match backend
    console.log(userData);

    try {
      const response = await axios.post('http://localhost:8800/api/user/register', userData);
      if (response.status === 200) {
        navigate('/temp'); // Use navigate to redirect
      }
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "email"
      });
    }
    gapi.load('client:auth2', start);
  }, []);

  const { signIn } = useGoogleLogin({
    clientId: clientId,
    onSuccess: response => {console.log("Login success", response),navigate('/temp')},
    onFailure: response => console.log("Login failure", response),
    cookiePolicy: 'single_host_origin',
    isSignedIn: true
  });

  return (
    <>
      <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0 ">
        <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10 ">
          <img className="h-8 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
          <h2 className="bg-sky-600 font-semibold text-white px-5 rounded-sm py-1 mt-4">MOCK INTERVIEWS</h2>
          <h1 className="mt-4 text-2xl font-semibold md:text-2xl">Signup as Candidate</h1>
          <div className="flex justify-center items-center gap-4 mt-8 text-lg font-semibold w-72 bg-white text-gray rounded-md p-2 md:w-96 md:h-14">
            <button 
              onClick={signIn}
              className="flex justify-center  items-center w-full h-full bg-white border-2 border-blue-800 rounded-md md:"
            >
              <FcGoogle className="mr-2" />
              Continue with Gmail
            </button>
          </div>

          <div className="flex items-center w-72 md:w-96 mt-6">
            <hr className="flex-grow border-t border-gray-400" />
            <span className="mx-2 text-gray-800">OR</span>
            <hr className="flex-grow border-t border-gray-400" />
          </div>

          <form className="mt-8 flex flex-col gap-3" onSubmit={handleSubmit}>
            <input 
              onChange={(e) => setName(e.target.value)} 
              type="text" 
              name="name" 
              className={`placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14 ${errors.name ? 'border-red-500' : ''}`} 
              placeholder="Name" 
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input 
              onChange={(e) => setEmail(e.target.value)} 
              name="email" 
              type="text" 
              className={`placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14 ${errors.email ? 'border-red-500' : ''}`} 
              placeholder="Email" 
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <div className="relative w-72 md:w-96">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <span className="text-gray-500">+91</span>
              </div>
              <input 
                onChange={(e) => setMobile(e.target.value)} 
                name="mobile" // Adjusted name to match backend (mobile instead of mobileNumber)
                type="text" 
                className={`pl-12 placeholder-center text-left w-full h-12 bg-slate-100 rounded-md px-2 md:h-14 ${errors.mobile ? 'border-red-500' : ''}`} 
                placeholder="Mobile" 
              />
            </div>
            {errors.mobile && <p className="text-red-500 text-sm">{errors.mobile}</p>}

            <input 
              onChange={(e) => setPassword(e.target.value)} 
              name="password" 
              type="password" 
              className={`placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14 ${errors.password ? 'border-red-500' : ''}`} 
              placeholder="Password" 
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

            <button type="submit" className="flex justify-center items-center gap-4 mt-8 text-xl w-72 bg-black text-white rounded-md p-2 md:w-96 md:h-14">
              Create an account 
            </button>
          </form>

          <h3 className="mt-16 font-semibold opacity-70">Already have an account?</h3>
          <Link to="/CandidateLogin" className="text-green-500 font-semibold hover:underline">
            Login into your account
          </Link>

          <h3 className="w-80 text-center mt-16 font-semibold opacity-70">By signing up you agree to Intervue's_
            <Link to="/privacy-policy" className="text-green-500 font-semibold hover:underline">
              Privacy policy
            </Link> and_
            <Link to="/terms-of-service" className="text-green-500 font-semibold hover:underline">
              Terms of service
            </Link>
          </h3>
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
          <Link to="/login" className="flex gap-3  items-center text-sky-600 font-semibold hover:underline">
            View all success stories 
          </Link>
        </div>
      </div>
    </>
  );
};

export default Candidatesignuppage;
