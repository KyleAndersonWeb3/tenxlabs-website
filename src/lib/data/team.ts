export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    slug: "kyle-anderson",
    name: "Kyle Anderson",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Kyle built TenXLabs with a single belief: most agencies ship mediocre work because they don't care enough. He cares. He's spent a decade building digital products for companies from seed-stage startups to Fortune 500s, and he brings that obsession with quality to every TenXLabs project.",
  },
  {
    slug: "lead-architect",
    name: "Marcus Chen",
    role: "Head of Engineering",
    department: "Engineering",
    bio: "Marcus leads our engineering team with 12 years of experience building distributed systems and high-traffic web platforms. He's a Next.js and AWS specialist who believes performance is a feature, not an afterthought.",
  },
  {
    slug: "design-lead",
    name: "Priya Sharma",
    role: "Head of Design",
    department: "Design",
    bio: "Priya bridges the gap between beautiful and functional. She's shipped UX for fintech apps, SaaS platforms, and consumer products — always with a focus on the user's actual mental model, not just what looks good in Figma.",
  },
  {
    slug: "mobile-lead",
    name: "Jordan Williams",
    role: "Mobile Lead",
    department: "Engineering",
    bio: "Jordan has shipped over 20 apps to the App Store and Play Store. React Native specialist with native iOS and Android chops. If it's mobile, Jordan's built it.",
  },
];
