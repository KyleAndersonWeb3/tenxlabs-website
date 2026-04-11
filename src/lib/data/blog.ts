export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  datePublished: string;
  readTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "next-js-performance-guide-2026",
    title: "The Complete Next.js Performance Guide for 2026",
    excerpt:
      "Core Web Vitals, image optimization, caching strategies, and everything else you need to ship a Next.js app that scores green across the board.",
    content: `Next.js has become the default choice for serious web development teams. But just using Next.js doesn't automatically make your site fast — you have to know what you're doing.

## The Core Web Vitals That Actually Matter

Google ranks your site on three main signals: LCP (Largest Contentful Paint), CLS (Cumulative Layout Shift), and FID/INP (Interaction to Next Paint). Here's how to attack each one.

### LCP: Get Your Biggest Element Fast

LCP measures how long it takes for the largest visible element to render. For most sites, this is a hero image or headline text.

The fix: use next/image with the priority prop on your hero image. This tells Next.js to preload it. Don't lazy-load your above-the-fold content.

### CLS: Stop Your Layout From Jumping

Every time an element shifts after the page loads, you're paying a CLS tax. The main culprit? Images and embeds without explicit dimensions.

Always set width and height on next/image elements. Use aspect-ratio CSS for dynamic content. Reserve space for anything that loads async.

### INP: Make Every Interaction Snappy

INP replaced FID in 2024. It measures the worst interaction in a session, not just the first. Heavy JavaScript is the enemy here.

Use dynamic imports for anything not needed on initial load. Defer analytics and chat widgets. Keep your main thread clear.

## Image Optimization Done Right

next/image is powerful but you have to use it correctly:

- Use priority on above-the-fold images
- Set explicit sizes for responsive images
- Prefer WebP/AVIF formats (Next.js handles this automatically)
- Don't set eager loading on images below the fold

## Caching Strategy

The most underutilized performance lever in Next.js is caching. Use ISR (Incremental Static Regeneration) for content that changes occasionally. Use full static generation for content that rarely changes. Use React Server Components to keep data fetching on the server where it belongs.`,
    category: "Engineering",
    tags: ["Next.js", "Performance", "Core Web Vitals", "SEO"],
    author: "Marcus Chen",
    datePublished: "2026-04-01",
    readTime: 8,
  },
  {
    slug: "why-most-agency-websites-fail-at-seo",
    title: "Why Most Agency Websites Fail at SEO (And How to Fix Them)",
    excerpt:
      "Most agency websites are beautiful and technically broken. Here's the technical SEO checklist we run on every site we build.",
    content: `We see it constantly: a beautiful website with zero organic traffic. The design is polished, the copy is good, but the technical foundation is broken.

Here's the checklist we use on every site we build at TenXLabs.

## Schema Markup: The Invisible SEO Layer

Most sites skip schema markup. This is a mistake. Schema tells search engines exactly what your content is — company info, reviews, job postings, FAQs. Implement Organization schema on every page. Add FAQ schema wherever you have Q&A content. Add JobPosting schema to every job listing.

The result: rich results in Google, better click-through rates, and clearer signals to the algorithm about what your site is.

## Canonical Tags: Stop Competing Against Yourself

If your site serves the same content at multiple URLs, you're splitting your ranking power. Every page needs a canonical tag pointing to the authoritative URL.

Common mistakes: www vs non-www, trailing slashes, query parameters creating duplicate URLs.

## Sitemap and Robots: The Basics That Get Skipped

Your sitemap.xml should be dynamic and always current. Your robots.txt should allow crawling of everything you want indexed and block everything you don't.

Next.js makes this easy — use the sitemap.ts and robots.ts API routes in the App Router to generate these automatically.

## Internal Linking: The Power Nobody Talks About

Strategic internal links distribute authority across your site and help users (and crawlers) navigate your content. Every service page should link to related blog posts. Every blog post should link to relevant service pages. Build a web, not a tree.`,
    category: "SEO",
    tags: ["SEO", "Technical SEO", "Schema Markup", "Web Development"],
    author: "Kyle Anderson",
    datePublished: "2026-04-05",
    readTime: 6,
  },
  {
    slug: "react-native-vs-native-2026",
    title: "React Native vs Native Development in 2026: The Honest Answer",
    excerpt:
      "We've shipped over 30 apps using both approaches. Here's when React Native wins, when native wins, and why the answer is usually React Native.",
    content: `This debate has been going on for years, and every year the answer shifts slightly. In 2026, here's our honest assessment after shipping apps for clients across both platforms.

## The Short Answer

For most apps, React Native is the right choice. You get one codebase, faster development, and good enough performance. For apps that need the absolute best native feel or heavy hardware access, go native.

## Where React Native Wins

**Business apps and internal tools.** If you're building a logistics dashboard, a field service app, or an internal tool for your team, React Native ships faster and costs less.

**Cross-platform with shared business logic.** When your backend APIs are the same on both platforms, React Native lets you write that integration once.

**Rapid iteration.** If you need to move fast — especially in early product stages — React Native wins on speed every time.

## Where Native Wins

**Games and heavy graphics.** Anything that needs 60fps+ animations or complex 3D is better native.

**Deep hardware integration.** If you're building for specific Bluetooth devices, custom camera pipelines, or platform-specific features, native gives you cleaner access.

**Apps where the feel IS the product.** Consumer apps where the micro-interaction quality is a core differentiator might justify native.

## The Real Cost Calculation

Native means two codebases, two sets of bugs, two review processes, two release timelines. React Native means one team, one codebase, one release. The performance gap has narrowed significantly in recent years. The productivity gap hasn't.

For 90% of apps, React Native is the answer.`,
    category: "Mobile",
    tags: ["React Native", "iOS", "Android", "Mobile Development"],
    author: "Jordan Williams",
    datePublished: "2026-04-08",
    readTime: 7,
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getBlogPostsByCategory(category: string): BlogPost[] {
  return blogPosts.filter((p) => p.category === category);
}

export function getAllCategories(): string[] {
  return [...new Set(blogPosts.map((p) => p.category))];
}

export function getAllTags(): string[] {
  return [...new Set(blogPosts.flatMap((p) => p.tags))];
}
