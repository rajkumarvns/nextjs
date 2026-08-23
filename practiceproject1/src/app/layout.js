import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600'], display: 'swap' })
export const metadata = {
  title: "Travel Guide Web",
  description: "Best Travel Guidence"
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.className} w-screen h-screen bg-black`}
    >
      
      <body >
      <Nav />  
      {children}</body>
    </html>
  );
}
