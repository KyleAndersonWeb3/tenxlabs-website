export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  linkedin?: string;
  twitter?: string;
  image?: string;
  imagePosition?: string;
}

export const team: TeamMember[] = [
  {
    slug: "kyle-anderson",
    name: "Kyle Anderson",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Kyle built TenXLabs with a single belief: most agencies ship mediocre work because they don't care enough. He cares. He's spent a decade building digital products for companies from seed-stage startups to Fortune 500s, and he brings that obsession with quality to every TenXLabs project.",
    image: "/team-kyle.jpg",
    imagePosition: "50% 20%",
  },
];
