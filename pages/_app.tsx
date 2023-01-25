import Layout from "components/layout";
import { AppProps } from "next/app";
import "styles/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
