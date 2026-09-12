import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Klerq",
  description:
    "Product overview: Klerq is a fictional document-processing API demo that turns invoices, contracts and forms into structured JSON with one API call.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* fw:injected:jsonld:unknown:5038512bea9d */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@graph": [{"@id": "https://klerq-site.vercel.app/#organization", "@type": "Organization", "description": "Klerq is a fictional developer document-processing API company used by Far and Wide B.V. to test audit and fix machinery.", "name": "Klerq", "logo": "https://klerq-site.vercel.app/logo.svg", "parentOrganization": {"@id": "https://klerq-site.vercel.app/#parent-organization"}, "url": "https://klerq-site.vercel.app/"}, {"@id": "https://klerq-site.vercel.app/#parent-organization", "@type": "Organization", "name": "Far and Wide B.V.", "url": "https://klerq-site.vercel.app/"}, {"@id": "https://klerq-site.vercel.app/#website", "@type": "WebSite", "description": "A demonstration website for the fictional Klerq document-processing API company.", "inLanguage": "en", "name": "Klerq", "publisher": {"@id": "https://klerq-site.vercel.app/#organization"}, "url": "https://klerq-site.vercel.app/"}]}' }}
        />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
