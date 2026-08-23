"use client";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const destination = ["Paris", "Tokyo", "NewYork"];
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center gap-6 text-white h-[calc(100vh-80px)]">
      <div className="text-xl">Choose Your Destination</div>
      <div className="flex flex-col gap-4">
        {destination.map((d, idx) => (
          <div
            key={idx}
            className="text-black font-bold text-2xl flex items-center justify-center rounded-2xl w-64 h-24 bg-white hover:opacity-[0.5]  transition-all"
            onClick={() => router.push(`/destinations/${d}`)}
          >
            {d}
          </div>
        ))}
      </div>
    </div>
  );
}

export default page;
