import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ClerkProvider } from "@clerk/nextjs";
const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Scheduling",
  description: "Description Scheduling",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`overflow-x-hidden ${interSans.className}`}>
        <ClerkProvider>
          <Header />
          {children}
          <Footer />
        </ClerkProvider>
      </body>
    </html>
  );
}
