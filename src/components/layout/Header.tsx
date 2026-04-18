"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const navItems = [
  {
    label: "About Us",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/jobs" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Software Development", href: "/services/software-engineering" },
      { label: "Mobile App Development", href: "/services/app-development" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "AI Development", href: "/services/ai-development" },
      { label: "SaaS Development", href: "/services/saas-development" },
    ],
  },
  {
    label: "Industries",
    href: "/solutions",
    children: [
      { label: "HealthTech", href: "/solutions" },
      { label: "EdTech", href: "/solutions" },
      { label: "Logistics", href: "/solutions" },
      { label: "Fintech", href: "/solutions" },
      { label: "E-Commerce", href: "/solutions" },
      { label: "Real Estate", href: "/solutions" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Resources",
    href: "/blog",
    children: [
      { label: "Blog", href: "/blog" },
      { label: "FAQ", href: "/#faq" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-center gap-3">
            <img src="/tenxlogo.jpg" alt="TenXLabs" className="h-14 w-auto" />
            <span className="text-[18px] font-bold tracking-tight">
              <span className="text-white">Ten</span>
              <span className="text-[#0057ff]">X</span>
              <span className="text-[#22c55e]">Labs</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-1 text-[#aaa] hover:text-white text-[14px] font-medium px-3 py-2 rounded-md hover:bg-white/5 transition-all"
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
                </Link>
                {item.children && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 bg-[#111] border border-white/10 rounded-xl shadow-2xl py-2 min-w-[210px] z-50">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-[13px] text-[#aaa] hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="bg-[#0057ff] hover:bg-[#0048d4] text-white text-[14px] font-semibold px-5 py-2.5 rounded-lg transition-colors"
            >
              Let&apos;s Discuss Your Project
            </Link>
          </div>

          <button
            className="lg:hidden text-[#aaa] hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={cn(
        "lg:hidden bg-[#0a0a0a] border-t border-white/[0.06] overflow-hidden transition-all duration-300",
        mobileOpen ? "max-h-screen" : "max-h-0"
      )}>
        <div className="px-6 py-5 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="block text-[#aaa] hover:text-white text-[15px] font-medium py-2.5 transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block bg-[#0057ff] text-white text-[15px] font-semibold px-5 py-3 rounded-lg text-center mt-4"
            onClick={() => setMobileOpen(false)}
          >
            Let&apos;s Discuss Your Project
          </Link>
        </div>
      </div>
    </header>
  );
}
