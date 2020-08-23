import styles from "./contactForm.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.container}>
      <div className="section-title">Contact</div>

      <div className={styles.input}>
        <input
          type="text"
          id="Name"
          className={styles.inputText}
          placeholder="Your name, e.g. Vlaada Chvatil"
        />
        <label htmlFor="Name" className={styles.inputLabel}>
          Name
        </label>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          id="Email"
          className={styles.inputText}
          placeholder="Your email, e.g. BrunoCathala@gmail.com"
        />
        <label htmlFor="Email" className={styles.inputLabel}>
          Email
        </label>
      </div>
      <div className={styles.input}>
        <input
          type="text"
          id="Subject"
          className={styles.inputText}
          placeholder="Subject, e.g. Rules School video for my awesome game"
        />
        <label htmlFor="Subject" className={styles.inputLabel}>
          Subject
        </label>
      </div>
      <button type="submit" className="cta-button contact-button">
        Submit
      </button>
    </section>
  );
}
