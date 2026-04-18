import Link from "next/link";
import { BrandName } from "@/components/ui/BrandName";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <img src="/tenxlogo.jpg" alt="TenXLabs" className="h-12 w-auto" />
              <span className="text-[18px] font-bold tracking-tight">
                <BrandName />
              </span>
            </Link>
            <p className="text-[#777] text-sm leading-relaxed max-w-xs mb-6">
              <BrandName /> is a full-service digital growth agency helping companies scale revenue
              through development, SEO, email marketing, outbound, and content.
            </p>
            <p className="text-[#555] text-xs font-semibold uppercase tracking-widest"><span className="text-[#e80101]">10x</span> Your Revenue. Autonomously.</p>
            <div className="flex items-center gap-4 mt-5">
              <Link href="https://linkedin.com/in/bullish" className="text-[#555] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </Link>
              <Link href="https://x.com/myclawagent" className="text-[#555] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                { href: "/services/web-development", label: "Web Development" },
                { href: "/services/app-development", label: "App Development" },
                { href: "/services/software-engineering", label: "Software Engineering" },
                { href: "/services/ai-integration", label: "AI Integration" },
                { href: "/services/cloud-infrastructure", label: "Cloud Infrastructure" },
                { href: "/services/digital-strategy", label: "Digital Strategy" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-5">Industries</h3>
            <ul className="space-y-3">
              {["Technology", "Logistics", "E-commerce", "Healthcare", "Finance"].map((item) => (
                <li key={item}>
                  <Link href="/solutions" className="text-[#666] hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white text-xs font-semibold uppercase tracking-[0.15em] mb-5">Company</h3>
            <ul className="space-y-3">
              {[
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/resources", label: "Resources" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-[#666] hover:text-white text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/[0.06] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[#444] text-xs">
            © {new Date().getFullYear()} <BrandName />. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-[#444] hover:text-white text-xs transition-colors">Privacy</Link>
            <Link href="/terms" className="text-[#444] hover:text-white text-xs transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
