import Link from "next/link";
import styles from "./services.module.scss";

interface service {
  title: string;
  description: string;
  preview?: any;
  icon?: any;
}

export default function Services() {
  const services: service[] = [
    {
      title: "Kickstarter Preview",
      description:
        "Want a high quality, high energy preview for your Kickstarter project? Dan has completed over 150 videos for Kickstarter and can make sure your project page looks great with his polished look and clear and concise gameplay explanations. Here is an example of what a preview looks like.",
      preview: (
        <iframe
          width="295"
          height="220"
          src="https://www.youtube.com/embed/4iXNPnF-Hng"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      icon: (
        <img
          className={styles.icon}
          src="/images/kickstarter-logo.png"
          alt="Kickstarter Logo"
        />
      ),
    },
    {
      title: "Pre-Sale Preview",
      description:
        "About to launch your pre-sale campaign? What a better way to get customers to pull the trigger than with a high quality, high energy look at your advanced production copy (or proto-type). Showing off the components & watching Dan's clear and concise gameplay explanations will surely help your sales.",
      preview: (
        <iframe
          width="295"
          height="220"
          src="https://www.youtube.com/embed/pj1ylKBVX5w"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      icon: (
        <img
          className={styles.icon}
          src="/images/sale.svg"
          alt="Pre-Sale Preview Image"
        />
      ),
    },
    {
      title: "2-Min Sales & Marketing Videos",
      description:
        "With so many games flooding the market, it’s imperative to have a quick and easy way for people to find out what your game is about, and why they would want to buy it. My 2-minute sales & marketing videos do just that. Here is an example that you can place on your website, online store (like Amazon), social media and more!",
      preview: (
        <iframe
          width="295"
          height="220"
          src="https://www.youtube.com/embed/O81XU-XSfj8"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      icon: (
        <img
          className={styles.icon}
          src="/images/fast-time.svg"
          alt="2-Min Sales and Marketing Image"
        />
      ),
    },
    {
      title: "Rules School (How to Play)",
      description:
        "Forget the rules, let Dan teach the game to your clients. He has learned and taught hundreds of games and will teach yours in the most efficient and easy to learn way imaginable. You can use this video in your marketing, and even with a QR code in your rule book!",
      preview: (
        <iframe
          width="295"
          height="220"
          src="https://www.youtube.com/embed/zQRKEDUuS8M"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ),
      icon: (
        <img
          className={styles.icon}
          src="/images/know-how.svg"
          alt="How To Play Image"
        />
      ),
    },
    {
      title: "Rule Book Consulting",
      description:
        "Rulebooks are scary! It's a hurdle to get people to play your game, so why not have one that is clear and concise for a first time player to your game? Dan helped re-write the 2nd edition for the award winning co-op game Police Precinct. He can help yours too! See a sample of the difference here. Click the example to zoom in.",
      preview: (
        <div className={styles.rulesPreview}>
          <Link href="/rule-book-consulting-example">
            <a>
              <div>Before</div>
              <img src="/images/rules-before.png" alt="Original Rules" />
              <div>After</div>
              <img src="/images/rules-after.png" alt="Updated Rules" />
            </a>
          </Link>
        </div>
      ),
      icon: (
        <img
          className={styles.icon}
          src="/images/book.svg"
          alt="Rule Book Consulting Image"
        />
      ),
    },
    {
      title: `"Mock" Reviews`,
      description:
        "Want Dan's opinion on your new game? He will play test it with his group and give you a full report as to what he likes, and what can be improved. Think of it as a private review before you go to publication with it.",
      icon: (
        <img
          className={styles.icon}
          src="/images/rating.svg"
          alt="Mock Review Image"
        />
      ),
    },
  ];
  return (
    <section className={styles.container}>
      <div className="section-title">Services Available</div>
      {services.map((service) => (
        <article key={service.title} className={styles.serviceContainer}>
          <div className={styles.serviceIconContainer}>{service.icon}</div>
          <div className={styles.serviceTextContainer}>
            <div className="subtitle">{service.title}</div>
            <div className="justify-text">{service.description}</div>
          </div>
          <div className={styles.previewContainer}>
            <div>{service.preview}</div>
          </div>
        </article>
      ))}

      {/* Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a> 
      <div>Icons made by <a href="https://www.flaticon.com/authors/flat-icons" title="Flat Icons">Flat Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
      */}
    </section>
  );
}
