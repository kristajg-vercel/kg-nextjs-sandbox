import type { Metadata } from "next";
import { VercelToolbar } from '@vercel/toolbar/next';
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KG's Next.js Sandbox",
  description: "A sandbox to play around with Nextjs and 3rd party features for learning & demo purposes!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <VercelToolbar />
    </html>
  );
}
