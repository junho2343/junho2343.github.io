import Head from "next/head";
import Link from "next/link";

import { getAllPosts } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import Post from "interfaces/post";
import CoverImage from "components/atoms/cover-image";
import Meta from "components/meta";
import { format } from "date-fns";

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <>
      <Meta />
      <Head>
        <title>개발자 {TITLE_TAG}</title>
        <meta name="description" content={`개발자 ${TITLE_TAG} | 블로그`} />
      </Head>

      <div className="flex flex-wrap">
        {allPosts.map((one, index) => (
          <Link as={`/posts/${one.slug}`} href="/posts/[slug]" key={index}>
            <div
              className={`inline-block w-full my-3 bg-white rounded overflow-hidden cursor-pointer shadow-sm
              

              md:w-[calc(100%/3-1rem)]
              md:m-3
              ${index % 3 === 0 && "md:ml-0"} 
              ${index % 3 === 2 && "md:mr-0"}
              `}
            >
              <CoverImage src={one.coverImage} />

              <div className="p-3">
                <h3 className="h-14 line-clamp-2 mb-2">{one.title}</h3>
                <p className="h-16 line-clamp-3 text-sm">{one.excerpt}</p>
                <p className="pt-3 flex items-center">
                  <img
                    src="/assets/icon_time.svg"
                    alt=""
                    className="mr-1 mb-0.5 w-5"
                  />
                  {format(new Date(one.date), "yyyy년 MM월 dd일")}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "coverImage",
    "excerpt",
  ]);

  return {
    props: { allPosts },
  };
};
