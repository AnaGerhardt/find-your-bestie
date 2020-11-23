import Head from "next/head";
import Header from "components/Header/Header";

export default function Main() {
  return (
    <>
      <Head>
        <title>Main | Find Your Bestie!</title>
      </Head>
      <Header />
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
