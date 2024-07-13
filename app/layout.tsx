
import { Metadata } from "next";
import RootLayout from "./rootLayout"

export const metadata: Metadata = {
    title: "Portfolio",
  };
export default function AppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootLayout>{children}</RootLayout>;
}
