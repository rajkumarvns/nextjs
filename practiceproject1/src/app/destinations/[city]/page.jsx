"use client";
import { useParams } from "next/navigation";
import React from "react";

function page(params) {
  const { city } = useParams();
  return <div className="text-white w-[50%]">{city} is the beautiful city</div>;
}

export default page;
