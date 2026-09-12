import Link from "next/link";

export const metadata = {
  title: "The Klerq API — extract structured data from documents",
  description:
    "Klerq is a document-processing API that extracts structured fields from invoices, contracts and forms. One endpoint, typed JSON, no training required.",
};

export default function Product() {
  return (
    <div className="prose">
      <h1>The Klerq API — document data extraction</h1>
      <p className="meta">Product overview</p>

      <p>
        Klerq is a fictional document-processing API company presented on a
        demonstration website operated by Far and Wide B.V. It is not a real
        API or software provider and sells no products or services.
      </p>

      <img
        src="/product-shot.svg"
        alt="Document fields extracted into structured JSON"
        width={960}
        height={420}
        style={{
          maxWidth: "100%",
          height: "auto",
          marginTop: 32,
          borderRadius: 12,
          border: "1px solid var(--border)",
        }}
      />

      <h2>Supported document types</h2>
      <p>
        Klerq ships with pre-built extractors for the documents businesses deal
        with every day:
      </p>
      <ul>
        <li>Invoices and credit notes</li>
        <li>Receipts and expense records</li>
        <li>Contracts and agreements</li>
        <li>Structured forms and applications</li>
      </ul>
      <p>
        The demonstration accepts a PDF or image. For invoices, the example
        output includes a vendor name, numeric total, currency and due date.
        Scans and photographs use the same structured JSON format as clean PDFs.
        Contracts, receipts and forms are included as document categories in the
        demonstration; no production field schema is offered.
      </p>

      <h2>How extraction works</h2>
      <p>
        Every request runs through the same pipeline: the document is
        normalised, its layout is analysed, and the relevant fields are pulled
        out and typed. Every request returns in under 2 seconds, even for
        multi-page files.
      </p>
      <p>
        Klerq reaches over 95% field-level accuracy on clean documents, and
        flags low-confidence fields so you can route them for review instead of
        trusting a bad value.
      </p>

      <h2>Endpoints</h2>
      <pre>
        <code>{`POST /v1/extract      # extract fields from a single document
POST /v1/batch        # submit up to 100 documents at once
GET  /v1/results/:id  # fetch the result of an async job`}</code>
      </pre>

      <h2>Example JSON response</h2>
      <p>
        A successful invoice extraction returns typed fields in a JSON object.
        This demonstration response shows a string vendor and currency, a numeric
        total and an ISO-formatted due date:
      </p>
      <pre>
        <code>{`{
  "vendor": "Acme BV",
  "total": 1240.50,
  "currency": "EUR",
  "due_date": "2024-06-30"
}`}</code>
      </pre>

      <h2>Pricing</h2>
      <p>
        Klerq has no paid plans, usage rates or volume plans. It sells no
        products or services because this is a fictional API demonstration, so
        the endpoints and response above cannot be purchased or used to process
        documents. <Link href="/contact">Contact details</Link> are provided only
        as part of the Far and Wide B.V. test website.
      </p>
    </div>
  );
}
