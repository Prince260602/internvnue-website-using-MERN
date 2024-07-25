import express from "express"
import { updateInterviewExpert, deleteInterviewExpert, createInerviewExpert, getAllInterviewExpert, getInterviewExpert } from "../controllers/InterviewExpertsController.js"

const router = express.Router()

// create InterviewExpert
router.post("/create", createInerviewExpert );

// update InterviewExpert
router.put("/update/:id", updateInterviewExpert);

// get InterviewExpert
router.get("/get/:id", getInterviewExpert);

// detete InterviewExpert
router.delete("/delete/:id", deleteInterviewExpert );

// getAll InterviewExpert
router.get("/getAll", getAllInterviewExpert);

export default router;