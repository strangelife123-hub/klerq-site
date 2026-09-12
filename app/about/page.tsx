export const metadata = {
  twitter: {
  description: "Klerq is a fictional website operated by Far and Wide B.V. for end-to-end testing.",
  title: "About Klerq — A Fictional API Demo", card: "summary" },
  openGraph: {
  url: "https://klerq-site.vercel.app/about",
  description: "Learn why Far and Wide B.V. operates Klerq as a fictional website for end-to-end testing.", title: "About Klerq — A Fictional API Demo" },
  description: "Company information: Learn why Far and Wide B.V. operates Klerq as a fictional document-processing API website for end-to-end testing.",
  title: "About Klerq",
};

export default function About() {
  return (
    <div className="prose">
      <h1>About</h1>
      <p className="meta">Who we are</p>

      <p>
        Klerq is a fictional developer document-processing API company used in
        a demonstration website operated by Far and Wide B.V.
      </p>

      <p>
        This website exists to test audit and fix machinery end-to-end. Klerq
        does not sell products or services and has no paid tier.
      </p>

      <p>
        Klerq is not a real business or software provider and serves no real
        customers. Product and usage examples on this site are demonstration
        content.
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
