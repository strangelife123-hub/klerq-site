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
