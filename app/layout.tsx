import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Klerq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* fw:injected:jsonld:unknown:ee647904e3ea */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@graph": [{"@id": "https://klerq-site.vercel.app/blog/how-we-parse-invoices#article", "@type": "BlogPosting", "author": {"@id": "https://klerq-site.vercel.app/#organization"}, "datePublished": "2023-09-02", "description": "A walkthrough of how Klerq normalises a scanned page, understands its layout, and extracts typed fields from messy invoices into structured JSON.", "headline": "How we parse a messy invoice", "inLanguage": "en", "mainEntityOfPage": "https://klerq-site.vercel.app/blog/how-we-parse-invoices", "publisher": {"@id": "https://klerq-site.vercel.app/#organization"}}, {"@id": "https://klerq-site.vercel.app/blog/how-we-parse-invoices#breadcrumb", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "item": "https://klerq-site.vercel.app/", "name": "Home", "position": 1}, {"@type": "ListItem", "item": "https://klerq-site.vercel.app/blog", "name": "Blog", "position": 2}, {"@type": "ListItem", "item": "https://klerq-site.vercel.app/blog/how-we-parse-invoices", "name": "How we parse a messy invoice", "position": 3}]}]}' }}
        />

        {/* fw:injected:jsonld:unknown:5038512bea9d */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@graph": [{"@id": "https://klerq-site.vercel.app/#organization", "@type": "Organization", "description": "Klerq is a fictional developer document-processing API company used by Far and Wide B.V. to test audit and fix machinery.", "name": "Klerq", "parentOrganization": {"@id": "https://klerq-site.vercel.app/#parent-organization"}, "url": "https://klerq-site.vercel.app/"}, {"@id": "https://klerq-site.vercel.app/#parent-organization", "@type": "Organization", "name": "Far and Wide B.V.", "url": "https://klerq-site.vercel.app/"}, {"@id": "https://klerq-site.vercel.app/#website", "@type": "WebSite", "description": "A demonstration website for the fictional Klerq document-processing API company.", "inLanguage": "en", "name": "Klerq", "publisher": {"@id": "https://klerq-site.vercel.app/#organization"}, "url": "https://klerq-site.vercel.app/"}]}' }}
        />

        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
