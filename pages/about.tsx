import Head from "next/head";

import { TITLE_TAG } from "lib/constants";
import Meta from "components/meta";
import aboutData from "_data/about";

const About = () => {
  return (
    <>
      <Meta />
      <Head>
        <title>About Me {TITLE_TAG}</title>
      </Head>
      <h2 className="pt-10">문준호</h2>
      <p>Developer | ✉️ junho234323@gmail.com | 2000.10.15</p>
      <p className="pt-3">
        단축키를 애용하며, 심플한 개발을 위해 노력하는 4년차 풀스택
        개발자입니다.
      </p>
      <p>
        TypeScript, Node.js, NestJS, React 를 주로 사용하며 AWS 를 활용한
        아키텍처 설계에 관심을 가지고 있습니다.
      </p>

      <h2 className="pt-10">경력</h2>
      <ul>
        {aboutData.career.map((one, index) => (
          <li key={index}>
            <a href={one.href} target="_blank">
              <strong>{one.companyName}</strong> | {one.period}
            </a>
            <ul>
              {one.summary.map((one, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: one }}></li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="pt-10">수상 & 자격증</h2>
      <ul>
        {aboutData.awardsAndCertificate.map((one, index) => (
          <li key={index}>
            <a href={one.href} target="_blank">
              <strong>{one.name}</strong> | {one.period}
            </a>
          </li>
        ))}
      </ul>
      {/* <Head>
    <title>Next.js Blog Example with {CMS_NAME}</title>
  </Head> */}
    </>
  );
};

export default About;
