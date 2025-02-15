import mongoose from "mongoose";
import 'dotenv/config'
const connectDB= async ()=>{

    mongoose.connection.on('connected', ()=>{
        console.log("MongoDB connected succesfully.")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}


export default connectDB;