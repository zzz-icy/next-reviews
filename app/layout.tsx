import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";
interface LayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li>
                {/* client-side navigation */}
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/reviews">Reviews</Link>
              </li>
              <li>
                <Link href="/about" prefetch={false}>
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <main> {children}</main>
        <footer>
          Game data and images courtesy of&nbsp;
          <a href="https://rawg.io/" target="_blank">
            RAWG
          </a>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
