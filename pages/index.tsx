import Head from "next/head";
import { useRouter } from "next/router";
import { InferGetServerSidePropsType } from "next";
import { useEffect } from "react";
import styles from "styles/Home.module.scss";
import { tokenRequest } from "pages/api/pet-finder";

export default function Home(
  { data } /*: InferGetServerSidePropsType<typeof getServerSideProps>*/
) {
  // useEffect(() => {
  //   whatever();
  // });
  // async function whatever() {
  //   const api = await tokenRequest();
  //   console.log(api);
  // }
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Select Your Location</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img id="logo" src="images/logo.svg" alt="" />

        <div className="dog" />

        <div className={styles.form}>
          <label>Where are you from?</label>
          <input
            type="text"
            name="location"
            onClick={() => router.push("/main")}
          />
          <p className="observation">
            *Only available in USA, Canada or Mexico
          </p>
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
        input {
          background-size: 1.5rem;
          background-image: url("/images/place.svg");
          background-position: 3% center;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}

// export async function getServerSideProps() {
//   const encode = btoa(
//     `${process.env.REACT_APP_CLIENT_KEY}:${process.env.REACT_APP_CLIENT_SECRET}`
//   );

//   const requestOptions = {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/x-www-form-urlencoded",
//       Authorization: `Basic ${encode}`,
//     },
//   };

//   // Fetch data from external API
//   const res = await fetch(
//     `https://api.petfinder.com/v2/oauth2/token?grant_type=client_credentials`,
//     requestOptions
//   );
//   const data: Object = await res.json();

//   // Pass data to the page via props
//   return { props: { data } };
// }
