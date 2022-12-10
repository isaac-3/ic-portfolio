/* eslint-disable @next/next/no-page-custom-font */
import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/style.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Isaac Chavez</title>
        <link rel="icon" href="iclogo.svg" />
        {/* <meta
          prefix="og: http://ogp.me/ns#"
          property="og:title"
          content="Isaac Chavez"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:url"
          content="https://isaac-chavez.com/"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image"
          content="https://images.pexels.com/photos/1460627/pexels-photo-1460627.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image:width"
          content="225"
        />
        <meta
          prefix="og: http://ogp.me/ns#"
          property="og:image:height"
          content="150"
        /> */}
        <meta name="description" content="Isaac Chavez" />
        {/* @ts-ignore */}
        <form name="contact" netlify="true" netlify-honeypot="bot-field" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>

        {/* <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Advent+Pro:wght@300&family=Poppins:wght@200&display=swap"
        /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
