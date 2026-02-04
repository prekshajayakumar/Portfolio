import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Background from "@/components/background/Background";

export const metadata: Metadata = {
  title: "Preksha Jayakumar | AI Engineer | Software Engineer",
  description: "AI projects: RAG, Deepfake Detection, Emotion Recognition, and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white antialiased">
        <Background />
        {children}
      </body>
    </html>
  );
}
