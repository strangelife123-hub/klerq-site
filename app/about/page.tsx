export const metadata = {
  title: "About Klerq",
};

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p className="meta">Who we are</p>

      <p>
        Klerq was founded in 2021 in Amsterdam by a small team of engineers who
        were tired of building the same document-parsing code over and over
        again. What started as an internal tool for a fintech became the API we
        offer today.
      </p>

      <p>
        We believe extracting data from documents should be a solved problem —
        something you call, not something you build. Our pricing reflects that:
        usage-based plans start at €0.01 per page, with no minimums and no
        setup fees.
      </p>

      <p>
        Today Klerq is used by teams across finance, legal and operations to
        process millions of documents. We are a remote-first company with
        near-perfect uptime and a focus on doing one thing well.
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
