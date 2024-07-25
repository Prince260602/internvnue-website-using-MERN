import mongoose, { Schema } from "mongoose";

const CourseSchema = new Schema({
    courseName: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        sparse:true,
        index:true
    },
    courseDescription: {
        type: String,
        required: true,
        trim: true
    },
    courseImage: {
        type: String,
        required: true,
        trim: true
    },
    courseDuration: {
        type: Number, 
        required: true
    },
    courseInstructor: {
        type: String,
        required: true,
        trim: true
    },
    coursePrice: {
        type: Number,
        required: true
    },
    coursePublished: {
        type: Date,
        default: Date.now
    }
});

export const Course = mongoose.model("Course", CourseSchema);
