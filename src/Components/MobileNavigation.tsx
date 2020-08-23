import Link from "next/link";
import styles from "./navigation.module.scss";

export default function MobileNavigation() {
  return (
    <nav role="navigation" className={styles.mobileNavigation}>
      <div className={styles.menuToggle}>
        <input type="checkbox" />

        <span></span>
        <span></span>
        <span></span>

        <ul className={styles.menu}>
          <Link href="/">
            <a className={styles.mobileBtn}>
              <li>Home</li>
            </a>
          </Link>
          <Link href="/testimonials">
            <a className={styles.mobileBtn}>
              <li>Testimonials</li>
            </a>
          </Link>
          <Link href="/services">
            <a className={styles.mobileBtn}>
              <li>Services</li>
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.mobileBtn}>
              <li>Contact</li>
            </a>
          </Link>
        </ul>
      </div>
    </nav>
  );
}
