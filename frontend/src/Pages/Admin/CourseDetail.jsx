// CourseDetail.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8800/api/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      })
      .catch((error) => {
        console.error("Error fetching course details:", error);
      });
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-gray-100 rounded-md shadow-md">
      <img
        src={course.courseImage || "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_640.png"}
        alt={course.courseName}
       className="object-contain object-center w-full h-72 m-4 rounded-t-md"
      />



      <h2 className="text-3xl font-semibold text-gray-800 mt-4">{course.courseName}</h2>
      <p className="text-lg text-gray-700 mt-2">Price: ${course.coursePrice}</p>
      <p className="text-lg text-gray-700 mt-2">Duration: {course.courseDuration}</p>
      <p className="text-lg text-gray-700 mt-2">Instructor: {course.courseInstructor}</p>
      <p className="text-lg text-gray-700 mt-2">Published: {new Date(course.coursePublished).toLocaleDateString()}</p>
      <p className="text-lg text-gray-700 mt-2">Description: {course.courseDescription}</p>
    </div>
  );
};

export default CourseDetail;
