import type { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/navbar/ResponsiveNav";

const rethinkSans = Rethink_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "App landing page",
  description: "NextJS-15 App landing page",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${rethinkSans.className} antialiased`}>
        <ResponsiveNav />
        {children}
      </body>
    </html>
  );
}
