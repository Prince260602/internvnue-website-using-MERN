


import React, { useState } from "react";
import axios from "axios";
import "./../../css/pages/UpdateCourse.css";

const UpdateCourse = ({ course, onClose, onUpdate }) => {
  const [updatedCourse, setUpdatedCourse] = useState(course);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedCourse((prevCourse) => ({ ...prevCourse, [name]: value }));
  };

  const validate = () => {
    let tempErrors = {};
    if (!updatedCourse.courseName) tempErrors.courseName = "Course Name is required";
    if (!updatedCourse.coursePrice || updatedCourse.coursePrice <= 0)
      tempErrors.coursePrice = "Valid Course Price is required";
    if (!updatedCourse.courseDuration) tempErrors.courseDuration = "Course Duration is required";
    if (!updatedCourse.courseInstructor) tempErrors.courseInstructor = "Course Instructor is required";
    if (!updatedCourse.courseDescription) tempErrors.courseDescription = "Course Description is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleUpdate = async () => {
    if (!validate()) return;

    try {
      const response = await axios.put(
        `http://localhost:8800/api/courses/${course._id}`,
        updatedCourse
      );
      console.log("Course updated successfully");
      onUpdate(response.data);
      onClose();
    } catch (error) {
      console.error("Error updating course:", error);
    }
  };

  return (
    <div className="update-course-container">
      <h2 className="text-xl font-bold mb-4">Update Course</h2>
      <div className="form-group">
        <label className="block mb-2">Course Name</label>
        <input
          type="text"
          name="courseName"
          value={updatedCourse.courseName}
          onChange={handleChange}
          className="input-field"
        />
        {errors.courseName && <p className="error-text">{errors.courseName}</p>}
      </div>
      <div className="form-group">
        <label className="block mb-2">Course Price</label>
        <input
          type="number"
          name="coursePrice"
          value={updatedCourse.coursePrice}
          onChange={handleChange}
          className="input-field"
        />
        {errors.coursePrice && <p className="error-text">{errors.coursePrice}</p>}
      </div>
      <div className="form-group">
        <label className="block mb-2">Course Duration</label>
        <input
          type="text"
          name="courseDuration"
          value={updatedCourse.courseDuration}
          onChange={handleChange}
          className="input-field"
        />
        {errors.courseDuration && <p className="error-text">{errors.courseDuration}</p>}
      </div>
      <div className="form-group">
        <label className="block mb-2">Course Instructor</label>
        <input
          type="text"
          name="courseInstructor"
          value={updatedCourse.courseInstructor}
          onChange={handleChange}
          className="input-field"
        />
        {errors.courseInstructor && <p className="error-text">{errors.courseInstructor}</p>}
      </div>
      <div className="form-group">
        <label className="block mb-2">Course Description</label>
        <textarea
          name="courseDescription"
          value={updatedCourse.courseDescription}
          onChange={handleChange}
          className="input-field"
        />
        {errors.courseDescription && <p className="error-text">{errors.courseDescription}</p>}
      </div>
      <div className="form-actions">
        <button
          onClick={handleUpdate}
          className="update-button"
        >
          Update
        </button>
        <button
          onClick={onClose}
          className="cancel-button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default UpdateCourse;
