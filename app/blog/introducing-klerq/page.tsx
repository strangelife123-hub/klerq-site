export const metadata = {
  title: "Introducing Klerq",
};

export default function Post() {
  return (
    <div className="prose">
      <h1>Introducing Klerq</h1>
      <p className="meta">14 March 2022</p>

      <p>
        Today we&apos;re launching Clerq, a simple API for turning documents
        into structured data. For the last year we&apos;ve been building
        document extraction into our own products, and we kept wishing there was
        a service we could just call. So we built one.
      </p>

      <p>
        Klerq takes a document — an invoice, a receipt, a contract — and returns
        the fields you need as JSON. There are no models to train and no
        templates to draw. You send a file, you get back data.
      </p>

      <h2>Why now</h2>
      <p>
        Every team we talked to had the same story: a pile of PDFs, a fragile
        script held together with regular expressions, and someone whose job had
        quietly become fixing it. We think that&apos;s a waste of good
        engineers.
      </p>

      <h2>Getting started</h2>
      <p>
        During the beta, Klerq is priced at €0.02 per page with the first 500
        pages free. Head to the docs to send your first document, and let us
        know what you think.
      </p>
    </div>
  );
}

{/* fw:injected-no-body */}
        {/* fw:injected:jsonld:BlogPosting:5f551cdb4a42 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@id": "https://klerq-site.vercel.app/blog/introducing-klerq#article", "@type": "BlogPosting", "about": {"@id": "https://klerq-site.vercel.app/#klerq-demo"}, "description": "An article in the test site introducing the fictional Klerq document-processing API company.", "headline": "Introducing Klerq", "inLanguage": "en", "isPartOf": {"@id": "https://klerq-site.vercel.app/blog#blog"}, "mainEntityOfPage": {"@id": "https://klerq-site.vercel.app/blog/introducing-klerq#webpage"}, "name": "Introducing Klerq", "publisher": {"@id": "https://klerq-site.vercel.app/#organization"}, "url": "https://klerq-site.vercel.app/blog/introducing-klerq"}' }}
        />

