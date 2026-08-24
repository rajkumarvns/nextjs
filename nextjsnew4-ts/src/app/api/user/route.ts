import { NextRequest, NextResponse } from "next/server";

//NextRequest NextResponse
export async function GET() {
  return NextResponse.json({
    name: "Raj",
    age: 24,
  });
}

// POST Request

// export async function POST(request: NextRequest) {
//   let { name, age, gender } = await request.json();
//   return NextResponse.json({
//     name,
//     age,
//     gender,
//   });
// }
export async function POST(request: NextRequest) {
  let { name, gender, age } = await request.json();
  return NextResponse.json({ name, gender, age });
}
