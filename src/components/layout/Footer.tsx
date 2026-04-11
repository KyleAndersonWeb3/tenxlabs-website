import Link from "next/link";
import { Zap } from "lucide-react";

const footerLinks = {
  Services: [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/app-development", label: "App Development" },
    { href: "/services/software-engineering", label: "Software Engineering" },
    { href: "/services/ai-integration", label: "AI Integration" },
    { href: "/services/cloud-infrastructure", label: "Cloud Infrastructure" },
    { href: "/services/digital-strategy", label: "Digital Strategy" },
  ],
  Company: [
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/jobs", label: "Careers" },
    { href: "/blog", label: "Blog" },
    { href: "/resources", label: "Resources" },
  ],
  Connect: [
    { href: "/contact", label: "Contact Us" },
    { href: "https://twitter.com/tenxlabs", label: "Twitter" },
    { href: "https://linkedin.com/company/tenxlabs", label: "LinkedIn" },
    { href: "https://github.com/tenxlabs", label: "GitHub" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-navy border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                TenX<span className="text-brand-blue">Labs</span>
              </span>
            </Link>
            <p className="text-brand-gray text-sm leading-relaxed max-w-xs">
              We build what scales. Full-stack development, mobile apps, AI
              integration, and cloud infrastructure for companies that mean business.
            </p>
            <div className="mt-6">
              <p className="text-brand-gray text-xs">Newsletter</p>
              <form className="mt-2 flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white placeholder:text-brand-gray focus:outline-none focus:border-brand-blue transition-colors"
                />
                <button
                  type="submit"
                  className="bg-brand-blue hover:bg-brand-blue-light text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white text-sm font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-brand-gray hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-brand-gray text-xs">
            © {new Date().getFullYear()} TenXLabs. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-brand-gray hover:text-white text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-brand-gray hover:text-white text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
