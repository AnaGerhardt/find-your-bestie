import Head from "next/head";
import { useRouter } from "next/router";
import styles from "styles/pages/Main.module.scss";

export default function Main() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Main | Find Your Bestie!</title>
      </Head>
      <header>
        <input type="text" className={styles.search} />
        <div className={styles.assets}>
          <div className="avatar" onClick={() => router.push("/login")} />
        </div>
      </header>
      <main>Ldsdsa</main>
      <style jsx>{`
        .avatar {
          width: 3rem;
          height: 3rem;
          border-radius: 50%;
          background-size: contain;
          background-image: url("/images/dog.jpg");
        }
      `}</style>
    </>
  );
}
