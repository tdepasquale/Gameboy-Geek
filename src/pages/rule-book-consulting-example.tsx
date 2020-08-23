import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export default function RuleBookConsultingExample() {
  return (
    <div className="main-container">
      <Head>
        <title>Game Boy Geek | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="rulebook-consulting-example">
          <div className="section-title">Rulebook Consulting Example</div>
          <div className="padding-bottom-2">
            Original rules for Police Precinct
          </div>
          <img src="/images/rules-before.png" alt="Original Rules" />
          <div className="padding-y-2">
            Dan's revised rules for Police Precinct
          </div>
          <img src="/images/rules-after.png" alt="Updated Rules" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
