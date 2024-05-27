// Import the DM Sans font instead of Inter
import "./globals.css";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google"; // Import DM Sans font
import Providers from "./providers";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Configure DM Sans with desired subsets
const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Sam for New Hampshire",
  description: "Website for Sam for New Hampshire.",
  icons: {
    icon: [
      { url: "/favicon.ico" }, // Standard favicon
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <Providers>
          <main>
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
