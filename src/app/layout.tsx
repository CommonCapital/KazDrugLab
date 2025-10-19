"use client";

import "./globals.css";
import React, { useEffect, useState } from "react";

import { SessionProvider } from "next-auth/react";
import { UserProvider } from "@/app/context/UserContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  
  return (
    <html lang="en">
      {/* <script src="https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js"></script> */}
      
      <body suppressHydrationWarning={true}>
        <SessionProvider>
          <UserProvider>
            {children}
          </UserProvider>
        </SessionProvider>
      </body>
    </html>
  );
}