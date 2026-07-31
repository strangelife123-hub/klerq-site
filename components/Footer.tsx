import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Klerq API</h4>
          <p style={{ maxWidth: 260, margin: 0 }}>
            Turn documents into structured data with one API call.
          </p>
        </div>
        <div>
          <h4>Product</h4>
          <Link href="/product">Overview</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h4>Developers</h4>
          <a href="https://github.com/strangelife123-hub/klerq-docs">GitHub</a>
          <a href="https://github.com/strangelife123-hub/klerq-docs">API reference</a>
          <Link href="/docs">Quickstart</Link>
        </div>
      </div>
      <div className="container" style={{ marginTop: 32, opacity: 0.6 }}>
        © 2024 Klerq. All rights reserved.
      </div>
    </footer>
  );
}
