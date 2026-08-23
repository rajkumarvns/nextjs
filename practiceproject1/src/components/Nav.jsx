"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

function Nav() {
  const pathname = usePathname();
  return (
    <div className='w-full h-20 bg-white flex justify-between items-center px-4'>
        <div className='text-black font-bold text-2xl '>🌏Travel Guide</div>
        <ul className='flex justify-center items-center gap-5'>
          <Link href={"/"} className={pathname=="/"?"text-red-500":""}><li>Home</li></Link>
          <Link href={"/destinations"} className={pathname=="/destinations"?"text-red-500":""}><li>Destinations</li></Link>
          <Link href={"/contact"} className={pathname=="/contact"?"text-red-500":""}><li>Contact</li></Link>
        </ul>
    </div>
  )
}

export default Nav