import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Naveen R | AI-Native Frontend Engineer",
  description:
    "AI-Native Frontend Engineer with 3+ years of experience shipping production-grade web applications across Fintech, FSM, EdTech, and Gaming domains. React.js specialist, TypeScript expert, performance-focused engineer.",
  keywords: [
    "Naveen R",
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AI-Native Engineer",
    "Bangalore",
    "India",
    "Full Stack JavaScript",
    "UI Engineer",
  ],
  authors: [{ name: "Naveen R" }],
  creator: "Naveen R",
  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Naveen R | AI-Native Frontend Engineer",
    description:
      "AI-Native Frontend Engineer with 3+ years of experience. React.js | TypeScript | Next.js | AI-assisted development.",
    siteName: "Naveen R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Naveen R | AI-Native Frontend Engineer",
    description: "AI-Native Frontend Engineer. React.js | TypeScript | Next.js",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="bg-background text-foreground antialiased overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
