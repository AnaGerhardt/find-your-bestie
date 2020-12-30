import Head from "next/head";
import React from "react";
import { AutoSuggest as LocationInput, Footer } from "components";
import { connectToDatabase } from "../lib/db";

import styles from "styles/pages/Index.module.scss";

interface IProps {
  data: { _id: string; country: string; count: number }[];
}

export default function Home({ data }: IProps) {
  const locations = data.map((el) => {
    return { city: el._id, country: el.country };
  });

  return (
    <>
      <Head>
        <title>Select Your Location | Find Your Bestie!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.intro}>
        <div className={styles.logo} />

        <div className={styles.dog} />

        <div className={styles.form}>
          <label>Where are you from?</label>
          <LocationInput data={locations} />
          <small>*Currently only available in Edinburgh</small>
        </div>
      </main>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("pets")
    .aggregate([
      {
        $group: {
          _id: "$city",
          count: { $sum: 1 },
          country: { $first: "$country" },
        },
      },
    ])
    .toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}
