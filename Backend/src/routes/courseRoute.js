import express from "express";
const router = express.Router();
import {Course} from "../models/CoursesSchema.js"

// Create a new course
router.post("/create", async (req, res) => {
  console.log(req.body)
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
    console.log("new Course Added successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all courses
router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a course by ID
router.get("/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a course by ID
router.put("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a course by ID
router.delete("/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
    console.log("Course deleted successfully");
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
