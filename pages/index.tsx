import Head from "next/head";
import Link from "next/link";
import React from "react";

import { getAllPosts } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import Post from "interfaces/post";
import CoverImage from "components/atoms/cover-image";
import Meta from "components/meta";
import Tag from "components/atoms/tag";
import { useRouter } from "next/router";

type Props = {
  allPosts: Post[];
  allTags: [string, number][];
};

export default function Index({ allPosts, allTags }: Props) {
  const router = useRouter();

  const [selectedTag, setSelectedTag] = React.useState<string>(
    router.query.tag && !Array.isArray(router.query.tag)
      ? router.query.tag
      : "전체"
  );

  return (
    <>
      <Meta />
      <Head>
        <title>개발자 {TITLE_TAG}</title>
        <meta name="description" content={`개발자 ${TITLE_TAG} | 블로그`} />
      </Head>

      <div className="pt-4">
        {allTags.map((tag, index) => (
          <Tag
            tagName={`${tag[0]} ${tag[1]}`}
            onClick={() => {
              setSelectedTag(tag[0]);
              router.query.tag = tag[0];
              router.push(router);
            }}
            selected={tag[0] === selectedTag}
            hover
            key={index}
          />
        ))}
      </div>

      <div className="flex flex-wrap pt-4">
        {allPosts
          .filter((post) =>
            selectedTag === "전체" ? true : post.tags.includes(selectedTag)
          )
          .map((one, index) => (
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

                <div className="h-[184px] p-3 relative">
                  <h4 className="line-clamp-2 mb-2 text-lg font-normal">
                    {one.title}
                  </h4>
                  <p className="line-clamp-3 text-sm">{one.excerpt}</p>

                  <div className="absolute bottom-3 flex flex-wrap">
                    <span className="bg-slate-100 p-1.5 mr-1 mt-1 rounded text-xs font-normal">
                      {one.date}
                    </span>

                    {one.tags?.map((one, index) => (
                      <Tag tagName={one} key={index} />
                    ))}
                  </div>
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
    "tags",
  ]);

  const allTags = Object.entries(
    allPosts.reduce((sum, post) => {
      for (const tag of post.tags) {
        sum[tag] ? sum[tag]++ : (sum[tag] = 1);
      }

      return sum;
    }, {})
  ).sort((a, b) => (a[1] > b[1] ? -1 : 1));

  allTags.unshift(["전체", allPosts.length]);

  return {
    props: { allPosts, allTags },
  };
};
