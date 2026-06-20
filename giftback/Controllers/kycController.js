import {kycs} from "../models/kyc.js";
import { uploadImage } from "../middleware/cloudinary.js";

export const  createKyc = async (req, res) => {
    try { 
        const { user_id , full_name ,dob ,gender, address, aadhaar_number, pan_number,status, rejection_reason} = req.body;


    let aadhaar_front = "";
    let aadhaar_back = "";
    let pan_image = "";
    let selfie_image = "";



        if(req.files?.aadhaar_front?.[0]){
            const result = await uploadImage(req.files.aadhaar_front[0]);

            if(!result.secure_url ){
               throw new Error("Image upload failed");
            }
            aadhaar_front = result.secure_url;
        }
        
         if(req.files?.aadhaar_back?.[0]){
            const result = await uploadImage(req.files.aadhaar_front[0]);
            if(!result.secure_url ){
               throw new Error("Image upload failed");
            }
            aadhaar_back = result.secure_url;
        }

         if(req.files?.pan_image?.[0]){
            const result = await uploadImage(req.files.aadhaar_front[0]);
            if(!result.secure_url ){
               throw new Error("Image upload failed");
            }
            pan_image = result.secure_url;
        }

         if(req.files?.selfie_image?.[0]){
            const result = await uploadImage(req.files.aadhaar_front[0]);
            if(!result.secure_url ){
               throw new Error("Image upload failed");
            }
            selfie_image = result.secure_url;
        }

        
        const kyces = await kycs.create({
            user_id,
            full_name,
            dob,
            gender,
            address,
            aadhaar_number,
            pan_number,
            status: "pending",
            aadhaar_front,
            aadhaar_back,
            pan_image,
            selfie_image,
        });

        const kycData = await kyces.save();

        return res.status(200).json({
        message: "Kyc Created successfully",
        data: kycData,
        });

    }catch(error){
        console.log("===",error)
        return res.status(500).json({
            Message : "Server Error"
        });
    }
};