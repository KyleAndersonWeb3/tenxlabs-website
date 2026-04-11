export interface Job {
  slug: string;
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  salary?: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  datePosted: string;
}

export const jobs: Job[] = [
  {
    slug: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote (US)",
    type: "Full-time",
    salary: "$140,000 – $180,000",
    description:
      "We're looking for a senior full-stack engineer who ships clean, performant code and cares deeply about the products they build. You'll work directly with founders and lead engineers to architect and build client-facing products.",
    responsibilities: [
      "Architect and build full-stack features across React/Next.js frontends and Node.js backends",
      "Own technical decisions for your projects end-to-end",
      "Write maintainable, well-tested code that other engineers enjoy working with",
      "Participate in code reviews and technical planning",
      "Collaborate directly with clients and project managers",
    ],
    requirements: [
      "5+ years of professional software engineering experience",
      "Expert-level React and TypeScript",
      "Strong Node.js and REST/GraphQL API experience",
      "PostgreSQL or similar relational database experience",
      "Experience deploying to AWS, GCP, or Vercel",
    ],
    niceToHave: [
      "Next.js App Router experience",
      "Experience with AI/LLM integrations",
      "Open-source contributions",
      "Prior agency or consulting experience",
    ],
    datePosted: "2026-04-01",
  },
  {
    slug: "react-native-developer",
    title: "React Native Developer",
    department: "Mobile",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 – $155,000",
    description:
      "We need a React Native developer who has shipped real apps to the App Store and Google Play. You'll build cross-platform mobile apps for our clients — from startup MVPs to enterprise tools.",
    responsibilities: [
      "Build and maintain React Native apps for iOS and Android",
      "Integrate with REST APIs and third-party services",
      "Optimize app performance and load times",
      "Handle App Store and Play Store submission processes",
      "Write clean, testable component-based code",
    ],
    requirements: [
      "3+ years React Native experience",
      "Apps shipped to both App Store and Google Play",
      "Strong TypeScript skills",
      "Experience with Expo and bare React Native workflows",
      "Understanding of native iOS/Android concepts",
    ],
    niceToHave: [
      "Swift or Kotlin experience for native modules",
      "Push notification infrastructure experience",
      "Offline-first app architecture experience",
    ],
    datePosted: "2026-04-05",
  },
  {
    slug: "devops-engineer",
    title: "DevOps / Cloud Engineer",
    department: "Infrastructure",
    location: "Remote",
    type: "Full-time",
    salary: "$130,000 – $165,000",
    description:
      "We're growing our infrastructure team. You'll design and manage cloud environments for our clients — from startup-scale deployments to high-availability enterprise systems.",
    responsibilities: [
      "Design and implement cloud infrastructure on AWS/GCP",
      "Build and maintain CI/CD pipelines",
      "Set up monitoring, alerting, and incident response",
      "Optimize infrastructure costs without sacrificing reliability",
      "Security hardening and compliance support",
    ],
    requirements: [
      "4+ years DevOps or cloud engineering experience",
      "Strong AWS or GCP skills (certifications a plus)",
      "Kubernetes and Docker in production",
      "Terraform or similar IaC tools",
      "Linux administration and Bash scripting",
    ],
    niceToHave: [
      "Datadog, Grafana, or PagerDuty experience",
      "SOC 2 or HIPAA compliance experience",
      "Multi-cloud architecture experience",
    ],
    datePosted: "2026-04-08",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return jobs.find((j) => j.slug === slug);
}
