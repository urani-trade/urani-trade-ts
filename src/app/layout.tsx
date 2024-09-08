import "./globals.css";
import "./material-symbols.css";
import "splitting/dist/splitting.css";

import type { Metadata, Viewport } from "next";
import { dm_sans, red_hat_display } from "./fonts/config";

import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: "Welcome to Urani",
  description:
    "",
  icons: {
    icon: "/logos/space/space_logo_tiny.png",
  },
  metadataBase: new URL("https://urani.trade"),
  openGraph: {
    title: "Welcome to Urani",
    url: "https://urani.trade",
    siteName: "urani",
    images: ["/logos/icon.png"],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={dm_sans.variable}>
      <body className={red_hat_display.variable}>{children}</body>
      <GoogleAnalytics gaId="G-EPFPL5GD6D" />
    </html>
  );
}
