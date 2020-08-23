import Head from "next/head";
import Link from "next/link";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Testimonials from "../Components/Testimonials";

export default function TestimonialsPage() {
  return (
    <div className="main-container">
      <Head>
        <title>Game Boy Geek | Testimonials</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <Testimonials />
      </main>

      <div className="next-page-button-container">
        <Link href="/services">
          <a className="btn cta-button">Services &rarr;</a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
