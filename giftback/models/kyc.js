import mongoose  from "mongoose";

const kycSchema = new mongoose.Schema({
    user_id : {type : String , unique :true},
    full_name : {type : String },
    dob : {type : String},
    gender : {type: String, enum: ["Male","Female", "Other"],},
    address : {type : String},
    aadhaar_number : {type : String, default: true},
    pan_number : {type : String, default: true},
    aadhaar_front: {type: String, default: true},
    aadhaar_back: {type : String, default: true},
    pan_image : {type : String , default: true},
    selfie_image: {type: String, default: true},
    status :{type :String, enum : ["pending", "approved", "rejected"], default: "pending", },
    rejection_reason: {type: String, default:""}

},{
  timestamps: true});

export const kycs = mongoose.model("kycs", kycSchema);