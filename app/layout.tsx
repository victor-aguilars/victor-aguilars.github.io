import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "VAAS | Projects",
  description: "Next.js projects by Víctor Aguilar. Portfolio, experiments, and web applications.",
  keywords: ["Software Engineer", "Distributed Systems", "Cloud Native", "Ruby on Rails", "Vue.js", "React", "Backend Engineering", "Next.js"],
  authors: [{ name: "VAAS" }],
  openGraph: {
    title: "VAAS | Projects",
    description: "Next.js projects by Víctor Aguilar. Portfolio, experiments, and web applications.",
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
