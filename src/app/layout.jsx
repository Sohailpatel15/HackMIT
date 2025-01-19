import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar/Navbar";
import Footer from "@/app/components/Footer/Footer";
import urbanist from "@/app/components/font";

export const metadata = {
  title: "HackMitWpu-2025",
  description: "The official website for HackMitWpu-2025",
};

export default function RootLayout({ children }) {

  const pages = [
    {title: 'Home', url: '/'},
    {title: 'About Us', url: '/about-us'},
    {title: 'Tracks', url: '/tracks'},
    {title: 'Timeline', url: '/timeline'},
    {title: 'Conveners', url: '/conveners'},
    {title: 'Problem Statements', url: '/problem-statements'},
  ]

  return (
    <html lang="en">
      <body className={`antialiased ${urbanist.className}`}>
        <Navbar pages={pages}/>
        <main className=" mt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
