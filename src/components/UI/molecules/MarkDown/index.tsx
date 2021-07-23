import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import SyntaxHighlighter from "react-syntax-highlighter";
import { tomorrowNight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import gfm from "remark-gfm";

import Line from "../../atom/Line";
import Text from "../../atom/Text";
import Grid from "../../atom/Grid";
import styled from "styled-components";

interface IProps {
  children: string;
}

const Ul = styled.ul`
  padding-left: 2rem;
  padding-bottom: 1rem;

  li {
    padding-top: 3px;
    padding-bottom: 3px;
  }
`;

const Blockquote = styled(Grid)`
  border-left: 3px solid #34a853;
  color: #6a737d;
  padding-left: 10px;
`;

export default function MarkDown({ children }: IProps) {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[[gfm, { singleTilde: false }]]}
      components={{
        h1: ({ children }) => (
          <Grid mt={20} mb={10}>
            <Text fontSize="1.8rem" fontWeight={400}>
              {children}
            </Text>
            <Grid bottom={10} />
            <Line color="#eaecef" />
          </Grid>
        ),
        h2: ({ children }) => (
          <Grid mt={20} mb={10}>
            <Text fontSize="1.6rem" fontWeight={400}>
              {children}
            </Text>
            <Grid bottom={5} />
            <Line color="#eaecef" />
          </Grid>
        ),
        h3: ({ children }) => (
          <Grid mt={20} mb={10}>
            <Text fontSize="1.4rem" fontWeight={400}>
              {children}
            </Text>
            <Grid bottom={5} />
          </Grid>
        ),
        p: ({ children }) => (
          <Grid mb={20}>
            {/* <Text fontSize="1.2rem" fontWeight={500}> */}
            <Text fontWeight={300} lineHeight={24}>
              {children}
            </Text>
          </Grid>
        ),
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");

          return !inline && match ? (
            //   return match ? (
            <SyntaxHighlighter
              style={tomorrowNight}
              language={match[1]}
              //   language="javascript"
              //   PreTag="div"
              children={String(children).replace(/\n$/, "")}
              lineProps={{ style: { paddingBottom: 8 } }}
              wrapLines={true}
              {...props}
            />
          ) : (
            <Grid display="inline-block" color="#f9e7e6" left={4} right={4}>
              <Text fontSize="0.9rem">{children}</Text>
            </Grid>
            // <code className={className} {...props} children= />
          );
        },
        // del: (test) => {
        //   console.log(test);
        //   return test;
        // },
        ul: Ul,
        blockquote: Blockquote,
      }}
    >
      {children}
    </ReactMarkdown>
  );
}
