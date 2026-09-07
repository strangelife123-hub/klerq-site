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
        {/* fw:injected:jsonld:unknown:9cd42078acbc */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@graph": [{"@id": "https://klerq-site.vercel.app/product#supported-documents", "@type": "ItemList", "itemListElement": [{"@type": "ListItem", "name": "Invoices and credit notes", "position": 1}, {"@type": "ListItem", "name": "Receipts and expense records", "position": 2}, {"@type": "ListItem", "name": "Contracts and agreements", "position": 3}, {"@type": "ListItem", "name": "Structured forms and applications", "position": 4}], "name": "Supported document types"}, {"@id": "https://klerq-site.vercel.app/product#breadcrumb", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "item": "https://klerq-site.vercel.app/", "name": "Home", "position": 1}, {"@type": "ListItem", "item": "https://klerq-site.vercel.app/product", "name": "Product", "position": 2}]}]}' }}
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
