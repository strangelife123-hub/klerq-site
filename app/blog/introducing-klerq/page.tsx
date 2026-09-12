export const metadata = {
  title: "Introducing Klerq",
};

export default function Post() {
  return (
    <article className="prose">
      <header>
        <h1>Introducing Klerq, a document extraction API</h1>
        <p className="meta">14 March 2022</p>
      </header>

      <p>
        Today we&apos;re presenting Klerq, a fictional API demo for turning documents
        into structured data. For the last year we&apos;ve been building
        document extraction into our own products, and we kept wishing there was
        a service we could just call. So we built one.
      </p>

      <p>
        Klerq takes a document — an invoice, a receipt, a contract — and returns
        the fields you need as JSON. There are no models to train and no
        templates to draw. You send a file, you get back data.
      </p>

      <section>
        <h2>Why teams need Klerq now</h2>
      <p>
        Every team we talked to had the same story: a pile of PDFs, a fragile
        script held together with regular expressions, and someone whose job had
        quietly become fixing it. We think that&apos;s a waste of good
        engineers.
      </p>
      </section>

      <section>
        <h2>Getting started with Klerq</h2>
      <p>
        During the beta, Klerq is priced at €0.02 per page with the first 500
        pages free. Head to the docs to send your first document, and let us
        know what you think.
      </p>
      </section>
    </article>
  );
}
