import styles from "./youtubeCard.module.scss";

export interface IYoutubeCardProps {
  id: string;
  title: string;
  imageUrl: string;
}

export default function YoutubeCard({
  id,
  title,
  imageUrl,
}: IYoutubeCardProps) {
  return (
    <article className={styles.card}>
      <a
        href={`https://www.youtube.com/watch?v=${id}`}
        target="_blank"
        className={styles.cardLink}
      >
        <div className={styles.cardImageContainer}>
          <img className={styles.cardImage} src={imageUrl} alt={title}></img>
        </div>

        <div className={styles.cardInfo}>
          <h3>{title}</h3>
          <span>by&nbsp;gameboygeek</span>
        </div>
      </a>
    </article>
  );
}
