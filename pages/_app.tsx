import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "@/components/Layout";
import { GlobalStyle } from "@/components/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <GlobalStyle />
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
          <meta name="msapplication-TileColor" content="#121212" />
          <meta name="theme-color" content="#121212" />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
