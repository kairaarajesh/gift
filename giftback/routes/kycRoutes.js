import express from "express";
import {createKyc} from "../Controllers/kycController.js";
import { brandMulter } from "../middleware/cloudinary.js";

const router = express.Router();

router.post("/create", brandMulter.fields([
    { name: "aadhaar_front", maxCount: 1 },
    { name: "aadhaar_back", maxCount: 1 },
    { name: "pan_image", maxCount: 1 },
    { name: "selfie_image", maxCount: 1 }
]),createKyc);

export default router;

