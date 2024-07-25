import React from 'react'
import {Link} from "react-router-dom"

const CompanyLoginSignup = () => {
  return (
    <div className='flex w-full'>
      <div className='mt-20 mx-auto max-w-lg flex flex-col' >
        <div class='flex flex-col items-center justify-center '>
              <div class='flex bg-green-500 border p-2 rounded-full max-w-max gap-2 mb-5'>
                  <img src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/solutions/icons/outsourced_interviews.svg" alt="logo" />
                  <span class="text-black">Save 90% of hiring bandwidth</span>
              </div>
              <h1 class='text-2xl ml-10 mb-5 text-center'>For <span class='font-bold'>Companies</span></h1>
         </div>
          <p className='text-center mb-10'>Conduct interviews asynchronously on Intervue's platform by vetted interviewers. A detailed report of the candidate's performance is available within 5 minutes</p>
          <div className="flex justify-center items-center">
              <Link to="/CompanyLogin">
                <button className='border bg-green-600 self-content p-2 w-40 text-white font-bold mb-5 cursor-pointer flex items-center justify-center'>
                  Login
                </button>
              </Link>
         </div>
          <Link to="/CompanySignup"><p className='text-center mb-10'>Don't have an account? <span className='text-green-600 font-bold'>Register</span></p></Link>
          <span className='text-center'>Need help?</span>
          <a href="https://meetings.hubspot.com/nitin-sreekumar/test?__hstc=241868378.1914b522c3b179c8cc5b9c4eeb86fe3b.1718256239483.1720668197357.1720697742593.46&__hssc=2418" className='text-center font-bold'>Contact Sales</a>
        </div>
        
    </div>
  )
}

export default CompanyLoginSignup