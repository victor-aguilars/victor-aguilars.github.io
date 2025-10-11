import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VAAS | Senior Software Engineer",
  description: "8+ years designing and scaling distributed systems, cloud-native applications, and high-throughput services. Strong experience with API design, performance optimization, and microservice architecture.",
  keywords: ["Software Engineer", "Distributed Systems", "Cloud Native", "Ruby on Rails", "Vue.js", "React", "Backend Engineering"],
  authors: [{ name: "VAAS" }],
  openGraph: {
    title: "VAAS | Senior Software Engineer",
    description: "8+ years designing and scaling distributed systems, cloud-native applications, and high-throughput services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
