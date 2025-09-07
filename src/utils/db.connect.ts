import mongoose, { model } from "mongoose";
import dotenv, { config } from "dotenv"
config()
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("DB connect successfully");
  } catch (error: any) {
    console.log(error);
    process.exit(1);
  }
};

