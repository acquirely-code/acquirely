import localFont from "next/font/local";

// Google Fonts, self-hosted from app/fonts/google (latin subset, variable weight: one file covers every weight).
// Loading them with next/font/google made Vercel builds fail at random: Google sometimes answers the build server
// with font URLs that have no file extension (fonts.gstatic.com/l/font?kit=...), which Next 14's loader can't
// handle ("Cannot read properties of null (reading '1')"). Local files never touch the network at build time.
//
// next/font needs one call per CSS variable name (with literal options), so each variable the pages use gets its
// own export. Files are refreshed from fonts.googleapis.com/css2 (the "latin" block) if a newer version is wanted.

// .ecom landing pages (ecommerce, lead-gen, publishers, homepage, thank-you pages)
export const ecomDisplay = localFont({ src: "../app/fonts/google/montserrat-latin.woff2", weight: "100 900", variable: "--font-ecom-display" });
export const ecomBody = localFont({ src: "../app/fonts/google/open-sans-latin.woff2", weight: "300 800", variable: "--font-ecom-body" });

// Navbar and the ecommerce calculator
export const montserrat = localFont({ src: "../app/fonts/google/montserrat-latin.woff2", weight: "100 900", variable: "--font-montserrat" });
export const openSans = localFont({ src: "../app/fonts/google/open-sans-latin.woff2", weight: "300 800", variable: "--font-open-sans" });

// /edtech
export const jakarta = localFont({ src: "../app/fonts/google/plus-jakarta-sans-latin.woff2", weight: "200 800", variable: "--font-jakarta" });