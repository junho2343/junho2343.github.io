import { TITLE_TAG } from "lib/constants";
import Head from "next/head";

type Props = {
  title?: string;
  description?: string;
  tags?: string[];
  image?: string;
  publishedTime?: string;
};

const Seo = ({
  title,
  description,
  tags = [],
  image,
  publishedTime,
}: Props) => {
  const useTitle = title ? `${title} - ${TITLE_TAG}` : TITLE_TAG;
  const useDescription = description || TITLE_TAG;

  return (
    <Head>
      <title>{useTitle}</title>
      <meta name="description" content={useDescription} />
      <meta
        name="keywords"
        content={`${tags.concat(["기술 블로그", "개발 블로그"]).join(", ")}`}
      />
      <meta property="og:title" content={useTitle} />
      <meta name="og:description" content={useDescription} />
      <meta
        property="og:image"
        content={image || "/favicon/social_preview.jpeg"}
      />

      {/* <meta
  name="canonical"
  href="https://junho2343.github.io/testtt/"
/> */}
      {/* <meta
  property="og:url"
  content="https://junho2343.github.io/testtt/"
/> */}
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      {/* <meta property="article:modified_time" content="2023-05-08" /> */}
    </Head>
  );
};

export default Seo;
