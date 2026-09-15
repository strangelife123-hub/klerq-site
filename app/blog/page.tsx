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
      "Klerq takes a document — an invoice, a receipt, a contract — and returns the fields you need as JSON. There are no models to train and no templates to draw.",
  },
  {
    slug: "how-we-parse-invoices",
    title: "How we parse a messy invoice",
    date: "2023-09-02",
    excerpt:
      "Invoices look simple until you have to read ten thousand of them. Every vendor has its own layout, its own idea of where the total goes, and its own creative approach to dates.",
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
                <time className="date" dateTime={p.date}>
                  {p.date}
                </time>
                <Link href={`/blog/${p.slug}`}>
                  <h2>{p.title}</h2>
                </Link>
                <p>{p.excerpt}</p>
              </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
