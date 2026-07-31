import Link from "next/link";

export const metadata = {
  title: "Klerq Blog",
};

const posts = [
  {
    slug: "introducing-klerq",
    title: "Introducing Klerq",
    date: "2022-03-14",
  },
  {
    slug: "how-we-parse-invoices",
    title: "How we parse a messy invoice",
    date: "2023-09-02",
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
            <div className="date">{p.date}</div>
            <Link href={`/blog/${p.slug}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
