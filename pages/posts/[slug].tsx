import Head from "next/head";
import { useRouter } from "next/router";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import React from "react";

import { getPostBySlug, getAllPosts } from "lib/api";
import { TITLE_TAG } from "lib/constants";
import type PostType from "interfaces/post";
import markdownStyles from "components//markdown-styles.module.css";
import CoverImage from "components/atoms/cover-image";
import Meta from "components/meta";
import Utterances from "components/atoms/utterances";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

type Sidebar = {
  id: string;
  name: string;
  depth: number;
};

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  const [sidebarArr, setSidebarArr] = React.useState<Sidebar[]>([]);

  React.useEffect(() => {
    const sidebarArrData = Array.from(document.querySelectorAll("h1,h2,h3"))
      .filter((one) => one.getAttribute("id"))
      .map((one) => ({
        id: one.getAttribute("id"),
        name: one.innerHTML,
        depth: parseInt(one.tagName.slice(1, 2)),
      }));

    setSidebarArr(sidebarArrData);
  }, []);

  function flatten(text, child) {
    return typeof child === "string"
      ? text + child
      : React.Children.toArray(child.props.children).reduce(flatten, text);
  }

  function HeadingRenderer(props) {
    var children = React.Children.toArray(props.children);
    var text = children.reduce(flatten, "");

    var slug = text
      .toLowerCase()
      .replaceAll(/[^ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\s]/g, "")
      .replaceAll(/\s/g, "-");

    return React.createElement("h" + props.level, { id: slug }, props.children);
  }

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
            <div className="pb-3">
              <h1>{post.title}</h1>
              <div className="mb-6 text-lg">{post.date}</div>
              <CoverImage src={post.coverImage} />
            </div>
            {/* <div
              className={markdownStyles["markdown-body"]}
              dangerouslySetInnerHTML={{ __html: post.content }}
            /> */}
            <ReactMarkdown
              children={post.content}
              rehypePlugins={[rehypeRaw]}
              remarkPlugins={[remarkGfm]}
              className={markdownStyles["markdown-body"]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");

                  return !inline && match ? (
                    <>
                      <SyntaxHighlighter
                        children={String(children).replace(/\n$/, "")}
                        style={atomOneDark}
                        language={match[1]}
                        PreTag="div"
                        showLineNumbers
                        {...props}
                      />
                      <span className="absolute right-2 top-1 text-white">
                        {match[1]}
                      </span>
                    </>
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
                h1: HeadingRenderer,
                h2: HeadingRenderer,
                h3: HeadingRenderer,
              }}
            />
          </article>
        )}
      </div>
      <div className="absolute right-0 top-3 md:right-56">
        <a href="https://hits.seeyoufarm.com">
          <img
            src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjunho2343.github.io%2Fhit-counter%2F${post.slug}&count_bg=%230366D6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=&edge_flat=false`}
          />
        </a>
      </div>

      <div
        className="w-80 top-20 fixed hidden md:block"
        style={{
          left: "calc(50% + 260px)",
        }}
      >
        {sidebarArr.map((one, index) => (
          <div
            className="pb-1"
            key={index}
            style={{
              paddingLeft: one.depth * 20,
            }}
          >
            <a href={`#${one.id}`}>{one.name}</a>
          </div>
        ))}
      </div>

      <Utterances />
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

  // const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content: post.content,
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
