"use client";
import "./globals.css";
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head />
      <body className="overflow-y-hidden">
      
      {children}

    </body>
    </html>
  );
}
