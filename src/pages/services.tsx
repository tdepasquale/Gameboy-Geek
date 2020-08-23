import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Services from "../Components/Services";

export default function ServicesPage() {
  return (
    <div className="main-container">
      <Head>
        <title>Game Boy Geek | Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Services />
      </main>

      <div className="next-page-button-container">
        <Link href="/contact">
          <a className="btn cta-button">Contact &rarr;</a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
