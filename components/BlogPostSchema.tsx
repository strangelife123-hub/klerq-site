const siteUrl = "https://klerq-site.vercel.app";

type BlogPostSchemaProps = {
  headline: string;
  datePublished: string;
  slug: string;
};

export default function BlogPostSchema({
  headline,
  datePublished,
  slug,
}: BlogPostSchemaProps) {
  const url = `${siteUrl}/blog/${slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline,
        datePublished,
        mainEntityOfPage: url,
        author: {
          "@id": `${siteUrl}/#organization`,
          "@type": "Organization",
          name: "Klerq",
        },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${siteUrl}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${siteUrl}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: headline,
            item: url,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
