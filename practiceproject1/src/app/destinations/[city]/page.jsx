"use client";
import { useParams } from "next/navigation";
import React from "react";
import praisImg from "@/assets/paris.jpg";
import tokyoImg from "@/assets/tokyo.jpg";
import nyImg from "@/assets/newyork.jpg";
import Image from "next/image";

function page(params) {
  const { city } = useParams();
  return (
    <div className="text-white w-[50%]">
      {city} is the beautiful city
      {city == "Paris" && (
        <Image src={praisImg} width={400} height={400} alt="Paris Image" />
      )}
      {city == "Tokyo" && (
        <Image src={tokyoImg} width={400} height={400} alt="Tokyo Image" />
      )}
      {city == "NewYork" && (
        <Image src={nyImg} width={400} height={400} alt="New York Image" />
      )}
    </div>
  );
}

export default page;
