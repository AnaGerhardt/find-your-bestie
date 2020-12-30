import "styles/globals.scss";
import React from "react";
import { useRouter } from "next/router";
import { Layout as BasicLayout } from "components";
<meta
  name="viewport"
  content="width=device-width, height=device-height,  initial-scale=1.0, user-scalable=no;user-scalable=0;"
/>;
{
  /* <meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>; */
}

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
