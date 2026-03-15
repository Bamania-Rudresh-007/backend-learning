import mongoose from "mongoose"

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_KEY)
         console.log("MongoDB connected!!")
    }
    catch(error){
        console.error("Failed connecting to mongoDB: ", error)
        process.exit(1);
    }
}


export default connectDB;