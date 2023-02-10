import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { LightAsync as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { format } from "date-fns";

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

// type Sidebar = {
//   id: string;
//   name: string;
//   depth: number;
// };

export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();

  // const [sidebarArr, setSidebarArr] = React.useState<Sidebar[]>([]);
  // const [scrollNowId, setScrollNowId] = React.useState("");

  // let timer = null;

  // React.useEffect(() => {
  //   window.addEventListener("scroll", scrollEvent, false);

  //   setSidebarArr(
  //     Array.from(document.querySelectorAll("h1,h2,h3"))
  //       .filter((one) => one.getAttribute("id"))
  //       .map((one) => ({
  //         id: one.getAttribute("id"),
  //         name: one.innerHTML,
  //         depth: parseInt(one.tagName.slice(1, 2)),
  //       }))
  //   );
  // }, []);

  // function scrollEvent() {
  //   if (timer !== null) clearTimeout(timer);

  //   timer = setTimeout(() => {
  //     // do something

  //     const target = Array.from(document.querySelectorAll("h1,h2,h3"))
  //       .filter((one) => one.getAttribute("id"))
  //       .reverse()
  //       .find((one: HTMLElement) => {
  //         if (window.scrollY > one.offsetTop) return true;
  //       });

  //     if (target) {
  //       setScrollNowId(target.getAttribute("id"));
  //     } else {
  //       setScrollNowId("");
  //     }
  //   }, 150);
  // }

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
    <div className="">
      <Meta />
      <div className="max-w-2xl pt-14 mx-auto relative">
        {router.isFallback ? (
          <>Loading…</>
        ) : (
          <article className="mb-32">
            <Head>
              <title>
                {post.title} {TITLE_TAG}
              </title>
              <meta property="og:image" content={post.coverImage} />
              <meta name="description" content={post.excerpt} />
            </Head>
            <div className="pb-3">
              <h1>{post.title}</h1>
              <div className="mt-1 mb-6">
                <span className="bg-slate-100 p-1.5 mr-1 rounded text-xs font-normal">
                  {post.date}
                </span>
                {post.tag?.map((one, index) => (
                  <span
                    className="bg-slate-100 p-1.5 mr-1 rounded text-xs font-normal"
                    key={index}
                  >
                    #{one}
                  </span>
                ))}
              </div>
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
                img({ src, alt }) {
                  return (
                    <>
                      <img src={src} alt={alt} />
                      <span>{alt}</span>
                    </>
                  );
                },
                aside: "blockquote",
              }}
            />

            {post.reference?.length > 0 && (
              <div className="mt-20">
                <div className={markdownStyles["markdown-body"]}>
                  <h2>Reference</h2>
                  <ul>
                    {post.reference.map((one, index) => (
                      <li key={index}>
                        {one.exposed}
                        <ul>
                          <li>
                            <a href={one.url} target="_blank">
                              {one.url}
                            </a>
                          </li>
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </article>
        )}

        <Utterances />

        <div className="absolute right-0 top-3">
          <a href="https://hits.seeyoufarm.com">
            <img
              src={`https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fjunho2343.github.io%2Fhit-counter%2F${post.slug}&count_bg=%230366D6&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=&edge_flat=false`}
            />
          </a>
        </div>
      </div>

      {/* <div
        className="w-96 top-20 fixed p-2 hidden md:block"
        style={{
          left: "calc(50% + 260px)",
        }}
      >
        {sidebarArr.map((one, index) => (
          <div
            className="pb-0.5"
            key={index}
            style={{
              paddingLeft: one.depth * 20,
            }}
          >
            <a
              href={`#${one.id}`}
              className={`${scrollNowId === one.id && "font-bold"} `}
            >
              {one.name}
            </a>
          </div>
        ))}
      </div> */}
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
    "coverImage",
    "excerpt",
    "reference",
    "tag",
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
