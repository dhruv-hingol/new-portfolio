"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import Sidebar from "@/public/components/Sidebar";
import { useState } from "react";
import {
  CLOSE_SIDEBAR_WIDTH,
  OPEN_SIDEBAR_WIDTH,
} from "@/public/utils/constants";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <html lang="en">
      <body className={`${inter.className} light-theme`}>
        <NextUIProvider>
          <div className="w-screen h-screen flex">
            <div
              style={{
                width: isOpen ? OPEN_SIDEBAR_WIDTH : CLOSE_SIDEBAR_WIDTH,
                background: "#2B3A67",
              }}
            >
              <Sidebar />
            </div>
            <div className="flex-1">{children}</div>
          </div>
        </NextUIProvider>
      </body>
    </html>
  );
}
