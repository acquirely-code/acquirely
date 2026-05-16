"use client"

import React, { useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import Image from "next/image";
import logo from "@/app/assests/logo.png";
import { Menu, X } from "lucide-react"; // Imported for mobile menu
import Link from "next/link";``

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className={`font-Montserrat relative rounded-[10px] border border-white/10 bg-white/5 shadow-[0_0_40px_rgba(99,102,241,0.15),0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md`}>
      {/* Main Navbar Bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-6 md:py-5">
        {/* Logo */}
        <Link href={"/homepreview"}>
        <Image src={logo} alt="Acquirely Logo" className="h-6 w-[90px] md:h-8 md:w-[120px]" />
        </Link>

        {/* Desktop Links & Button */}
        <div className="hidden font-Montserrat items-center gap-8 lg:flex">
          <div className="flex items-center mr-6 gap-10 font-montserrat">
            <Link href="done-for-you" className={`${montserrat.variable} text-[17px] text-white/90 transition hover:text-white`}>
              Done For You
            </Link>
            <Link href="case-studies" className={`${montserrat.variable} text-[17px] text-white/90 transition hover:text-white`}>
              Case Studies
            </Link>
            <Link href="/aboutuspreview" className={`${montserrat.variable} text-[17px] text-white/90 transition hover:text-white`}>
              About Us
            </Link>
          </div>

          <button className="rounded-lg bg-[#0052FF] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_15px_-3px_rgba(0,82,255,0.2)] transition hover:scale-[1.02]">
            Book a Meeting
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="p-2 text-white lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full mt-2 w-full rounded-[10px] border border-white/10 bg-[#1A1560]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden z-50">
          <div className="flex flex-col gap-6 font-montserrat">
            <a href="#" className={`${montserrat.variable} text-lg font-medium text-white/90 transition hover:text-white`}>
              Done For You
            </a>
            <a href="#" className={`${montserrat.variable} text-lg font-medium text-white/90 transition hover:text-white`}>
              Case Studies
            </a>
            <a href="#" className={`${montserrat.variable} text-lg font-medium text-white/90 transition hover:text-white`}>
              About Us
            </a>
            <button className="mt-2 w-full rounded-lg bg-[#0052FF] px-6 py-4 text-base font-bold text-white shadow-[0_10px_15px_-3px_rgba(0,82,255,0.2)] active:scale-95">
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}