import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beyond 0&apos;s and 1&apos;s</title>
        <meta name="description" content="my first software development blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.title}>
        <h1 className={styles.header}>Beyond 0&apos;s and 1&apos;s</h1>
      </div>
      <div className={styles.myPhotoDiv}>
        <Image
          src="/cvnp.jpg"
          alt="My Blog Photo"
          width={250}
          height={250}
          className={styles.myPhoto}
        />
      </div>
      <div className={styles.wordsWidth}>
        <p className={styles.description}>
          Hello! My name is <b>Chris Martinez</b> and this is my blog for
          aspiring software developers. I&apos;ve spent years studying software
          development, specifically JavaScript frameworks and other web tools.
          Follow me on{" "}
          <a
            href="https://twitter.com/mycodecantalk"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>{" "}
          to stay up-to-date on my latest projects, or if you have any
          questions. <br />
          <br /> This blog was created using{" "}
          <u>Next + React, ESLint, and Vercel</u>
        </p>
        <p className={styles.blogCap}>
          <b>Blog</b>
          <br />
          <br />
          <Link href="/posts/my-first-post" className={styles.myLinks}>
            My First Post!
          </Link>
          <p className={styles.date}>October 31st, 2022</p>
        </p>
      </div>
    </div>
  );
}
