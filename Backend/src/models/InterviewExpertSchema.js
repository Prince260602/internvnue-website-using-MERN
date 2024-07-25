import mongoose, { Schema } from "mongoose";

const InterviewExpertSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    expertise: {
        type: String, 
        required: true,
        trim: true
    },
    experience: {
        type: Number,
        required: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
        trim: true
    },
    linkedInProfile: {
        type: String,
        required: true,
        trim: true,
        
    }
});

export const InterviewExpert = mongoose.model("InterviewExpert", InterviewExpertSchema);
