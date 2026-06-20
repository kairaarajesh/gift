import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "./database/db.js";
import cors from "cors";


// api url
import kycRoutes from "./routes/kycRoutes.js";

// giftCard
import giftcardRoutes from "./routes/giftcardRoutes.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000; 


app.listen(port, async () => {
    try {
        await connectDB();
        // console.log(`Server is running on port  ${port}`);
    }catch(error) {
         console.error("Database connection error:", error);
    }
});

app.use(express.static("."));
app.use(cors());
app.listen(4000, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.json());


app.use("/api/kyc", kycRoutes);
// gift
app.use("/api/gift", giftcardRoutes);