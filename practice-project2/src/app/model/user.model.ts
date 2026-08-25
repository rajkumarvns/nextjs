import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";
interface Iuser {
  _id?: mongoose.Types.ObjectId;
  name: string;
  image: string;
  email: string;
  password: string;
  createdAt?: Date;
  updatedAt?: Date;
}
name: {
  type: String;
  required: true;
}
email: {
  type: String;
  required: true;
  unique: true;
}
password: {
  type: String;
  required: true;
}
image: {
  type: String;
}

const userSchema = new mongoose.Schema<Iuser>({}, { timestamps: true });

// const User = mongoose.models.User || mongoose.model('User',userSchema)
const User = mongoose.models?.User || mongoose.model('User',userSchema)
export default User;