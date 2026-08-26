import User from "@/app/model/user.model";
import connectDB from "@/lib/db";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { name, email, password } = await request.json();
    await connectDB();

    let existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { message: "User Already Exist" },
        { status: 400 },
      );
    }
    if (password.length < 6) {
      return NextResponse.json(
        { message: "password must be atleast 6 character!" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: `Register error  ${error}` },
      { status: 500 },
    );
  }
}
