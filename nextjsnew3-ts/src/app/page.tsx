"use client";
import Button from "@/Button";
import React, { ChangeEvent, useRef, useState } from "react";

function page() {
  const input = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
  };
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent) => {
    e.preventDefault();
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" ref={input} onChange={handleChange} />
        <button onClick={handleClick}>Click</button>
      </form>
    </div>
  );
}

export default page;
