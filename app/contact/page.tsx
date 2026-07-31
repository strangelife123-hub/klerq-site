export const metadata = {
  title: "Contact Klerq",
};

export default function Contact() {
  return (
    <div className="prose">
      <h1>Get a key</h1>
      <p className="meta">Contact</p>

      <p>
        Klerq is currently onboarding new teams by request. Email us and
        we&apos;ll send you an API key, usually within one business day.
      </p>

      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:hello@klerq.io">hello@klerq.io</a>
        <br />
        <strong>Based in:</strong> Amsterdam, the Netherlands
      </p>

      <h2>Plans</h2>
      <p>
        Paid plans start at a flat €99/month for up to 5,000 pages, with volume
        pricing above that. Tell us roughly how many documents you expect to
        process and we&apos;ll recommend a plan.
      </p>

      <h2>Support</h2>
      <p>
        Existing customers can reach support at{" "}
        <a href="mailto:support@klerq.io">support@klerq.io</a>.
      </p>
    </div>
  );
}
