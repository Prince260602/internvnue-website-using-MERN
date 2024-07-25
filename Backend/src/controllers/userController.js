import { User } from '../models/UserSchema.js';


// update user
export const updateUser = async (req, res, next) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
}

// delete user
export const deleteUser  = async(req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been deleted")
    } catch(error) {
        next(error);
    }
}

// get user
export const getUser = async(req, res, next) => {
    try {
       const user =  await User.findById(req.params.id).select("-password");
       res.status(200).json(user);
    } catch(error) {
        next(error)
    }
}

// getall user
export const getAllUser = async(req, res, next) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch(error) {
        next(error);
    }
}

