"use client";

import "./globals.css";
import "./material-symbols.css";
import "splitting/dist/splitting.css";

import { architype_bayer, dm_sans, red_hat_display } from "./fonts/config";

import Footer from "@/components/footer/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/header/Header";
import Link from "next/link";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body className={red_hat_display.variable}>
        <>
          <Header />
          <main className="flex flex-col min-h-screen items-center justify-center">
            <h2 className={`${architype_bayer.className} p-10 text-5xl md:text-8xl`}>
              500: unfortunately, something went wrong!
            </h2>

            <p>
              You can{" "}
              <button className="underline underline-offset-8" onClick={reset}>
                try again
              </button>{" "}
              or go back to our{" "}
              <Link className="underline underline-offset-8" href="/">
                home page
              </Link>
            </p>
          </main>
          <Footer />
        </>
      </body>
      <GoogleAnalytics gaId="G-EPFPL5GD6D" />
    </html>
  );
}
