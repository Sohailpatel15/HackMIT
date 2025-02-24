import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LoaderWrapper from "@/components/LoaderWrapper";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HackMIT WPU | 2025",
  description: "HackMIT WPU | 2025",
};

export default function RootLayout({ children }) {

  const pages = [
    {title: 'Home', url: '/'},
    {title: 'Conveners', url: '/conveners'},
    {title: 'Tracks', url: '/tracks'},
    {title: 'About Us', url: '/about-us'},
  ]
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <LoaderWrapper />
       <Navbar pages={pages}/>
           {children}
      </body>
    </html>
  );
}
