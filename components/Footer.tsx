import React from "react";
import { 
  Facebook, 
  Globe, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Phone 
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] px-5 py-12 md:py-16 font-sans">
      <div className="mx-auto grid max-w-[1024px] gap-10 border-b border-white/10 pb-10 md:grid-cols-2 md:gap-16 lg:grid-cols-4 lg:gap-8">
        
        {/* COLUMN 1: Brand & Socials */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-start">
          <h3 className="font-Montserrat text-[24px] font-bold text-[#6366F1]">
            Acquirely
          </h3>
          <p className="mt-4 text-[14px] leading-[24px] text-[#8B92A5] pr-4">
            Premium performance marketing for high-growth brands.
          </p>
          
          {/* Social Icons */}
          <div className="mt-6 flex gap-4 text-white">
            <a href="https://www.instagram.com/acquirely.in" className="transition hover:text-[#6366F1]" aria-label="Instagram">
              <Instagram className="h-[20px] w-[20px] stroke-[1.5]" />
            </a>
            <a href="https://www.facebook.com/" className="transition hover:text-[#6366F1]" aria-label="Facebook">
              <Facebook className="h-[20px] w-[20px] stroke-[1.5]" />
            </a>
            <a href="https://www.linkedin.com/company/acquirelydm/" className="transition hover:text-[#6366F1]" aria-label="LinkedIn">
              <Linkedin className="h-[20px] w-[20px] stroke-[1.5]" />
            </a>
          </div>
        </div>

        {/* COLUMN 2: Quick Links */}
        <div className="lg:ml-auto">
          <h4 className="font-Montserrat text-[16px] font-bold text-white">Quick Links</h4>
          <div className="mt-6 flex flex-col space-y-4 text-[14px] text-[#8B92A5]">
            <Link href="/ecommerce" className="transition hover:text-white">
              Ecommerce
            </Link>
            <Link href="/lead-gen" className="transition hover:text-white">
              Lead Gen
            </Link>
            <Link href="/about-us" className="transition hover:text-white">
              About Us
            </Link>
          </div>
        </div>

        {/* COLUMN 3: Legal */}
        <div className="lg:ml-8">
          <h4 className="font-Montserrat text-[16px] font-bold text-white">Legal</h4>
          <div className="mt-6 flex flex-col space-y-4 text-[14px] text-[#8B92A5]">
            <Link href="/terms-and-conditions" className="transition hover:text-white">
              Terms & Conditions
            </Link>
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* COLUMN 4: Contact */}
        <div className="lg:ml-auto">
          <h4 className="font-Montserrat text-[16px] font-bold text-white">Contact Us</h4>
          <div className="mt-6 flex flex-col space-y-4 text-[14px] text-[#8B92A5]">
            
            <div className="flex items-center gap-3">
              <MapPin className="h-[18px] w-[18px] text-[#2B7FFF] shrink-0" />
              <span>New Delhi, India</span>
            </div>
              
            <div className="flex items-center gap-3">
              <Phone className="h-[18px] w-[18px] text-[#2B7FFF] shrink-0" />
              <span>++1 236 877 9035</span>
            </div>

            <Link href="https://acquirely.in" className="flex items-center gap-3 transition hover:text-white group">
              <Globe className="h-[18px] w-[18px] text-[#2B7FFF] shrink-0" />
              <span className="group-hover:underline">https://acquirely.in/</span>
            </Link>
            
          </div>
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mx-auto mt-6 flex max-w-[1024px] items-center justify-center text-center text-[13px] text-[#8B92A5]">
        <p>© 2026 Acquirely. All rights reserved.</p>
      </div>
    </footer>
  );
}