// src/config/db.js
import mongoose from "mongoose" 
import dotenv from "dotenv"


dotenv.config()

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);  //   
        console.log("Connected to DB");
    } catch (error) {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    }
};

// module.exports = connectDb;
export default connectDb;


