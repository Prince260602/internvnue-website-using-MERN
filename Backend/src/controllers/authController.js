import { User } from '../models/UserSchema.js'; 
import sendEmail from '../config/sendEmail.js';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import jwt from 'jsonwebtoken';
import {createError} from "../config/error.js"
import dotenv from 'dotenv';

dotenv.config();

console.log("SESSION_SECRET_KEY:", process.env.SESSION_SECRET_KEY);
// User Registration
export const register = async (req, res, next) => {
  try {
    const { username, email, password, mobileNumber } = req.body;

    // Validate required fields
    if (!(username && email && password && mobileNumber)) {
      return next(createError(400, 'Data not formatted properly'));
    }

    // Check if email is already in Database
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).send('Email already exists, try registering with a new email');
    }

    // Check if username is already in Database
    const usernameExist = await User.findOne({ username });
    if (usernameExist) {
      return res.status(400).send('Username already exists, try registering with a new username');
    }

    // Check if mobile number is already in Database
    const mobileExist = await User.findOne({ mobileNumber });
    if (mobileExist) {
      return res.status(400).send('Mobile number already exists, try registering with a new mobile number');
    }

    // Generate salt to hash password
    const salt = bcrypt.genSaltSync(10);

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobileNumber,
    });

    // Save user to the database
    await newUser.save();

    res.status(200).json({ message: 'User has been created' });
    console.log("User has been created");
  } catch (err) {
    next(createError(404, err));
  }
};

// User Login
// User Login
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return next(createError(404, 'User not found'));
    }

    // Check if the password is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return next(createError(400, 'Invalid email or password'));
    }

    // Prepare data to send back to the client
    const { password: userPassword, ...otherDetails } = user._doc;
    const token = jwt.sign({ userId: user._id }, process.env.SESSION_SECRET_KEY, { expiresIn: '5h' });

    // Set the token in a cookie
    res.cookie('token_info', token, { maxAge: 900000, httpOnly: true });

    // Send response with user details (excluding password) and token
    res.status(200).json({ details: { ...otherDetails } });
    console.log("Loggged in successfully");
  } catch (error) {
    next(createError(400, error));
  }
};


export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    console.log(req.body.email)
    const resetToken = uuidv4(); 
    console.log(resetToken);
    const hashedToken = await bcrypt.hash(resetToken, 12); 
    console.log(hashedToken);

    user.resetPasswordToken = hashedToken;
    user.resetPasswordExpire = Date.now() + 10 * 60 * 1000; 
    await user.save();


    // const resetUrl = `http://localhost:5173/passwordreset/${resetToken}`;

    const resetUrl = `http://localhost:5173/CandidateResetPassword/${resetToken}`;
    


    console.log(resetUrl);

    const message = `
      <h1>You have requested a password reset</h1>
      <p>Please go to this link to reset your password</p>
      <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
    `;

    try {
      await sendEmail({
        to: user.email,
        subject: 'Password Reset Request',
        text: message,
      });
      res.status(200).json({ message: 'Email sent' });
    } 
    catch (error) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpire = undefined;
      await user.save();

      res.status(500).json({ message: 'Email could not be sent' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const resetPassword = async (req, res) => {
  const { resetToken, password } = req.body;

  console.log(`Received reset token: ${resetToken}`);
  console.log(`Received new password: ${password}`);

  try {
    const user = await User.findOne({
      resetPasswordExpire: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    const isMatch = await bcrypt.compare(resetToken, user.resetPasswordToken); 

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid token' });
    }

    user.password = await bcrypt.hash(password, 12);
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save();

    res.status(200).json({ message: 'Password reset successful' });
    console.log('Password reset successful');
  } catch (error) {
    console.error(`Error resetting password: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
};
