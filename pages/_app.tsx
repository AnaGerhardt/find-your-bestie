import "styles/globals.scss";
import React from "react";
import { useRouter } from "next/router";
import { Layout as BasicLayout } from "components";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const Layout = router.pathname === "/" ? React.Fragment : BasicLayout;

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
