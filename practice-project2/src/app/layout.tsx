import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Full Stack Project",
  description: "this is first project on the basis of Next",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
