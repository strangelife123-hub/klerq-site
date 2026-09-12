export const metadata = {
  twitter: {
  description: "Demonstration documentation for the fictional Klerq document-processing API company.",
  title: "Klerq Documentation — Fictional API Demo", card: "summary" },
  openGraph: {
  url: "https://klerq-site.vercel.app/docs",
  description: "Demonstration documentation for the fictional Klerq document-processing API company.", title: "Klerq Documentation — Fictional API Demo" },
  description: "API documentation: Follow the Klerq demonstration quickstart to send a document and receive extracted fields with confidence scores as JSON.",
  title: "Klerq Docs",
};

export default function Docs() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        "@id": "https://klerq-site.vercel.app/docs#article",
        headline: "Klerq Documentation",
        description:
          "A quickstart for the fictional Klerq document-processing API.",
        url: "https://klerq-site.vercel.app/docs",
        inLanguage: "en",
        publisher: { "@id": "https://klerq-site.vercel.app/#organization" },
        about: { "@id": "https://klerq-site.vercel.app/#software" },
        mainEntityOfPage: "https://klerq-site.vercel.app/docs",
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://klerq-site.vercel.app/#software",
        name: "Klerq API",
        applicationCategory: "DeveloperApplication",
        operatingSystem: "Any",
        description:
          "A fictional document-processing API that turns documents into structured JSON.",
        url: "https://klerq-site.vercel.app/product",
        provider: { "@id": "https://klerq-site.vercel.app/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://klerq-site.vercel.app/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Documentation",
            item: "https://klerq-site.vercel.app/docs",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="prose">
      <h1>Documentation</h1>
      <p className="meta">Quickstart</p>

      <p>
        The full API reference, SDK guides and code samples live in our{" "}
        <a href="https://github.com/strangelife123-hub/klerq-docs">
          GitHub documentation repository
        </a>
        . This page is a short quickstart to get you to your first extraction.
      </p>

      <h2>1. Get a key</h2>
      <p>
        <a href="/contact">Request an API key</a>. You&apos;ll receive a secret
        token that starts with <code className="inline-code">klerq_live_</code>.
      </p>

      <h2>2. Send a document</h2>
      <pre>
        <code>{`curl https://api.klerq.io/v1/extract \\
  -H "Authorization: Bearer klerq_live_..." \\
  -F "file=@invoice.pdf"`}</code>
      </pre>

      <h2>3. Read the result</h2>
      <p>
        Most documents come back in 1–3 seconds. The response is a JSON object
        with the extracted fields and a confidence score for each one.
      </p>

      <p>
        For everything else — batch jobs, webhooks, the full field schema — see
        the{" "}
        <a href="https://github.com/strangelife123-hub/klerq-docs">
          reference on GitHub
        </a>
        .
      </p>
    </div>
  </>
  );
}
