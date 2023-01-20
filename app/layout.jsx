"use client";
import { AnalyticsWrapper } from "@/components/analytics";
import "./globals.css";
export default function RootLayout({ children }) {

  return (
    <html lang="en" className= " scroll-smooth" >
      <head />
      
      <body>
      {children}
      <AnalyticsWrapper />
    </body>
    
    </html>
  );
}
