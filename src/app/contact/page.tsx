"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(20, "Please describe your project (at least 20 characters)"),
});

type FormData = z.infer<typeof schema>;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at Kyle@tenxlabs.io");
      }
    } catch {
      setError("Failed to submit. Please email us at Kyle@tenxlabs.io");
    }
  };

  return (
    <>
      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6">
              Let&apos;s build{" "}
              <span className="text-brand-blue">something together.</span>
            </h1>
            <p className="text-brand-gray text-xl leading-relaxed">
              Tell us about your project. We respond within 24 hours — usually faster.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <CheckCircle className="w-16 h-16 text-brand-blue mb-6" />
                  <h2 className="text-3xl font-bold text-white mb-4">We got it.</h2>
                  <p className="text-brand-gray text-lg max-w-md">
                    Expect a reply within 24 hours. If it&apos;s urgent, email us directly at{" "}
                    <a href="mailto:Kyle@tenxlabs.io" className="text-brand-blue hover:underline">
                      Kyle@tenxlabs.io
                    </a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("name")}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-brand-gray text-sm outline-none transition-colors"
                        placeholder="Your name"
                      />
                      {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-brand-gray text-sm outline-none transition-colors"
                        placeholder="you@company.com"
                      />
                      {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Company</label>
                      <input
                        {...register("company")}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-brand-gray text-sm outline-none transition-colors"
                        placeholder="Your company (optional)"
                      />
                    </div>
                    <div>
                      <label className="block text-white text-sm font-medium mb-2">Budget Range</label>
                      <select
                        {...register("budget")}
                        className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-brand-gray text-sm outline-none transition-colors appearance-none"
                      >
                        <option value="" className="bg-brand-navy">Select budget...</option>
                        <option value="under-10k" className="bg-brand-navy">Under $10k</option>
                        <option value="10k-25k" className="bg-brand-navy">$10k – $25k</option>
                        <option value="25k-50k" className="bg-brand-navy">$25k – $50k</option>
                        <option value="50k-100k" className="bg-brand-navy">$50k – $100k</option>
                        <option value="100k-plus" className="bg-brand-navy">$100k+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Tell us about your project <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      {...register("message")}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-blue rounded-xl px-4 py-3 text-white placeholder:text-brand-gray text-sm outline-none transition-colors resize-none"
                      placeholder="What are you building? What's the timeline? What have you tried so far?"
                    />
                    {errors.message && <p className="mt-1 text-red-400 text-xs">{errors.message.message}</p>}
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-blue hover:bg-brand-blue-light disabled:opacity-50 text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-6">Other ways to reach us</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-brand-gray text-xs mb-0.5">Email</div>
                      <a href="mailto:Kyle@tenxlabs.io" className="text-white text-sm hover:text-brand-blue transition-colors">
                        Kyle@tenxlabs.io
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-brand-gray text-xs mb-0.5">Phone</div>
                      <span className="text-white text-sm">Available on request</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-brand-blue/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-brand-blue" />
                    </div>
                    <div>
                      <div className="text-brand-gray text-xs mb-0.5">Location</div>
                      <span className="text-white text-sm">Remote / United States</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
                <h3 className="text-white font-semibold mb-3">Response time</h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  We reply to every inquiry within 24 hours. For urgent matters, email us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
