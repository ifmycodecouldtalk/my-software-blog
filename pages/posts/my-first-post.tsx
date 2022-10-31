import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/FirstPost.module.css";

export default function FirstPost() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Beyond 0's and 1's</title>
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
          <b>My First Post!</b>
        </h1>
        <p className={styles.date}>October 31st, 2022</p>

        <p className={styles.description}>
          Welcome to my first blog post! In this page, I will try to layout the
          purposes and goals of this project for all of my readers.
        </p>

        <p className={styles.description}>
          <b>Firstly</b>, this project is to put my web development skills to
          the test. This blog is powered by technologies like NextJS,
          Typescript, and Vercel. This blog will allow me to test things like
          CI/CD, testing with ESLint, and other concepts that are important for
          web developers.
        </p>

        <p className={styles.description}>
          <b>Second</b>, this blog will be for you, the readers. I want to pass
          on what I've learned throughout the years I have been studying web
          development. I will cover the beginning of my journey all the way
          until the present. You can navigate my blog as though it were a
          timeline through my history as a web developer. The journey to
          becoming a web developer is hard, and everyone has a different opinion
          as to what the best way is to landing a web development job. This blog
          will be the mouthpiece I use to tell everyone how I'm going about it.
        </p>

        <p className={styles.description}>
          <b>Lastly</b>, I've always wanted to run a blog. Having experience
          writing for a blog can translate into a lot of powerful opportunities,
          like marketing for a business or cultivating a large audience. This
          kind of experience is invaluable to me, and I'd love to start with
          this very blog. My promise is that what you will find in this blog
          will help you, whether you are an absolute beginner to web development
          or an advanced programmer. I want to provide the perspective of
          someone passionate about coding and web development, and what I think
          the best way to get into web development is.
        </p>

        <p className={styles.description}>
          Thank you for reading my first post! Any feedback or questions, please
          reach out to me on my Twitter which you can find on my home page.
          Stick around for blog posts that will improve your software
          development. I guarantee you'll learn something new.
        </p>

        <Link href="/" className={styles.backHome}>
          <u>⬅ Back to Home</u>
        </Link>
      </div>
    </div>
  );
}
