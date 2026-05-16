import React from "react";
import { 
  Facebook, 
  Globe, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-12 md:py-20">
      <div className="mx-auto grid max-w-[1280px] gap-10 border-b border-[#E2E8F0] pb-12 md:grid-cols-2 md:gap-16 md:pb-16 lg:grid-cols-4 lg:gap-8">
        
        {/* COLUMN 1: Brand & Socials */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <h3 className="font-Montserrat text-2xl font-bold text-[#0F172A]">
            Acquirely
          </h3>
          <p className="font-opensans mt-4 text-base leading-7 text-[#64748B] md:mt-5">
            Building growth systems that compound. Performance marketing for modern brands.
          </p>
          
          {/* Social Icons */}
          <div className="mt-6 flex gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#0F172A] transition hover:bg-[#E2E8F0]">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#0F172A] transition hover:bg-[#E2E8F0]">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-[#0F172A] transition hover:bg-[#E2E8F0]">
              <Facebook className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="lg:ml-auto">
          <h4 className="font-opensans text-lg font-bold text-[#0F172A]">Quick Links</h4>
          <div className="mt-4 space-y-4 text-base text-[#64748B] md:mt-5">
            <p className="cursor-pointer transition hover:text-[#0F172A]">Done For You</p>
            <p className="cursor-pointer transition hover:text-[#0F172A]">About Us</p>
            <p className="cursor-pointer transition hover:text-[#0F172A]">Case Studies</p>
            <p className="cursor-pointer transition hover:text-[#0F172A]">Contact</p>
          </div>
        </div>

        {/* COLUMN 3: Legal */}
        <div className="md:ml-20">
          <h4 className="font-opensans text-lg font-bold text-[#0F172A]">Legal</h4>
          <div className="mt-4 space-y-4 text-base text-[#64748B] md:mt-5">
            <p className="cursor-pointer transition hover:text-[#0F172A]">Terms & Conditions</p>
            <p className="cursor-pointer transition hover:text-[#0F172A]">Privacy Policy</p>
          </div>
        </div>

        {/* COLUMN 4: Contact */}
        <div>
          <h4 className="font-opensans text-lg font-bold text-[#0F172A]">Contact</h4>
          <div className="mt-4 space-y-5 text-base text-[#64748B] md:mt-5">
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-[#0052FF]" />
              <p>+91 90875 63210</p>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-[#0052FF]" />
              <p>www.acquirely.in</p>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-[#0052FF]" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mx-auto mt-8 flex max-w-[1280px] flex-col items-center justify-between gap-4 text-center text-sm text-[#94A3B8] md:flex-row md:text-left">
        <p>© 2025 Acquirely. All rights reserved.</p>
        <p>Built for Growth.</p>
      </div>
    </footer>
  );
}