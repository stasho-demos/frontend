import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import "./globals.css";

const accent = process.env.NEXT_PUBLIC_ACCENT_COLOR ?? "#7dd3fc";

export const metadata: Metadata = {
  title: "Northbound",
  description:
    "Trail notes and route cards for the long ridges, kept by two people who walk them.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" style={{ "--accent": accent } as CSSProperties}>
      <body>
        <div className="shell">
          <nav className="nav">
            <a className="brand" href="/">
              <span className="mark" aria-hidden="true" />
              Northbound
            </a>
            <div className="nav-links">
              <a href="/">Routes</a>
              <a href="/field-notes/">Field notes</a>
            </div>
          </nav>
          {children}
          <footer>
            <span>Northbound, a small trail guide.</span>
            <span>Built as a static export. Served from IPFS.</span>
          </footer>
        </div>
      </body>
    </html>
  );
}
