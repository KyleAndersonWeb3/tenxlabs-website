import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ChevronRight } from "lucide-react";
import { JsonLd, getWebPageSchema } from "@/components/seo/JsonLd";
import { blogPosts, getAllCategories } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Blog — Engineering & Product Insights",
  description:
    "The TenXLabs blog. We write about web performance, mobile development, AI integration, and the technical decisions that matter for product teams.",
  alternates: { canonical: "https://tenxlabs.com/blog" },
};

export default function BlogPage() {
  const schema = getWebPageSchema(
    "Blog | TenXLabs",
    "Engineering and product insights from the TenXLabs team.",
    "https://tenxlabs.com/blog"
  );
  const categories = getAllCategories();

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-white mb-4">
            The <span className="text-brand-blue">TenXLabs Blog</span>
          </h1>
          <p className="text-brand-gray text-xl max-w-2xl">
            Technical insights, engineering deep dives, and product thinking from our team.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            <span className="bg-brand-blue text-white text-sm font-medium px-4 py-2 rounded-full">All</span>
            {categories.map((cat) => (
              <span key={cat} className="bg-white/5 hover:bg-white/10 border border-white/10 text-brand-gray hover:text-white text-sm font-medium px-4 py-2 rounded-full cursor-pointer transition-colors">
                {cat}
              </span>
            ))}
          </div>

          {/* Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-2xl p-6 transition-all duration-200"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-brand-blue/10 text-brand-blue text-xs font-medium px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1 text-brand-gray text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min read
                  </div>
                </div>
                <h2 className="text-white font-bold text-lg mb-3 group-hover:text-brand-blue-glow transition-colors line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-brand-gray text-sm mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-brand-gray text-xs">
                    {post.author} · {new Date(post.datePublished).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </div>
                  <ChevronRight className="w-4 h-4 text-brand-blue group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
