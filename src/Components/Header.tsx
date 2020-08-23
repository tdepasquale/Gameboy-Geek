import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

export default function Header() {
  return (
    <header>
      <nav className="nav-grid">
        <Link href="/">
          <a className="btn">Home</a>
        </Link>
        <Link href="/testimonials">
          <a className="btn">Testimonials</a>
        </Link>
        <Link href="/services">
          <a className="btn">Services</a>
        </Link>
        <Link href="/contact">
          <a className="btn">Contact</a>
        </Link>
      </nav>

      <MobileNavigation />

      <figure className="logo">
        <img
          src="/images/gameboygeek-eyes.png"
          alt="game boy geek logo"
          className="logo-image"
        ></img>
        <h1 className="logo-font">
          game<span className="accent-light">boy</span>geek
        </h1>
      </figure>

      <h2 className="tagline">
        Breaking Down Barriers &amp; Growing Relationships Through Board Games.
      </h2>
    </header>
  );
}
