import mongoose from "mongoose";

const connectToMongoDB = async () => {
  const dbUri: string | undefined = process.env.MONGO_DB_URI;
  try {
    if (dbUri != undefined) {
      await mongoose.connect(dbUri);
      console.log("Connected to MongoDB database");
    }
  } catch (error: any) {
    console.log("Error connecting to DB", error.message);
  }
};

export default connectToMongoDB;
