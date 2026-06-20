import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_HOST)
        console.log("Database connected")
    }
    catch(error) {
        console.log(error)
        console.log("Database Not Connected");
       
    }
}

export default connectDB;