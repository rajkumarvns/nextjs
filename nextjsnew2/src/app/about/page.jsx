import React from "react";
import Image from "next/image";
function page() {
  return (
    <div>
      about page
      <Image
        src={
          "https://images.unsplash.com/photo-1773332598289-ed0444ad1d6f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        alt="vercel img"
        width={100}
        height={100}
      />
    </div>
  );
}

export default page;
