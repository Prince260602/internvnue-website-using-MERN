import React, { useState, useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { useGoogleLogin } from 'react-google-login';
import { gapi } from "gapi-script";
import axios from 'axios';

const clientId = "454242776427-adh7oc22vecjtk5uansolfgc5hv5k733.apps.googleusercontent.com";

const CandidateLogin = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginErrors, setLoginErrors] = useState({});
    const navigate = useNavigate();

    const validateLoginForm = () => {
        let formErrors = {};
        if (!email) formErrors.email = "Email is required";
        if (!password) formErrors.password = "Password is required";
        return formErrors;
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();

        const formErrors = validateLoginForm();
        if (Object.keys(formErrors).length > 0) {
            setLoginErrors(formErrors);
            return;
        }

        console.log({ email, password });
        const userData = { email, password }; // Adjusted field name to match backend
        console.log(userData);

        try {
            const response = await axios.post('http://localhost:8800/api/user/login', userData);
            if (response.status === 200) {
                navigate('/temp'); // Redirect to the home page
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
        };
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
            <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
                <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10 ">
                    <img className="h-8 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
                    <h2 className="bg-sky-600 font-semibold text-white px-5 rounded-sm py-1 mt-4">MOCK INTERVIEWS</h2>
                    <h1 className="mt-4 text-2xl font-semibold md:text-2xl">Login as Candidate</h1>
                    <button 
                        onClick={signIn} 
                        type="submit" 
                        className="border-2 border-blue-800 flex justify-center items-center gap-4 mt-8 text-lg font-semibold w-72 bg-white text-gray rounded-md p-2 md:w-96 md:h-14"
                    >
                        <FcGoogle />Continue with Gmail
                    </button>

                    <div className="flex items-center w-72 md:w-96 mt-6">
                        <hr className="flex-grow border-t border-gray-400" />
                        <span className="mx-2 text-gray-800">OR</span>
                        <hr className="flex-grow border-t border-gray-400" />
                    </div>

                    <form className="mt-8 flex flex-col gap-3" onSubmit={handleLoginSubmit}>
                        <input 
                            onChange={(e) => setEmail(e.target.value)} 
                            name="email" 
                            type="text" 
                            className={`placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14 ${loginErrors.email ? 'border-red-500' : ''}`} 
                            placeholder="Email" 
                        />
                        {loginErrors.email && <p className="text-red-500 text-sm">{loginErrors.email}</p>}

                        <input 
                            onChange={(e) => setPassword(e.target.value)} 
                            name="password" 
                            type="password" 
                            className={`placeholder-center text-left w-72 h-12 bg-slate-100 rounded-md px-2 md:w-96 md:h-14 ${loginErrors.password ? 'border-red-500' : ''}`} 
                            placeholder="Password" 
                        />
                        {loginErrors.password && <p className="text-red-500 text-sm">{loginErrors.password}</p>}

                        <button 
                            type="submit" 
                            className="flex justify-center items-center gap-4 mt-8 text-xl w-72 bg-black text-white rounded-md p-2 md:w-96 md:h-14"
                        >
                            Login with email <FaArrowRightLong />
                        </button>
                    </form>

                    <Link to="/CandidateForgotPassword" className="mt-10 text-gray-500 underline">
                        Forgot Password?
                    </Link>

                    <h3 className="mt-16 font-semibold opacity-70">No account? Join now!</h3>
                    <Link to="/CandidateSignup" className="text-green-500 font-semibold hover:underline">
                        Create an account
                    </Link>
                    <h3 className="w-80 text-center mt-16 font-semibold opacity-70">
                        By signing up you agree to Intervue's_ 
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
                        View all success stories <FaArrowRightLong />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CandidateLogin;
