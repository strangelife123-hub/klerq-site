// Small hand-maintained FAQ, rendered on the homepage.
// (Deliberately kept as a flat array of {question, answer} string literals.)
export const faqs = [
  {
    question: "What kind of documents can Klerq process?",
    answer:
      "Klerq works best with invoices, receipts, contracts and structured forms. PDFs and images are both supported.",
  },
  {
    question: "Do I need to train a model before I can use the API?",
    answer:
      "No. Klerq ships with pre-built extractors for common document types, so you can send your first document immediately.",
  },
  {
    question: "Which programming languages are supported?",
    answer:
      "Klerq is a plain REST API, so any language that can make an HTTP request works. We publish helper libraries for Python and JavaScript.",
  },
];
