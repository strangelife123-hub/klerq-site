import Link from "next/link";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand">
          <span className="dot" />
          Klerq
        </Link>
        <div className="nav-links">
          <Link href="/product">Product</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/about">About</Link>
          <Link href="/contact" className="btn">Get a key</Link>
        </div>
      </div>
    </nav>
  );
}
