import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Сonnected to mongo");
  } catch (err) {
    console.log(err.message);
    process.exitCode(1);
  }
};

export default connectDB;
