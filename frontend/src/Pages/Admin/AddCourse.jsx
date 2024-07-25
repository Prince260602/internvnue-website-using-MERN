import React,{useState} from 'react';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddCourse = () => {
    const[values, setValues] = useState({
        courseName: "",
        courseDescription: "",
        courseImage: "",
        courseDuration: "",
        courseInstructor: "",
        coursePrice: "",
        coursePublished: "",
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        console.log(e.target.value)
       setValues(prev => ({
        ...prev, [e.target.name] : e.target.value
       }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8800/api/courses/create" , values)
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log(err)
        })
        
    }

    return (
      <div className="shadow-custom md:max-w-4xl max-w-xs mt-20 h-full mx-auto ml-5  mr-5 pb-20">
        <h1 className='flex align-center text-3xl font-bold items-center justify-center pt-5 pb-5'>Add Course</h1>
        <form className='flex flex-wrap gap-10 items-center align-center justify-center pl-5 pt-10' onSubmit={handleSubmit}>
          <div className='flex flex-col w-80'>
            <label htmlFor='courseName' className='flex items-center gap-10 font-bold'>Course Name</label>
            <input type="text" placeholder='Enter Course Name' id="courseName"className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="courseName"/>
          </div>
          <div className='flex flex-col w-80'>
            <label htmlFor='courseDesc' className='flex items-center gap-10 font-bold'>Course Description</label>
            <input type="textarea" placeholder='Enter Course Description' id="courseDesc" className='w-full border-b broder-black-600 p-2' onChange={handleChange} name="courseDescription" />
          </div>
          <div className='flex flex-col w-80'>
            <label htmlFor='courseImg' className='flex items-center gap-10 font-bold'>Course Image</label>
            <input type="file" placeholder='Enter Course Image URL' id="courseImg" className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="courseImage"/>
          </div>
          <div className='flex flex-col w-80'>
            <label htmlFor='courseDuration' className='flex items-center gap-10 font-bold'>Course Duration </label>
            <input type="number" placeholder='Enter Course Duration' id="courseDuration" className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="courseDuration"/>
          </div>
          <div className='flex flex-col w-80'>
            <label htmlFor='courseInstructor' className='flex items-center gap-10 font-bold'>Course Instructor</label>
            <input type="text" placeholder='Enter Course Instructor' id="courseInstructor" className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="courseInstructor"/>
          </div>
          <div className='flex flex-col w-80 '>
            <label htmlFor='coursePrice' className='flex items-center gap-10 font-bold'>Course Price (₹)</label>
            <input type="text" placeholder='Enter Course Price' id="coursePrice" className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="coursePrice"/>
          </div>
          <div className='flex flex-col w-80 '>
            <label htmlFor='coursePublished' className='flex items-center gap-10 font-bold'>Course Published Date</label>
            <input type="text" placeholder='Enter Course Published Date' id="coursePublished" className='border-b broder-black-600 w-full p-2' onChange={handleChange} name="coursePublished"/>
          </div>
          <button type="submit" className='border-none bg-green-500 p-4 w-40 font-bold text-lg rounded-lg text-white'>Send</button>
        </form>
      </div>
    );
  }
  
  export default AddCourse;
  