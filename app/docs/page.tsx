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
      <h1>Klerq API Documentation</h1>
      <p className="meta">Quickstart</p>

      <p>
        The full API reference, SDK guides and code samples live in our{" "}
        <a href="https://github.com/strangelife123-hub/klerq-docs">
          GitHub documentation repository
        </a>
        . This page is a short quickstart to get you to your first extraction.
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
        Most documents come back in 1–3 seconds. The response is a JSON object
        with the extracted fields and a confidence score for each one.
      </p>

      <p>
        For everything else — batch jobs, webhooks, the full field schema — see
        the{" "}
        <a href="https://github.com/strangelife123-hub/klerq-docs">
          reference on GitHub
        </a>
        .
      </p>
    </div>
  );
}
