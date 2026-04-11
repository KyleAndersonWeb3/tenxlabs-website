export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  icon: string;
  category: string;
  keywords: string[];
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortDescription: "High-performance web platforms built to scale.",
    description:
      "We engineer web platforms that load fast, convert visitors, and scale with your business. From complex SaaS dashboards to marketing sites that dominate search, every line of code is written for performance and longevity.",
    features: [
      "Next.js & React applications",
      "Core Web Vitals optimization",
      "SEO-first architecture",
      "Custom CMS integrations",
      "E-commerce development",
      "API-first design",
    ],
    icon: "Globe",
    category: "Development",
    keywords: ["web development", "Next.js", "React", "SaaS", "performance"],
  },
  {
    slug: "app-development",
    title: "App Development",
    shortDescription: "Native and cross-platform apps that users love.",
    description:
      "We build iOS and Android apps that deliver real value. Whether it's a consumer product or an enterprise tool, we focus on performance, UX, and retention — not just shipping code.",
    features: [
      "React Native (iOS + Android)",
      "Native Swift & Kotlin",
      "Offline-first architecture",
      "Push notifications & analytics",
      "App Store optimization",
      "Backend API development",
    ],
    icon: "Smartphone",
    category: "Development",
    keywords: ["app development", "iOS", "Android", "React Native", "mobile"],
  },
  {
    slug: "software-engineering",
    title: "Software Engineering",
    shortDescription: "Custom software built around your business logic.",
    description:
      "Off-the-shelf software doesn't fit every business. We build custom systems — from internal tools to complex enterprise platforms — engineered to your exact workflows and scale requirements.",
    features: [
      "Custom business logic",
      "Microservices architecture",
      "Legacy system modernization",
      "Database design & optimization",
      "API development & integration",
      "DevOps & CI/CD pipelines",
    ],
    icon: "Code2",
    category: "Engineering",
    keywords: ["software engineering", "custom software", "enterprise", "microservices"],
  },
  {
    slug: "ai-integration",
    title: "AI Integration",
    shortDescription: "Embed AI into your product and operations.",
    description:
      "We integrate AI that actually works in production. LLMs, computer vision, predictive models — we wire AI into your existing systems to automate workflows, enhance products, and unlock new capabilities.",
    features: [
      "LLM integration (OpenAI, Anthropic, Google)",
      "RAG systems & vector databases",
      "AI-powered features & chatbots",
      "Custom model fine-tuning",
      "Workflow automation with AI",
      "AI safety & monitoring",
    ],
    icon: "Brain",
    category: "AI",
    keywords: ["AI integration", "LLM", "machine learning", "automation", "ChatGPT"],
  },
  {
    slug: "cloud-infrastructure",
    title: "Cloud Infrastructure",
    shortDescription: "Infrastructure that scales without surprises.",
    description:
      "We design and manage cloud infrastructure that keeps your product running at any scale. AWS, GCP, Azure — we architect for reliability, cost efficiency, and zero-downtime deployments.",
    features: [
      "AWS, GCP, Azure architecture",
      "Kubernetes & container orchestration",
      "Serverless & edge deployments",
      "Monitoring & alerting (Datadog, Grafana)",
      "Cost optimization",
      "Disaster recovery planning",
    ],
    icon: "Cloud",
    category: "Infrastructure",
    keywords: ["cloud infrastructure", "AWS", "DevOps", "Kubernetes", "serverless"],
  },
  {
    slug: "digital-strategy",
    title: "Digital Strategy",
    shortDescription: "Technology decisions that drive business outcomes.",
    description:
      "We help founders and executives make the right technical decisions before spending on the wrong ones. From tech stack selection to build-vs-buy analysis, we align technology with your business goals.",
    features: [
      "Tech stack selection & audit",
      "Build vs. buy analysis",
      "MVP scoping & roadmapping",
      "Technical due diligence",
      "Engineering team scaling",
      "CTO-as-a-service",
    ],
    icon: "TrendingUp",
    category: "Strategy",
    keywords: ["digital strategy", "CTO", "MVP", "tech consulting", "roadmap"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
