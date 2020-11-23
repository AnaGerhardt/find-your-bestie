import Head from "next/head";
import React from "react";
import { AutoSuggest as LocationInput } from "components/AutoSuggest/AutoSuggest";

import styles from "styles/pages/Index.module.scss";

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Select Your Location | Find Your Bestie!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.intro}>
        <img className={styles.logo} src="images/logo.svg" alt="" />

        <div className="dog" />

        <div className={styles.form}>
          <label>Where are you from?</label>
          <LocationInput data={data} />
          <div className={styles.observation}>
            Obs.: Currently only available in Edinburgh
          </div>
        </div>
      </main>

      <style jsx>{`
        .dog {
          width: 9rem;
          height: 9rem;
          margin: 1.5rem 0;
          border: 2px solid rgba(0, 0, 0, 0.2);
          border-radius: 50%;
          background-size: contain;
          background-image: url("/images/dog.jpg");
        }
      `}</style>
    </>
  );
}

export async function getStaticProps() {
  const request = await fetch("http://localhost:3000/api/locations");
  const json = await request.json();

  return {
    props: {
      data: json.data,
    },
  };
}
