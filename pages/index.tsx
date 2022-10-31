import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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
          width={300}
          height={300}
          className={styles.myPhoto}
        />
      </div>
    </div>
  );
}
