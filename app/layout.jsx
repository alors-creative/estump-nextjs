import { Inter } from "next/font/google";
import "@/app/_styles/globals.scss";
import localFont from "next/font/local";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";

const rosca = localFont({
  src: [
    {
      path: "./fonts/Rosca.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "./fonts/Rosca-Slant.woff",
      weight: "400",
      style: "italic"
    }
  ]
});

export const metadata = {
  title: "eStump 🏡",
  description: "This is eStump"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌳</text></svg>"
        />
      </head>
      <body className={`${rosca.className}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
