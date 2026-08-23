"use client";
import Button from "@/Button";
import React, { useState } from "react";

function page() {
  const [count, setCount] = useState<number>();
  function fn() {}

  return (
    <div>
      <Button data="Testing" action={fn} />
    </div>
  );
}

export default page;
