export const metadata = {
  title: "Contact Klerq",
  description:
    "Contact page: Learn how to reach the fictional Klerq API demo and why this Far and Wide B.V. test website does not issue working API keys.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <div className="prose">
      <h1>Get a key</h1>
      <p className="meta">Contact</p>

      <p>
        Klerq is a fictional demonstration website. It does not onboard
        customers or issue working API keys.
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@klerq.io">hello@klerq.io</a>
        <br />
        <strong>Based in:</strong> Amsterdam, the Netherlands
      </p>

      <h2>Plans</h2>
      <p>
        Klerq has no paid plans and sells no products or services. Pricing shown
        elsewhere on this demonstration site should not be treated as an offer.
      </p>

      <h2>Support</h2>
      <p>
        Klerq serves no real customers. This page is retained only as part of
        the Far and Wide B.V. test website.
      </p>
    </div>
  );
}
