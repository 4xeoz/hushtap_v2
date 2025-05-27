import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { DockNavigation } from "@/components/dock-navigation";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hushtap",
  description: "Hushtap is a hardware device that helps you disconnect from your phone and focus on the real world.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} antialiased`}
      >
        {children}
        <DockNavigation />
      </body>
    </html>
  );
}
