import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Beijing New Materials Co., Ltd",
  description: "Production of protective materials for enterprises",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <LanguageProvider>
        <body className={inter.className}>{children}</body>
      </LanguageProvider>
    </html>
  );
}
