export const metadata = {
  title: "How we parse a messy invoice",
};

export default function Post() {
  return (
    <div className="prose">
      <h1>How we parse a messy invoice</h1>
      <p className="meta">2 September 2023</p>

      <p>
        Invoices look simple until you have to read ten thousand of them. Every
        vendor has its own layout, its own idea of where the total goes, and its
        own creative approach to dates. Here is roughly how Klerq turns that mess
        into clean fields.
      </p>

      <h2>Step 1: normalise the page</h2>
      <p>
        Scans come in rotated, skewed and at wildly different resolutions. Before
        we do anything else we straighten the page and bring it to a consistent
        size, so later stages see something predictable.
      </p>

      <h2>Step 2: understand the layout</h2>
      <p>
        We detect blocks — headers, tables, totals — and their relationships. A
        number sitting under a column labelled &quot;Amount&quot; means
        something different from the same number in the footer.
      </p>

      <h2>Step 3: extract and type</h2>
      <p>
        Finally we pull the fields and give them types: a total is a number, a
        due date is a date, a vendor is a string. Anything the model is unsure
        about gets a low confidence score so you can review it.
      </p>

      <p>
        The result is the same structured JSON whether the invoice came from a
        clean PDF or a photo taken in a warehouse.
      </p>
    </div>
  );
}
