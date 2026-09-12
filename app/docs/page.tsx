export const metadata = {
  twitter: {
  description: "Demonstration documentation for the fictional Klerq document-processing API company.",
  title: "Klerq Documentation — Fictional API Demo", card: "summary" },
  openGraph: {
  url: "https://klerq-site.vercel.app/docs",
  description: "Demonstration documentation for the fictional Klerq document-processing API company.", title: "Klerq Documentation — Fictional API Demo" },
  description: "Demonstration documentation for Klerq, a fictional document-processing API company used for Far and Wide B.V. testing.",
  title: "Klerq Docs",
};

export default function Docs() {
  return (
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

      <h2>Supported documents</h2>
      <p>
        Klerq processes PDFs and images using pre-built extractors. Supported
        document types include invoices and credit notes, receipts and expense
        records, contracts and agreements, and structured forms and
        applications. No model training is required before your first request.
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
        Most documents come back in 1–3 seconds. The response is typed JSON. For
        an invoice, the extracted fields include <code className="inline-code">vendor</code>,{" "}
        <code className="inline-code">total</code>,{" "}
        <code className="inline-code">currency</code>, and{" "}
        <code className="inline-code">due_date</code>, plus a numeric{" "}
        <code className="inline-code">confidence</code> score. Values use JSON
        strings or numbers, and dates use the YYYY-MM-DD format.
      </p>
      <pre>
        <code>{`{
  "vendor": "Acme BV",
  "total": 1240.50,
  "currency": "EUR",
  "due_date": "2024-06-30",
  "confidence": 0.99
}`}</code>
      </pre>

      <h2>Other endpoints</h2>
      <p>
        Use <code className="inline-code">POST /v1/batch</code> to submit up to
        100 documents at once, and{" "}
        <code className="inline-code">GET /v1/results/:id</code> to fetch the
        result of an asynchronous job.
      </p>

      <p>
        For SDK guides, webhook setup, and the complete field schema, see
        the{" "}
        <a href="https://github.com/strangelife123-hub/klerq-docs">
          reference on GitHub
        </a>
        .
      </p>
    </div>
  );
}
