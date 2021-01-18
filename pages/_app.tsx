import "styles/globals.scss";
import "nprogress/nprogress.css";
import "react-toastify/dist/ReactToastify.css";
import React from "react";
import Router from "next/router";
import { useRouter } from "next/router";
import { Layout as BasicLayout } from "components";
import { ToastContainer } from "react-toastify";
import NProgress from "nprogress";

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
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer position="top-center" />
    </>
  );
}

export default MyApp;
