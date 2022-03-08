import type { AppProps } from "next/app";
import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Layout from "@/components/Layout";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Josefin Sans';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/josefin-sans-v23-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/josefin-sans-v23-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/josefin-sans-v23-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/josefin-sans-v23-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/josefin-sans-v23-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/josefin-sans-v23-latin-regular.svg#JosefinSans') format('svg'); /* Legacy iOS */
}


@font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: url('../fonts/lato-v22-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('../fonts/lato-v22-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('../fonts/lato-v22-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('../fonts/lato-v22-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('../fonts/lato-v22-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('../fonts/lato-v22-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
}

html {
  --color-primary: #3992FF;
  --color-secondary: #D83BD2;
  --color-tertiary: #F44250;
  --color-background: #121212;
  --color-icons: #F8F8F8;
  --color-text: #fff;
  --color-cards: #E5E5E5;
}

body {
  background-color: var(--color-background, #121212);
  color: var(--color-text, #fff);
  font-family: 'Lato';
  line-height: 1.6;
}

/* Firefox */
html {
  scrollbar-color: var(--color-primary,#3992FF) #2A2A2A;
  scrollbar-width: thin;
  scroll-behavior: smooth;
}

/* WebKit and Chromiums */
::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-thumb {
  border-radius: 8px;
  background: var(--color-primary, #3992FF);
}
  
::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: rgb(55 47 71) 0px 0px 5px inset;
  }



html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button {
     background: none;
     border: none;
     padding: 0;
}
a {
  text-decoration: none;
  color: inherit
}

`;

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
