/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { faqs } from "@/data/faq";

export default function Home() {
  return (
    <>
      <section className="hero" style={{ borderTop: "none" }}>
        <div className="container">
          <div className="eyebrow">Document AI, for builders</div>
          <h1>Document-processing API — Klerq</h1>
          <p className="sub">
            Klerq turns invoices, contracts and forms into clean, structured
            JSON — with a single API call. No models to train, no templates to
            draw.
          </p>
          <div className="cta-row">
            <Link href="/contact" className="btn">Get a key</Link>
            <Link href="/docs" className="btn btn-ghost">Read the docs</Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="lead" style={{ textAlign: "center", margin: "0 auto" }}>
            Klerq is a fictional developer API company used by Far and Wide B.V.
            to test audit and fix machinery. It serves no real customers.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="lead" style={{ textAlign: "center", margin: "0 auto" }}>
            Product capabilities, performance claims, customer names, and usage
            examples on this site are demonstration content, not real-world facts.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>One API. Every document.</h2>
          <p className="lead">
            Send a file, get back structured fields. Klerq handles the messy
            parts — layout, tables, handwriting, scans — so you don&apos;t have
            to.
          </p>
          <div className="grid grid-3">
            <div className="card">
              <h3>One endpoint</h3>
              <p>
                POST a PDF or image to a single endpoint and receive typed JSON.
                No pipelines to wire up.
              </p>
            </div>
            <div className="card">
              <h3>Pre-built extractors</h3>
              <p>
                Invoices, receipts, contracts and common forms work out of the
                box. Nothing to label.
              </p>
            </div>
            <div className="card">
              <h3>Fits your stack</h3>
              <p>
                A plain REST API with helper libraries for Python and
                JavaScript. Drop it into any codebase.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2>How it works</h2>
          <p className="lead">Three lines to your first extraction.</p>
          <pre>
            <code>{`curl https://api.klerq.io/v1/extract \\
  -H "Authorization: Bearer $KLERQ_KEY" \\
  -F "file=@invoice.pdf"

# → { "vendor": "Acme BV", "total": 1240.50,
#     "currency": "EUR", "due_date": "2024-06-30" }`}</code>
          </pre>
          <img src="/product-shot.svg" alt="Document fields extracted into structured JSON" width={960} height={420} style={{ maxWidth: "100%", marginTop: 32, borderRadius: 12, border: "1px solid var(--border)" }} />
        </div>
      </section>

      <section>
        <div className="container">
          <h2>Frequently asked questions</h2>
          <div style={{ marginTop: 28 }}>
            {faqs.map((f) => (
              <div className="faq-item" key={f.question}>
                <h3>{f.question}</h3>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="container">
          <h2>Start extracting today</h2>
          <p className="lead" style={{ margin: "0 auto 28px" }}>
            Get an API key and process your first document in minutes.
          </p>
          <Link href="/contact" className="btn">Get a key</Link>
        </div>
      </section>
    </>
  );
}
