import { Bangers, Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import ConditionalFooter from "@/components/ConditionalFooter";
import ScrollToTop from "@/components/ScrollToTop";

// Bold comic-book display font for all headings - the "Spider-Man" voice
const bangers = Bangers({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  title: "Pathway — Learning Management System",
  description: "Learn at your own pace. A MERN-stack LMS built for real courses, real progress.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bangers.variable} ${inter.variable} antialiased`}>
        <AuthProvider>
          <Navbar />
          <div className="web-strand" />
          <main className="min-h-[calc(100vh-73px)]">{children}</main>
          <div className="web-strand" />
          <ConditionalFooter />
          <ScrollToTop />
        </AuthProvider>
      </body>
    </html>
  );
}

