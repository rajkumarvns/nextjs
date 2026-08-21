"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("Raj");
  return <>Home 2 {name}</>;
}
