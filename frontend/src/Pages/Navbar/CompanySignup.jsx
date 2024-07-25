import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import { GoogleLogin } from 'react-google-login';
import validation from './SignupValidation';
import axios from "axios"

const clientId = "636899477836-oq0pp2l5ajm4oj3fi3g0bjebhbhabhel.apps.googleusercontent.com"

const CompanySignup = () => {
  const[values, setValues] = useState({
    username: "",
    email: "",
    mobileNumber: "",
    password: ""
  })
  
    
const[errors, setErrors] = useState({});
const navigate = useNavigate()

const handleInput = (e) => {
   setValues(prev => ({
      ...prev,[e.target.name]: e.target.value
   }))
}
   
  const handleSubmit = (e) => {
   e.preventDefault() 
   setErrors(validation(values))
   console.log(values)
   if(errors.username === "" && errors.email === "" && errors.password === "" && errors.mobileNumber === "") {
       const axiosInstance = axios.create({credentials: true, headers: {
           "Content-type": "application/json",
       }})
       axiosInstance.post('http://localhost:8800/api/user/register', values).then(res => {
         console.log(values)
           console.log(res)
           navigate("/CompanyLogin")
       }).catch(err =>{
           if(err){
               // alert("User or email already exists")
               console.log(err)
           }
          console.log(err)
          
       });    
   }       
   
    

  }

  const handleGoogleLoginSuccess = (response) => {
   console.log('Google login success:', response);
 };
 
 const handleGoogleLoginFailure = (error) => {
   console.error('Google login failure:', error);
 };

  return (
   <>
         <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
         <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10 ">
               <img className="h-8 mb-8 mt-6" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
               <h2 className="bg-green-600 font-semibold text-white px-5 rounded-sm py-1 mt-4">Business</h2>
               <h1 className="mt-4 text-2xl font-semibold md:text-2xl">Signup as Organisation</h1>
               <div className="flex justify-center items-center gap-4 mt-8 text-lg font-semibold w-72 bg-white text-gray rounded-md p-2 md:w-96 md:h-14">
               { <GoogleLogin
                           clientId={clientId}
                           buttonText="Continue with Google"
                           onSuccess={handleGoogleLoginSuccess}
                           onFailure={handleGoogleLoginFailure}
                           cookiePolicy={'single_host_origin'}
                           render={renderProps => (
                              <div onClick={renderProps.onClick} disabled={renderProps.disabled} className='mb-5 flex items-center align-center justify-center pl-4 pr-4 pt-2 pb-2 mx-auto border border-green-500 w-80 align-center gap-5 rounded-lg cursor-pointer'>
                              <img src="https://www.svgrepo.com/show/380993/google-logo-search-new.svg" alt="google_logo" className='h-5 w-5' />
                              <span className='text-bold'>Continue with Google</span>
                              </div>
                           )}
                        /> }
               </div> 
               <div className="flex items-center w-72 md:w-96 mt-6">
                  <hr className="flex-grow border-t border-gray-400" />
                  <span className="mx-2 text-gray-800">OR</span>
                  <hr className="flex-grow border-t border-gray-400" />
               </div>    

               <form className="mt-8 flex flex-col gap-3" onSubmit={handleSubmit}>
                        <div className='flex flex-col gap-5 items-center mb-10'>
                        <div className='flex flex-col gap-2'>
                              <input 
                              type="text" placeholder='Name' 
                              className='bg-gray-200 p-2 w-80 text-lg rounded-lg'
                              onChange={handleInput} name="username" />
                              {errors.username && <span className='text-red-500'> {errors.username} </span>}
                        </div>

                        <div className='flex flex-col gap-2'>
                              <input
                              type="text" placeholder='Work email'
                              className='bg-gray-200 p-2 w-80 text-lg rounded-lg' 
                              onChange={handleInput}  name="email"/>
                              {errors.email && <span className='text-red-500'> {errors.email} </span>}
                        </div>

                        <div className='flex flex-col gap-2'>
                              <input 
                              type="text" placeholder='+91' 
                              className="bg-gray-200 p-2 w-80 text-lg rounded-lg" 
                              onChange={handleInput}  name="mobileNumber" />
                              {errors.mobileNumber && <span className='text-red-500'> {errors.mobileNumber} </span>}
                           </div>

                           <div className='flex flex-col gap-2'>
                              <input
                              type="text" placeholder='Password' 
                              className='bg-gray-200 p-2 w-80 text-lg rounded-lg'
                              onChange={handleInput}  name="password"/>
                              {errors.password && <span className='text-red-500'> {errors.password} </span>}
                           </div>

                        </div>
                        <div className='flex gap-2 p-2 text-white bg-black text-lg items-center justify-center mx-auto align-center w-80 mb-10'>
                           <button className='cursor-pointer rounded-lg' type="submit">Create an account</button>
                           <img src="https://www.svgrepo.com/show/28675/right-arrow.svg" alt="logo"  className='h-5 w-5  ' /> 
                        </div>
                        <div className='flex flex-col mb-10 items-center justify-center h-full'>
                           <span className='text-lg'>Already have an account?</span>
                           <Link to="/CompanyLogin"><span className='text-green-600 font-bold text-lg cursor-pointer'>Login into your account</span></Link>
                        </div>
                        <div className='flex flex-col gap-2 text-sm items-center justify-center'>
                           <span>By Signing up you agree to intervue's</span>
                           <p><a href="https://www.intervue.io/privacy" target="_blank" rel="noreferrer"><span className='text-green-500'>Privacy Policy</span></a> and <a href="https://www.intervue.io/terms"><span className='text-green-500'>Terms of Service.</span></a></p>
                        </div>
                     
               </form>
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
  )
}

export default CompanySignup