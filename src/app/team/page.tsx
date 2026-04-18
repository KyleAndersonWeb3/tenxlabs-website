import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { team } from "@/lib/data/team";
import { BrandName } from "@/components/ui/BrandName";

function BioText({ text }: { text: string }) {
  const parts = text.split("TenXLabs");
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>{part}{i < parts.length - 1 && <BrandName />}</span>
      ))}
    </>
  );
}

export const metadata: Metadata = {
  title: "Team — The People Behind TenXLabs",
  description:
    "Meet the TenXLabs team. Senior engineers, designers, and strategists who've shipped products used by millions.",
  alternates: { canonical: "https://tenxlabs.com/team" },
};

export default function TeamPage() {
  const schema = getWebPageSchema(
    "Team | TenXLabs",
    "Meet the TenXLabs team — senior engineers, designers, and strategists.",
    "https://tenxlabs.com/team"
  );

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              The people who{" "}
              <span className="text-brand-blue">actually build it.</span>
            </h1>
            <p className="text-gray-600 text-xl leading-relaxed">
              Senior engineers and designers on every project. No juniors learning on your dime.
              No account managers in the middle. You work directly with the people building your product.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div key={member.slug} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
                <div className="flex items-start gap-6">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "72px", height: "72px",
                        borderRadius: "16px",
                        objectFit: "cover",
                        objectPosition: member.imagePosition ?? "top",
                        flexShrink: 0,
                      }}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                      {member.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                  )}
                  <div>
                    <h2 className="text-gray-900 font-bold text-xl">{member.name}</h2>
                    <div className="text-brand-blue text-sm font-medium mb-1">{member.role}</div>
                    <div className="text-gray-500 text-xs mb-4">{member.department}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mt-4"><BioText text={member.bio} /></p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join the team</h2>
            <p className="text-gray-500 mb-8 max-w-xl mx-auto">
              We&apos;re always looking for exceptional engineers and designers who care about craft.
            </p>
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 bg-brand-blue hover:bg-brand-blue-light text-white font-semibold px-8 py-4 rounded-xl transition-colors"
            >
              View Open Roles <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
