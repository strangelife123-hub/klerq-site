import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-heading">Klerq API</p>
          <p style={{ maxWidth: 260, margin: 0 }}>
            Turn documents into structured data with one API call.
          </p>
        </div>
        <div>
          <p className="footer-heading">Product</p>
          <Link href="/product">Overview</Link>
          <Link href="/docs">Documentation</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div>
          <p className="footer-heading">Company</p>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <p className="footer-heading">Developers</p>
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
