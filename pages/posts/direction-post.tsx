import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/DirectionPost.module.css";

export default function DirectionPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beyond 0&apos;s and 1&apos;s</title>
        <meta name="description" content="my first software development blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.myPhotoDiv}>
        <Image
          src="/cvnp.jpg"
          alt="My Blog Photo"
          width={200}
          height={200}
          className={styles.myPhoto}
        />
      </div>
      <div className={styles.blogContent}>
        <h1 className={styles.blogTitle}>
          <b>Direction of my Blog</b>
        </h1>
        <p className={styles.date}>November 11th, 2022</p>

        <p className={styles.description}>
          Balancing life and work can be a challenge for a lot of people,
          including myself. I want to use this blog as a way to ensure that I'm
          mindful of my tasks and to remind myself of what I need to achieve as
          a web developer. I want to use this platform to teach others common
          web development concepts while also reinforcing my knowledge. This
          blog will also get me used to the idea of having to update and
          maintain a website. This will be a short post, it's sort of like a
          mission statement that I will use to remind myself of what I want to
          do with this blog. Stay tuned for more updates and future tutorials.
        </p>

        <Link href="/" className={styles.backHome}>
          <u>⬅ Back to Home</u>
        </Link>
      </div>
    </div>
  );
}
