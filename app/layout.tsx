import type { ReactNode } from "react";
import Navbar from "@/components/NavBar";
import "./globals.css";
import { exo2, orbitron } from "./fonts";

interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    //    after initializing our font with a variable,

    // we need to define that CSS variable globally

    // by adding it to the top-level "html" element.

    // Here we need to import our "orbitron" font,

    // and pass "orbitron.variable" as the CSS class.

    // Again, this will define the right CSS variable.
    <html lang="en" className={`${orbitron.variable} ${exo2.variable}`}>
      <body className="bg-orange-50 flex flex-col px-4 py-2 min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className=" grow py-3"> {children}</main>
        <footer className="border-t py-3 text-center text-xs">
          Game data and images courtesy of&nbsp;
          <a
            href="https://rawg.io/"
            target="_blank"
            className="text-orange-800 hover:underline"
          >
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
