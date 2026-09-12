export const metadata = {
  title: "Pricing — Klerq",
  description: "Pricing information for the fictional Klerq demonstration website.",
  alternates: { canonical: "/pricing" },
};

export default function Pricing() {
  return (
    <div className="prose">
      <h1>Pricing</h1>
      <p className="meta">Plans</p>

      <p>
        Klerq is a fictional demonstration website operated by Far and Wide B.V.
        It has no paid plans and sells no products or services.
      </p>

      <h2>Demonstration content</h2>
      <p>
        Pricing shown elsewhere on this site is demonstration content and should
        not be treated as an offer.
      </p>
    </div>
  );
}
