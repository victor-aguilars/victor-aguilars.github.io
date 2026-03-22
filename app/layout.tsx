import type { Metadata } from "next";
import { Inter, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

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
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
