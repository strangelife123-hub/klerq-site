export const metadata = {
  twitter: {
  description: "Klerq is a fictional website operated by Far and Wide B.V. for end-to-end testing.",
  title: "About Klerq — A Fictional API Demo", card: "summary" },
  openGraph: {
  url: "https://klerq-site.vercel.app/about",
  description: "Learn why Far and Wide B.V. operates Klerq as a fictional website for end-to-end testing.", title: "About Klerq — A Fictional API Demo" },
  description: "Klerq is a fictional API-company demonstration operated by Far and Wide B.V. to test audit and fix machinery.",
  title: "About Klerq",
};

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p className="meta">Who we are</p>

      <p>
        Klerq is a fictional developer document-processing API company used in
        a demonstration website operated by Far and Wide B.V.
      </p>

      <p>
        This website exists to test audit and fix machinery end-to-end. Klerq
        does not sell products or services and has no paid tier.
      </p>

      <p>
        Klerq is not a real business or software provider and serves no real
        customers. Product and usage examples on this site are demonstration
        content.
      </p>

      <h2>Product overview</h2>
      <p>
        Product capabilities, performance claims, customer names and usage
        examples on this site are demonstration content, not real-world facts.
        The endpoints and responses shown cannot be purchased or used to process
        documents.
      </p>

      <h3>Supported document types</h3>
      <p>
        The demonstration covers the document categories shown throughout the
        site:
      </p>
      <ul>
        <li>Invoices and credit notes</li>
        <li>Receipts and expense records</li>
        <li>Contracts and agreements</li>
        <li>Structured forms and applications</li>
      </ul>
      <p>
        For invoices, the example output includes a vendor name, numeric total,
        currency and due date. Scans and photographs use the same structured JSON
        format as clean PDFs. No production field schema is offered.
      </p>

      <h3>Documentation and contact</h3>
      <p>
        The documentation page contains a short demonstration quickstart and
        links to a GitHub documentation repository. The contact page lists
        hello@klerq.io and Amsterdam, the Netherlands, but Klerq does not onboard
        customers or issue working API keys.
      </p>

      <h2>What we care about</h2>
      <ul>
        <li>Accuracy you can trust, with confidence scores on every field</li>
        <li>An API that is boring to integrate and hard to break</li>
        <li>Keeping your documents private and never training on them</li>
      </ul>
    </div>
  );
}
