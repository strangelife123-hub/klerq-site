import Link from "next/link";

export const metadata = {
  title: "The Klerq API — extract structured data from documents",
  description:
    "Klerq is a document-processing API that extracts structured fields from invoices, contracts and forms. One endpoint, typed JSON, no training required.",
};

export default function Product() {
  return (
    <div className="prose">
      <h1>The Klerq API</h1>
      <p className="meta">Product overview</p>

      <p>
        Klerq is a document-processing API. You send it a document — a PDF, a
        scan, a photo — and it returns the fields you care about as structured
        JSON. It is built for engineering teams who need reliable extraction
        without standing up their own machine-learning stack.
      </p>

      <h3>Supported document types</h3>
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

      <h2>Pricing</h2>
      <p>
        Klerq uses usage-based pricing. See the{" "}
        <Link href="/pricing">pricing page</Link> for current rates, or{" "}
        <Link href="/contact">get in touch</Link> for volume plans.
      </p>
    </div>
  );
}
