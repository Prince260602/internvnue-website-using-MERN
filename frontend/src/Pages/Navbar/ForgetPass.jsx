import React,{useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import validation from './ForgetPassValidation'
import axios from "axios"

const ForgetPass = () => {
    const[email, setEmail] = useState("")
    const[errors, setErrors] = useState({})
    const navigate = useNavigate()

    const handleInput = (e) => {
        setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const userData = {email}
        const validationErrors = validation( {email} );
        setErrors(validationErrors);

        if(errors.email === ""){
            const axiosInstance = axios.create({credentials: true, headers: {
                "Content-type": "application/json", 
            }})
            axiosInstance.post('http://localhost:8800/api/user/forgot-password', userData).then(res => {
                console.log(res)
                if (res.status === 200) {
                    alert("Reset Link is sent to email");
                    navigate("/CompanyLogin"); // Use navigate to redirect
                  }
            }).catch(err =>{
                if(err){
                    console.log(err)
                }
               console.log(err)
               
            });    
        }

    }
  return (
    <>
           <div className="main min-h-screen w-screen flex flex-col md:flex-row-reverse mx-0 my-0">
           <div className="one flex flex-col justify-center items-center md:w-1/2 p-4 md:mb-10 ">
           <img className="h-8 mb-8 mt-2" src="https://dersyb7nfifdf.cloudfront.net/public/assets/logointervue.png" alt="Logo" />
               <h1 className="mt-2 text-2xl font-semibold md:text-2xl">Hire better teams faster</h1>
               <p className='text-gray-400 mb-10 mt-4 text-lg'>We suggest using your work mail for Login/Signup</p>
            <form className="mt-8 flex flex-col gap-2" onSubmit={handleSubmit}>
                <div className='flex flex-col gap-0'>
                    <input 
                    type="text" placeholder='Work email' 
                    className='bg-gray-200 p-2 w-80 text-lg rounded-lg mb-4'  
                    onChange={handleInput}/>
                    {errors.email && <span className='text-red-500 text-left'> {errors.email} </span>}
                </div>
                <div className='flex gap-2 p-2 text-white bg-black text-lg items-center justify-center mx-auto align-center w-80 mb-4'>
                    <button type="submit" className='cursor-pointer rounded-lg'>Send recovery link</button>
                    <img src="https://www.svgrepo.com/show/28675/right-arrow.svg" alt="logo"  className='h-5 w-5  ' /> 
                </div>
                <Link to="/CompanyLogin"><p className='underline mb-5 flex justify-center'>Login instead?</p></Link>
            </form>
            
         </div>
        <div className="flex-grow flex-1 text-start px-6 bg-slate-100 py-10 md:w-1/2 md:h-screen md:sticky md:top-0 md:flex md:flex-col md:justify-center md:px-20">
               <h1 className="text-2xl md:text-3xl md:font-semibold">Our Clients</h1>
               <p className="mt-4 text-lg md:text-xl">We are already working with teams that want to hire the best engineers</p>
               <div className="my-6 flex flex-wrap gap-x-6 gap-y-8 md:grid grid-cols-4 md:gap-x-4">
                  <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fd1802a069ac6804331d2_htc-logo-w.svg" alt="Client 1" />
                  <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdc415a15832a27d1f9d1_ANSR-Logo-Suite-Final2%20(2).png" alt="Client 2" />
                  <img className="w-20 md:w-28" src="https://uploads-ssl.webflow.com/608e9cc36cbcc089f0998643/661fdff4aa88917ebdc896a1_firstmeridian_owler_20190425_180047_original.png" alt="Client 3" />
                  <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/rakuten.svg" alt="Client 4" />
                  <img className="w-20 md:w-28" src="https://www.intervue.io/publicAssets/company_logos/allegis.svg" alt="Client 5" />
               </div>
               <a href="https://www.intervue.io/success-stories">
                  <div className='flex gap-5 text-start '>
                     <p>View all success stories</p>
                     <img src="https://www.svgrepo.com/show/28675/right-arrow.svg" alt="logo" className='h-5 w-5'/>
                  </div>
               </a>
         </div>
    </div>
    </>
  )
}

export default ForgetPass