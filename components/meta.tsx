import Head from "next/head";
import { TITLE_TAG } from "lib/constants";
import Script from "next/script";

const Meta = () => {
  return (
    <>
      <Head>
        {/* <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      /> */}
        {/* <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      /> */}
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#000000"
      /> */}
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta name="description" content={`개발자 ${TITLE_TAG}`} />
        <meta property="og:image" content="/favicon/social_preview.jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta
          name="google-site-verification"
          content="UvtxWDaEi6g_ZkTZOmiWKdYOwB5WgIEEdhSJ6DWnoVc"
        />
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-TKZLCNQKCR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-TKZLCNQKCR');
        `}
      </Script>
    </>
  );
};

export default Meta;
