export const metadata = {
  title: "Introducing Klerq",
  description:
    "An introduction to Klerq, a fictional document-processing API demonstration operated by Far and Wide B.V.",
};

export default function Post() {
  return (
    <article className="prose">
      <h1>Introducing Klerq</h1>
      <p className="meta">14 March 2022</p>

      <p>
        Today we&apos;re presenting Klerq, a fictional API demo for turning documents
        into structured data. Klerq is part of a demonstration website operated
        by Far and Wide B.V. It is not a real business or software provider and
        does not sell products or services.
      </p>

      <p>
        Klerq demonstrates how a document-processing API could take a document —
        an invoice, a receipt, a contract or a structured form — and return the
        fields an application needs as typed JSON. There are no models to train
        and no templates to draw in the demonstration: you send a file and get
        back structured data.
      </p>

      <img
        src="/product-shot.svg"
        alt="Document fields extracted into structured JSON"
        width={960}
        height={420}
        style={{
          maxWidth: "100%",
          height: "auto",
          marginTop: 32,
          borderRadius: 12,
          border: "1px solid var(--border)",
        }}
      />

      <h2>Why document extraction matters</h2>
      <p>
        Invoices and other business documents may look simple, but every vendor
        uses a different layout. Totals, dates and supplier names move around,
        while scanned pages can be rotated, skewed or saved at different
        resolutions. A script based only on fixed positions or regular
        expressions quickly becomes fragile and requires ongoing maintenance.
      </p>

      <h2>How the Klerq demonstration works</h2>
      <p>
        The example workflow first normalises each page and analyses its layout.
        It identifies related blocks such as headers, tables and totals before
        extracting the relevant values. The result gives each field an
        appropriate type: a total is a number, a due date is a date and a vendor
        name is a string.
      </p>
      <p>
        Each extracted field also includes a confidence score. A consuming
        application could use that score to send uncertain values for human
        review rather than accepting unreliable data. The same structured JSON
        format is used whether the source is a clean PDF or a photograph taken
        in a warehouse.
      </p>

      <h2>Supported examples</h2>
      <p>
        The fictional Klerq API illustrates extraction for invoices and credit
        notes, receipts and expense records, contracts and agreements, and
        structured forms and applications. It also shows example endpoints for
        single-document extraction, batch submission and retrieving an
        asynchronous result.
      </p>

      <h2>Getting started</h2>
      <p>
        The documentation contains a demonstration quickstart, request format
        and sample JSON response. Klerq does not issue working API keys, onboard
        customers or offer paid plans; all product, pricing and usage examples
        on this website are demonstration content.
      </p>
    </article>
  );
}
