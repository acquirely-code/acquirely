"use client"

import React, { useState } from "react";
import { Montserrat, Open_Sans } from "next/font/google";
import Image from "next/image";
import logo from "@/app/assests/acquirelyblack.png";
import { Menu, X } from "lucide-react";
import Link from "next/link";

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
    <nav className={`${montserrat.variable} font-Montserrat relative z-50 rounded-[10px] border border-gray-200 bg-white/60 shadow-[0_0_40px_rgba(99,102,241,0.15),0_4px_24px_rgba(37,99,235,0.1)] backdrop-blur-md`}>
      
      {/* Main Navbar Bar */}
      <div className="flex items-center justify-between px-6 py-4 md:px-8">
        
        {/* Logo */}
        <Link href="/homepreview">
          <Image src={logo} alt="Acquirely Logo" className="h-6 w-auto md:h-8" />
        </Link>

        {/* Desktop Links & Button */}
        <div className="hidden items-center gap-8 lg:flex">
          <div className="mr-6 flex items-center gap-8">
            <Link href="/done-for-you" className="text-[20px] text-[#0F172A] transition hover:text-[#0052FF]">
              Done For You
            </Link>
            <Link href="/case-studies" className="text-[20px] text-[#0F172A] transition hover:text-[#0052FF]">
              Case Studies
            </Link>
            <Link href="/aboutuspreview" className="text-[20px] text-[#0F172A] transition hover:text-[#0052FF]">
              About Us
            </Link>
          </div>

          <button className="rounded-[8px] bg-[#0052FF] px-[24px] py-[12px] text-[16px] font-bold text-white shadow-[0px_10px_15px_-3px_rgba(0,82,255,0.2),0px_4px_6px_-4px_rgba(0,82,255,0.2)] transition hover:scale-[1.02] hover:bg-blue-700">
            Book a Meeting
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="p-2 text-[#0F172A] lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-full mt-2 w-full rounded-[10px] border border-gray-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-6">
            <Link 
              href="/done-for-you" 
              className="text-lg font-medium text-[#0F172A] transition hover:text-[#0052FF]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Done For You
            </Link>
            <Link 
              href="/case-studies" 
              className="text-lg font-medium text-[#0F172A] transition hover:text-[#0052FF]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Case Studies
            </Link>
            <Link 
              href="/aboutuspreview" 
              className="text-lg font-medium text-[#0F172A] transition hover:text-[#0052FF]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <button 
              className="mt-2 w-full rounded-[8px] bg-[#0052FF] px-6 py-4 text-base font-bold text-white shadow-[0_10px_15px_-3px_rgba(0,82,255,0.2)] active:scale-95"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book a Meeting
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}