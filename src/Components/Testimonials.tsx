import styles from "./testimonials.module.scss";

interface testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export default function Testimonials() {
  const testimonials: testimonial[] = [
    {
      quote: `The Game Boy Geek explains games better than anyone I have ever seen!`,
      name: "Karl Fenner",
      role: "",
      company: "Common Man Games",
    },
    {
      quote: `The Game Boy Geek's game explanations are the clearest and easiest to understand.`,
      name: "Yves",
      role: "",
      company: "Hurrican Games",
    },
    {
      quote: `Dan Brilliantly described the core & spirit of our game (Swords & Bagpipes). He also helped us improve the game rules significantly.`,
      name: "Denis Davydov",
      role: "",
      company: "Hobby World Games",
    },
    {
      quote: `Dan King’s Rules Schools Videos have been an integral part of our marketing strategy. They are thorough, well crafted, and perfect for helping players get games on the table as fast as possible. Dan is incredibly easy to work with and is always willing to quickly make small changes, ensuring his videos are accurate, concise, and delivered on time.  Highly recommended.`,
      name: "Sara Erickson",
      role: "Director of Sales and Marketing",
      company: "Renegade Game Studios",
    },
    {
      quote: `I’ve worked on several projects with Dan, and his enthusiasm for gaming is contagious, and he has been a pleasure to work with. He's very responsive and has always been able to meet (and usually exceed) tight deadlines. The quality of the end product is always outstanding, and we're looking forward to working with Dan on many projects in the future.`,
      name: "Ted Alspach",
      role: "President",
      company: "Bezier Games",
    },
    {
      quote: `Dan King’s Rules School videos are a fantastic asset to our growing line of game videos. The 1 min overview in particular has served us so well for so many vendors. It’s an absolute thrill to work with Dan - he is quick, detail oriented and proactive, truly caring what the designer and production team want to see in every game on screen.`,
      name: "Peter Vaughan",
      role: "Director of Game Development",
      company: "Breaking Games by AdMagic",
    },
    {
      quote: `Dan produces high quality how to play videos that effectively teach our games and present them in the best possible way. Dan is open to feedback and makes changes quickly based on our feedback. I can’t recommend working with Dan enough on his Rules School videos.`,
      name: "Kirk Dennison",
      role: "",
      company: "Piecekeeper Games",
    },
    {
      quote: `Dan puts careful thought into making it easy for others to learn our games.  I know our customers value his approach to teaching games and that helps them make an informed purchase decision.`,
      name: "Kevin Nesbit",
      role: "",
      company: "Mercury Games",
    },
    {
      quote: `Selecting which reviewers to work with is a tough decision. You do not look at subscribers or viewers or numbers. It has to do with trust. With knowing that you will work with someone who you can talk to, discuss, explain and understand your project. Someone who even if he has not time he will make time for you. Someone who will do the edits you need to have. Someone who you will know he will deliver. You do not need someone. You need Dan. This is why Dreamcraft Games will always work with the Gameboygeek!`,
      name: "Theosis",
      role: "",
      company: "Dreamcraft Games",
    },
    {
      quote: `The Game Boy Geek is fantastic to work with. He is professional, responsive to emails, and really gets to know your game. It is clear that he puts a lot of time and effort into creating Preview Videos and this is reflected in the final product. I am so pleased with the result of our video, how easy it was to work with him through a couple of edits, and the speed in which he delivered the content. This is our first Kickstarter campaign and Dan willingly answered our questions and made the whole process seamless. I would work with him again in an instant and highly recommend his services.`,
      name: "Christine Tompa",
      role: "",
      company: "Build-iT With Bryan Team",
    },
    {
      quote: `Being a first time publisher is not easy and every bit of support is crucial. Especially when it comes from already established names like Dan King from The Game Boy Geek. Unlike many others, Dan responded to my preview request in a supportive and enthusiastic way, which was really refreshing and motivating. His responsiveness and openness for preview edits were highly professional and he finished the video days before a deadline. He will be first on my contact list for the next one!`,
      name: "Mitja Žibert",
      role: "",
      company: "RealGrin Games",
    },
  ];

  function isNullOrWhiteSpace(input: string) {
    return !input || !input.trim();
  }

  return (
    <section className={styles.container}>
      <h4 className="section-title">Testimonials</h4>
      {testimonials.map((testimonial) => (
        <article key={testimonial.name} className={styles.testimonialCard}>
          <div className={styles.quoteMark}>&quot;</div>
          <div className={styles.quote}>{testimonial.quote}</div>
          <div className={styles.name}>{testimonial.name}</div>
          {isNullOrWhiteSpace(testimonial.role) ? undefined : (
            <div className={styles.role}>{testimonial.role} at </div>
          )}
          <div className={styles.company}>{testimonial.company}</div>
        </article>
      ))}
    </section>
  );
}
