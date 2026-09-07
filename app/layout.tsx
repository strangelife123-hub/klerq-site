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
        {/* fw:injected:jsonld:unknown:2df44320cd1f */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@graph": [{"@id": "https://klerq-site.vercel.app/blog/introducing-klerq#article", "@type": "BlogPosting", "author": {"@id": "https://klerq-site.vercel.app/#organization"}, "datePublished": "2022-03-14", "description": "Klerq is a new API for turning documents such as invoices, receipts and contracts into structured JSON, with no models to train and no templates to draw.", "headline": "Introducing Klerq", "inLanguage": "en", "mainEntityOfPage": "https://klerq-site.vercel.app/blog/introducing-klerq", "publisher": {"@id": "https://klerq-site.vercel.app/#organization"}}, {"@id": "https://klerq-site.vercel.app/blog/introducing-klerq#breadcrumb", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "item": "https://klerq-site.vercel.app/", "name": "Home", "position": 1}, {"@type": "ListItem", "item": "https://klerq-site.vercel.app/blog", "name": "Blog", "position": 2}, {"@type": "ListItem", "item": "https://klerq-site.vercel.app/blog/introducing-klerq", "name": "Introducing Klerq", "position": 3}]}]}' }}
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
