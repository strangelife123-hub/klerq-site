import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  twitter: { description: "Klerq is a fictional developer API demonstration site operated by Far & Wide B.V. to test audit and fix machinery." },
  openGraph: { description: "Klerq is a fictional developer API demonstration site operated by Far & Wide B.V. to test audit and fix machinery." },
  description: "Klerq is a fictional developer API demonstration site operated by Far & Wide B.V. to test audit and fix machinery.",
  title: "Klerq",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
