import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Clock, ArrowLeft } from "lucide-react";
import { JsonLd, getBlogPostSchema } from "@/components/seo/JsonLd";
import { blogPosts, getBlogPostBySlug } from "@/lib/data/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `https://tenxlabs.com/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://tenxlabs.com/blog/${slug}`,
      type: "article",
      publishedTime: post.datePublished,
      authors: [post.author],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const schema = getBlogPostSchema(post);
  const relatedPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  const contentHtml = post.content
    .split("\n\n")
    .map((para) => {
      if (para.startsWith("## ")) return `<h2>${para.replace("## ", "")}</h2>`;
      if (para.startsWith("### ")) return `<h3>${para.replace("### ", "")}</h3>`;
      return `<p>${para}</p>`;
    })
    .join("\n");

  return (
    <>
      <JsonLd data={schema} />

      <section className="py-24 bg-hero-gradient">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-brand-gray hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="bg-brand-blue/10 text-brand-blue text-sm font-medium px-4 py-1.5 rounded-full">
              {post.category}
            </span>
            <div className="flex items-center gap-1 text-brand-gray text-sm">
              <Clock className="w-4 h-4" /> {post.readTime} min read
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">{post.title}</h1>
          <p className="text-brand-gray text-xl leading-relaxed mb-8">{post.excerpt}</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-brand-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
              {post.author[0]}
            </div>
            <div>
              <div className="text-white text-sm font-medium">{post.author}</div>
              <div className="text-brand-gray text-xs">
                {new Date(post.datePublished).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-brand-gray prose-strong:text-white prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3 prose-p:leading-relaxed prose-p:mb-4"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-white/10">
            {post.tags.map((tag) => (
              <span key={tag} className="bg-white/5 border border-white/10 text-brand-gray text-sm px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 bg-brand-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8">More from the Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white/3 hover:bg-white/6 border border-white/8 hover:border-brand-blue/30 rounded-xl p-5 transition-all">
                <div className="text-brand-blue text-xs font-medium mb-2">{p.category}</div>
                <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-brand-blue-glow transition-colors">{p.title}</h3>
                <p className="text-brand-gray text-sm line-clamp-2">{p.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
