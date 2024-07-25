import express from 'express';
import { forgotPassword, resetPassword, register, login } from '../controllers/authController.js';
import {updateUser, getUser, deleteUser, getAllUser} from "../controllers/userController.js"



const router = express.Router();

// register user
router.post('/register', register)

// login user
router.post('/login', login)


// update user
router.put("/upgrade/:id", updateUser);


// delete user
router.delete("/:id", deleteUser);


// get user
router.get("/obtain/:id", getUser );


// getall users
router.get("/get",  getAllUser );


// forgotpassword
router.post('/forgot-password', forgotPassword);


// resetpassowrd
router.post('/reset-password', resetPassword);

export default router;
