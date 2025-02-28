import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AuthProvider } from "@/context/AuthContext";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
  ],
});

const playfairDisplay = Playfair_Display({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Recipe Finder & Meal Planner | Easy & Healthy Meals",
  description:
    "Spoon & Fork: Your destination for mouthwatering recipes, cooking tips, and culinary inspiration. We make home cooking fun, easy, and accessible for food lovers of every skill level.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.className} ${playfairDisplay.className} antialiased`}
      >
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
        <Footer />
        <div id="modal-root" />
      </body>
    </html>
  );
}
