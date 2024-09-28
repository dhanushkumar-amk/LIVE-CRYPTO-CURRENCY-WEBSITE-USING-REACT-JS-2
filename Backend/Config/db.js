import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://dhanushkumaramk:ENGuBaN2BcnZKYa1@cluster0.2z70k.mongodb.net/appName?retryWrites=true&w=majority");
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
    }
}

