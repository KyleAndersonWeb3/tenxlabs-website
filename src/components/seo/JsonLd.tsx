interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "TenXLabs",
  url: "https://tenxlabs.com",
  logo: "https://tenxlabs.com/logo.png",
  description:
    "TenXLabs is a full-stack digital agency that builds high-performance web apps, mobile apps, and software systems for startups and enterprises.",
  sameAs: [
    "https://twitter.com/tenxlabs",
    "https://linkedin.com/company/tenxlabs",
    "https://github.com/tenxlabs",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "hello@tenxlabs.com",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
  },
};

export function getWebPageSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    isPartOf: {
      "@type": "WebSite",
      name: "TenXLabs",
      url: "https://tenxlabs.com",
    },
  };
}

export function getBlogPostSchema(post: {
  title: string;
  excerpt: string;
  slug: string;
  author: string;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: `https://tenxlabs.com/blog/${post.slug}`,
    datePublished: post.datePublished,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "TenXLabs",
      url: "https://tenxlabs.com",
    },
  };
}

export function getJobPostingSchema(job: {
  title: string;
  description: string;
  slug: string;
  location: string;
  type: string;
  salary?: string;
  datePosted: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    url: `https://tenxlabs.com/jobs/${job.slug}`,
    datePosted: job.datePosted,
    hiringOrganization: {
      "@type": "Organization",
      name: "TenXLabs",
      sameAs: "https://tenxlabs.com",
    },
    jobLocation: {
      "@type": "Place",
      name: job.location,
    },
    employmentType: job.type.toUpperCase().replace("-", "_"),
    ...(job.salary && {
      baseSalary: {
        "@type": "MonetaryAmount",
        currency: "USD",
        value: {
          "@type": "QuantitativeValue",
          value: job.salary,
          unitText: "YEAR",
        },
      },
    }),
  };
}
