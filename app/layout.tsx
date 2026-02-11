import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";

export const metadata: Metadata = {
  title: "Schultz Portfolio 2026",
  description: "Crafting brands and digital experiences",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/yxc0qqy.css" />
      </head>
      <body className="bg-bg text-fg font-body overflow-x-hidden">
        <Nav />
        {children}
      </body>
    </html>
  );
}
