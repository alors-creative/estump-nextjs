import { Lato } from "next/font/google";
import "@/app/_styles/globals.scss";
import localFont from "next/font/local";
import Header from "@/app/_components/header/Header";

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

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"]
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
        {children}
      </body>
    </html>
  );
}
