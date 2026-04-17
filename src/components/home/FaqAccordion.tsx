"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Do you sign NDAs?",
    a: "Yes. We sign NDAs at the start of every engagement. All information, code, and documentation stay confidential and accessible only to the assigned team.",
  },
  {
    q: "What does the project process look like?",
    a: "We start with a discovery call and scoping session to define requirements, timeline, tech stack, and deliverables. This takes 1–2 weeks. After approval, we move into design and agile development sprints with milestone demos until delivery.",
  },
  {
    q: "What pricing models do you offer?",
    a: "We offer fixed-price for projects with clearly defined scope, time-and-materials when requirements may evolve, and dedicated teams for long-term or complex projects needing ongoing engineering capacity.",
  },
  {
    q: "What happens after launch?",
    a: "Post-launch support covers monitoring, bug fixes, performance optimization, version upgrades, and feature rollouts. We don't disappear after go-live.",
  },
  {
    q: "Who owns the code and IP?",
    a: "You own everything. All source code, designs, and documentation transfer to you at project close. No lock-in, no ongoing licensing fees.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="border border-white/8 rounded-xl overflow-hidden"
        >
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white/3 hover:bg-white/5 transition-colors"
          >
            <span className="text-white font-medium">{faq.q}</span>
            {open === i ? (
              <Minus className="w-5 h-5 text-brand-blue flex-shrink-0" />
            ) : (
              <Plus className="w-5 h-5 text-brand-gray flex-shrink-0" />
            )}
          </button>
          {open === i && (
            <div className="px-6 py-4 bg-white/1 border-t border-white/5">
              <p className="text-brand-gray leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
