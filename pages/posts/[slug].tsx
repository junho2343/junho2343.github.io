import Head from "next/head";
import { useRouter } from "next/router";

import { getPostBySlug, getAllPosts } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import markdownToHtml from "lib/markdownToHtml";
import type PostType from "interfaces/post";
import markdownStyles from "components//markdown-styles.module.css";
import DateFormatter from "components/atoms/date-formatter";
import CoverImage from "components/atoms/cover-image";
import Meta from "components/meta";
import Utterances from "components/atoms/utterances";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();

  return (
    <div className="relative">
      <Meta />
      <div className="max-w-3xl pt-14">
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <article className="mb-32">
            <Head>
              <title>
                {post.title} {TITLE_TAG}
              </title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>

            <div>
              <h1>{post.title}</h1>
              <div className="mb-6 text-lg">
                <DateFormatter dateString={post.date} />
              </div>
              <CoverImage src={post.coverImage} />
            </div>

            <div
              className={markdownStyles["markdown"]}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        )}

        <Utterances />
      </div>
      <div className="absolute right-0 top-3">
        <a href="https://hits.seeyoufarm.com">
          <img
            src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjunho2343.github.io%2Fhit-counter%2F${post.slug}&count_bg=%230366D6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=&edge_flat=false`}
          />
        </a>
      </div>
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "content",
    "ogImage",
    "coverImage",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
