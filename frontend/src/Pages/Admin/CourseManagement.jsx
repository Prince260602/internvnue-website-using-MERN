
// import { Link } from "react-router-dom";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { MdDeleteForever } from "react-icons/md";
// import { PiNotePencilBold } from "react-icons/pi";
// import UpdateCourse from "./UpdateCourse";

// const CourseManagement = () => {
//   const [courses, setCourses] = useState([]);
//   const [isUpdating, setIsUpdating] = useState(false);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8800/api/courses/")
//       .then((response) => {
//         setCourses(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching courses:", error);
//       });
//   }, []);

//   const deleteCourse = async (courseId) => {
//     try {
//       await axios.delete(`http://localhost:8800/api/courses/${courseId}`);
//       setCourses(courses.filter((course) => course._id !== courseId));
//       console.log("Course deleted successfully");
//     } catch (error) {
//       console.error("Error deleting course:", error);
//     }
//     alert("You Want to delete the course");
//   };

//   const handleUpdateCourse = (course) => {
//     setSelectedCourse(course);
//     setIsUpdating(true);
//   };

//   const updateCourseInState = (updatedCourse) => {
//     setCourses(courses.map(course => course._id === updatedCourse._id ? updatedCourse : course));
//     setIsUpdating(false);
//   };

//   return (
//     <>
//       <div className="p-4 h-auto w-screen bg-gray-300 flex flex-col items-center md:w-4/5 md:absolute md:right-0 md:min-h-screen">
//         <Link to="/AddCourse">
//           <button className="border-none p-2 bg-blue-700 rounded-lg text-white font-bold ">
//             Add Course
//           </button>
//         </Link>
//         <div>
//           <h1 className="mt-4 text-2xl font-semibold">All Courses</h1>
//         </div>
//         <div className="mt-6 flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3 ">
//           {courses.map((course) => (
//             <div
//               key={course._id}
//               className="h-76 w-64 m-4 text-base bg-slate-100 rounded-md flex flex-col p-4 shadow-lg lg:w-80 "
//             >
//               <img
//                 className="mt-2 h-16 w-16 bg-pink-300 rounded-full object-cover mx-auto"
//                 src={
//                   course.courseImage ||
//                   "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"
//                 }
//                 alt={course.name}
//               />
//               <h2 className="mt-4 text-left text-lg font-semibold text-gray-800">
//                 Course Name: {course.courseName}
//               </h2>
//               <h2 className="text-left text-lg font-semibold text-gray-800">
//                 Course Price: ${course.coursePrice}
//               </h2>
//               <h2 className="text-left text-lg font-semibold text-gray-800">
//                 Course Published at:{" "}
//                 {new Date(course.coursePublished).toLocaleDateString()}
//               </h2>
//               <h2 className="text-left text-lg font-semibold text-gray-800">
//                 Course Duration: {course.courseDuration}
//               </h2>
//               <h2 className="text-left text-lg font-semibold text-gray-800">
//                 Course Instructor: {course.courseInstructor}
//               </h2>
//               <h2 className="text-left text-lg font-semibold text-gray-800">
//                 Course Description: {course.courseDescription}
//               </h2>
//               <div className="mt-4 flex justify-evenly ">
//                 <MdDeleteForever
//                   className="h-10 w-10 text-red-500 cursor-pointer"
//                   onClick={() => deleteCourse(course._id)}
//                 />
//                 <PiNotePencilBold
//                   className="h-10 w-10 text-black-500 cursor-pointer"
//                   onClick={() => handleUpdateCourse(course)}
//                 />
//               </div>
//             </div>
//           ))}
//         </div>

//         {isUpdating && (
//           <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
//             <div className="relative bg-white p-8 rounded shadow-lg">
//               <UpdateCourse
//                 course={selectedCourse}
//                 onClose={() => setIsUpdating(false)}
//                 onUpdate={updateCourseInState}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default CourseManagement;


import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MdDeleteForever } from "react-icons/md";
import { PiNotePencilBold } from "react-icons/pi";
import UpdateCourse from "./UpdateCourse";

const CourseManagement = () => {
  const [courses, setCourses] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:8800/api/courses/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  }, []);

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`http://localhost:8800/api/courses/${courseId}`);
      setCourses(courses.filter((course) => course._id !== courseId));
      console.log("Course deleted successfully");
    } catch (error) {
      console.error("Error deleting course:", error);
    }
    alert("You want to delete the course");
  };

  const handleUpdateCourse = (course) => {
    setSelectedCourse(course);
    setIsUpdating(true);
  };

  const updateCourseInState = (updatedCourse) => {
    setCourses(courses.map(course => course._id === updatedCourse._id ? updatedCourse : course));
    setIsUpdating(false);
  };

  return (
    <>
      <div className="p-4 h-auto w-screen bg-gray-300 flex flex-col items-center md:w-4/5 md:absolute md:right-0 md:min-h-screen">
        <Link to="/AddCourse">
          <button className="border-none p-2 bg-blue-700 rounded-lg text-white font-bold">
            Add Course
          </button>
        </Link>
        <div>
          <h1 className="mt-4 text-2xl font-semibold">All Courses</h1>
        </div>
        <div className="mt-6 flex flex-wrap justify-center md:grid md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div
              key={course._id}
              className="max-w-xs rounded-md shadow-md bg-white dark:bg-gray-50 dark:text-gray-800 m-4"
            >
              <img
                src={course.courseImage || "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"}
                alt={course.courseName}
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
              />
              <div className="flex flex-col justify-between p-6 space-y-4">
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold text-gray-800">{course.courseName}</h2>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-2">
                    <MdDeleteForever
                      className="h-8 w-8 text-red-500 cursor-pointer"
                      onClick={() => deleteCourse(course._id)}
                    />
                    <PiNotePencilBold
                      className="h-8 w-8 text-gray-700 cursor-pointer"
                      onClick={() => handleUpdateCourse(course)}
                    />
                  </div>
                  <Link to={`/course/${course._id}`}>
                    <button
                      type="button"
                      className="p-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                    >
                      Read More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {isUpdating && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
            <div className="relative bg-white p-8 rounded shadow-lg">
              <UpdateCourse
                course={selectedCourse}
                onClose={() => setIsUpdating(false)}
                onUpdate={updateCourseInState}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CourseManagement;
