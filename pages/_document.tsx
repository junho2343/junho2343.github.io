import Layout from "components/layout/index";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Layout>
          <Main />
          <NextScript />
        </Layout>
      </body>
    </Html>
  );
}
