
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './src/routes/userRoute.js';
import InterviewExpertRoutes from "./src/routes/InterviewExpertsRoute.js"
import cors from 'cors';
import express from "express";
import courseRoutes from "./src/routes/courseRoute.js";
import errorMiddleware from "./src/middlewares/error-middlewares.js";
import connectDb from "./src/config/db..js"



dotenv.config();

const app = express();
const PORT = 8800;

// Connect to MongoDB
connectDb();

// app.use(cors())
app.use(cors({credentials: true, origin: 'http://localhost:5173'}));
app.use(express.json());




// Error middleware
app.use(errorMiddleware);

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})


// middlewares
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes );
app.use("/api/interviewExpert", InterviewExpertRoutes)
app.use("/api/courses", courseRoutes);


app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "something went wrong";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})




app.listen(PORT, (err) => {
  if (err) {
    console.log("Error in server setup");
  }
  console.log("Server listening on Port", PORT);
});

