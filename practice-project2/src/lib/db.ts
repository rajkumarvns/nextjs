import mongoose from "mongoose";

let mongodbUrl = process.env.MONGODB_URL;
if (!mongodbUrl) {
  throw new Error("Mongodb url is not found.");
}

let cached = global.mongoose;
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const connectDB = async () => {
  if (cached.conn) {
    console.log("cached DB Connected");
    return cached.conn;
  }
  if (!cached.promise) {
    cached.promise = mongoose.connect(mongodbUrl).then((c) => c.connection);
  }
  try {
    cached.conn = await cached.promise;
  } catch (error) {
    throw error;
  }
  return cached.conn;
};
export default connectDB;
