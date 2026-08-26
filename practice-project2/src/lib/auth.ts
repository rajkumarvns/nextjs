import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "./db";
import User from "@/app/model/user.model";
import bcrypt from "bcryptjs";

const authOptions: NextAuthOptions = {
  providers: [
    //how to login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        let email = credentials?.email;
        let password = credentials?.password;
        if (!email || !password) {
          throw new Error("email or password is not found");
        }
        await connectDB();
        let existUser = await User.findOne({ email });
        if (!existUser) {
          throw new Error("User Not Found");
        }
        let isMatch = await bcrypt.compare(password, existUser.password);
        if (!isMatch) {
          throw new Error("Incorrect Password");
        }
        return {
          id: existUser._id,
          name: existUser.name,
          email: existUser.email,
          image: existUser.image,
        };
      },
    }),
  ],
  callbacks: {},
  session: {},
  pages: {},
  secret: process.env.NEXTAUTH_SECRET,
};
export default authOptions;
