import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connect to lantabur server');
    } catch (error) {
        console.log('Error connecting to MongoDB: ', error);
    }
}