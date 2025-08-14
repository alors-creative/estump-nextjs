import { Inter } from "next/font/google";
import "@/app/_styles/globals.scss";
import localFont from "next/font/local";
import Header from "@/app/_components/header/Header";
import Footer from "@/app/_components/footer/Footer";

const rosca = localFont({
  src: [
    {
      path: "../fonts/Rosca.woff",
      weight: "400",
      style: "normal"
    },
    {
      path: "../fonts/Rosca-Slant.woff",
      weight: "400",
      style: "italic"
    }
  ]
});

export const metadata = {
  title:
    "eStump | Quick & Easy Tree Stump Removal by Trusted Local Specialists",
  description:
    "Get rid of stubborn tree stumps fast with eStump. We connect you to vetted, local stump removal experts for transparent pricing and hassle‑free cleanup. Submit your measurements, get a specialist in 48 hours, and enjoy a clean, beautiful yard."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className={`${rosca.className}`}>
        <Header />
        <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
