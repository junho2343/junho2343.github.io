import Head from "next/head";
import { TITLE_TAG } from "lib/constants";
import Script from "next/script";

const Meta = () => {
  return (
    <>
      <Head>
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="author" content="문준호" />
        <meta name="theme-color" content="#000" />
        <meta name="robots" content="index, follow" />
        <meta property="og:site_name" content={TITLE_TAG} />
        <meta property="og:type" content="website" />
        <meta
          name="google-site-verification"
          content="UvtxWDaEi6g_ZkTZOmiWKdYOwB5WgIEEdhSJ6DWnoVc"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
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
