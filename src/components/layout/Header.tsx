"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/solutions", label: "Solutions" },
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/jobs", label: "Careers" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-navy/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center group-hover:bg-brand-blue-light transition-colors">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-white font-bold text-lg tracking-tight">
              TenX<span className="text-brand-blue">Labs</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-brand-gray hover:text-white text-sm font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
            >
              Start a Project
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-brand-gray hover:text-white transition-colors p-1"
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
          "md:hidden bg-brand-navy border-t border-white/5 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block text-brand-gray hover:text-white text-sm font-medium py-2 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-medium px-4 py-2 rounded-lg text-center transition-colors mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
