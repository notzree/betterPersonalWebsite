"use client";
import { PageWrapper } from "@/components/page-wrapper";
import "./globals.css";
export default function RootLayout({ children }) {

  return (
    <html lang="en" className= " scroll-smooth" >
      <head />
      
      <body className="">
      
      {children}
      
    </body>
    
    </html>
  );
}
