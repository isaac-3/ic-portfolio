/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import { ErrorBoundary } from "../components/errorBounty";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Head>
        <title>Isaac Chavez</title>
      </Head>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}

export default MyApp;
