import Link from "next/link";

export const metadata = {
  title: "Klerq Blog",
};

const posts = [
  {
    slug: "introducing-klerq",
    title: "Introducing Klerq",
    date: "2022-03-14",
    excerpt:
      "Klerq turns invoices, receipts and contracts into structured JSON without models to train or templates to draw. Learn why we built the API, how beta pricing works and how to send your first document.",
  },
  {
    slug: "how-we-parse-invoices",
    title: "How we parse a messy invoice",
    date: "2023-09-02",
    excerpt:
      "See how Klerq turns inconsistent invoices into clean, typed fields by normalising scans, understanding headers, tables and totals, and assigning confidence scores to extracted data.",
  },
];

export default function Blog() {
  return (
    <div className="container" style={{ paddingTop: 64, paddingBottom: 48 }}>
      <h1 style={{ fontSize: 42, letterSpacing: "-1px" }}>Blog</h1>
      <p className="lead">Notes on documents, data and the API.</p>
      <ul className="post-list">
        {posts.map((p) => (
          <li key={p.slug}>
            <article>
              <div className="date">{p.date}</div>
              <Link href={`/blog/${p.slug}`}><h2>{p.title}</h2></Link>
              <p>{p.excerpt}</p>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
