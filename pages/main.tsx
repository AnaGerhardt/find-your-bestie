import Head from "next/head";

export default function Main() {
  return (
    <>
      <Head>
        <title>Main | Find Your Bestie!</title>
      </Head>
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
