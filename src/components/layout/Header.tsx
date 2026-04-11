"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/jobs", label: "Careers" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[70px]">

          {/* Logo — far left */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-9 h-9 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-blue-light transition-colors">
              {/* Simple T icon for TenXLabs */}
              <span className="text-white font-black text-lg leading-none">T</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">
              TenXLabs
            </span>
          </Link>

          {/* Desktop Nav — center */}
          <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#a0a0a0] hover:text-white text-[15px] font-medium transition-colors whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA — far right */}
          <div className="hidden lg:flex items-center flex-shrink-0">
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue-light text-white text-[15px] font-semibold px-6 py-2.5 rounded-lg transition-colors whitespace-nowrap"
            >
              Start a Discussion
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden text-[#a0a0a0] hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden bg-[#0a0a0a] border-t border-white/5 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-[#a0a0a0] hover:text-white text-[15px] font-medium py-3 border-b border-white/5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-brand-blue hover:bg-brand-blue-light text-white text-[15px] font-semibold px-6 py-3 rounded-lg text-center transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Start a Discussion
          </Link>
        </div>
      </div>
    </header>
  );
}
