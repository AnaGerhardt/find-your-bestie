import Head from "next/head";
import styles from "styles/Favourites.module.scss";

export default function Favourites() {
  return (
    <>
      <Head>
        <title>Favourites | Find Your Bestie!</title>
      </Head>
      <main>
        <h3>My wishlist</h3>
        <div className={styles.list}></div>
      </main>
    </>
  );
}
