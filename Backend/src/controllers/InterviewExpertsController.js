import { InterviewExpert } from "../models/InterviewExpertSchema.js";

// create interviewExpert
export const createInerviewExpert = async(req, res, next) => {
    const expert = new InterviewExpert(req.body);
    try{
        const newExpert = await expert.save()
        res.status(201).json("Interview Expert is created");
    } catch(err) {
        next(err)
    }
}

// get all 
export const getAllInterviewExpert = async(req, res, next) => {
    try{
        const experts = await InterviewExpert.find()
        res.status(200).json(experts);
    } catch(err) {
        next(err)
    }
}

// get 
export const getInterviewExpert = async(req, res, next) => {
    try{
        const expert =  await InterviewExpert.findById(req.params.id);
        res.status(200).json(expert);
    } catch (err) {
        next(err)
    }
}

// delete 
export const deleteInterviewExpert = async(req, res, next) => {
    try{
        await InterviewExpert.findByIdAndDelete(req.params.id)
        res.status(200).json("InterviewExpert has been deleted")
    } catch(err) {
        next(err)
    }
}

// update 
export const updateInterviewExpert = async(req, res, next) => {
    try{
        const updateExpert = await InterviewExpert.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true} )
        res.status(200).json(updateExpert);
    } catch(err) {
        next(err)
    }
}