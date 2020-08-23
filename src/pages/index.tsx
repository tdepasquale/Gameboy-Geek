import axios from "axios";
import Head from "next/head";
import Link from "next/link";
import decode from "unescape";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import YoutubeCard from "../Components/YoutubeCard";

interface IVideo {
  id: string;
  title: string;
  imageUrl: string;
}

interface IProps {
  latestVideos: IVideo[];
}

export default function Home({ latestVideos }: IProps) {
  return (
    <div className="main-container">
      <Head>
        <title>Game Boy Geek | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <div className="section-title">Latest Videos</div>

        <section className="youtube-cards">
          {latestVideos?.map((video) => (
            <YoutubeCard
              key={video.id}
              id={video.id}
              title={video.title}
              imageUrl={video.imageUrl}
            />
          ))}
        </section>
      </main>

      <div className="next-page-button-container">
        <Link href="/testimonials">
          <a className="btn cta-button">Testimonials &rarr;</a>
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const KEY = process.env.KEY;
  const CHANNEL_ID = process.env.CHANNEL_ID;
  const oneDayInSeconds = 86400;

  const response = await axios.get(
    "https://www.googleapis.com/youtube/v3/search",
    {
      params: {
        channelId: CHANNEL_ID,
        part: "snippet",
        maxResults: 6,
        order: "date",
        key: KEY,
      },
    },
  );

  const videos: IVideo[] = response.data.items.map((rawVideoData: any) => {
    let video: IVideo = {
      id: rawVideoData.id.videoId ?? "NO-ID-" + Math.random().toString(),
      title: decode(rawVideoData.snippet.title),
      imageUrl: rawVideoData.snippet.thumbnails.medium.url,
    };
    return video;
  });

  return {
    props: {
      latestVideos: videos,
    },
    revalidate: oneDayInSeconds,
  };
}
