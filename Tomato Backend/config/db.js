import mongoose from "mongoose";

export const connectDB =async ()=> {
    await mongoose.connect('mongodb+srv://bhaveshs14sept:BIIT2002@cluster0.kj1gv8g.mongodb.net/Tomoto_foodDelivery_Website').then(()=>console.log("DB Connected"));
} 

