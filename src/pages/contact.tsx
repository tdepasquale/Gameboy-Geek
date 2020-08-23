import Head from "next/head";
import ContactForm from "../Components/ContactForm";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function ContactPage() {
  return (
    <div className="main-container">
      <Head>
        <title>Game Boy Geek | Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
