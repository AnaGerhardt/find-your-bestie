import "styles/globals.scss";
import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { Layout as BasicLayout } from "components";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
/>;

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

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
