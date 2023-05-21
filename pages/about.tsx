import Head from "next/head";

import { TITLE_TAG } from "lib/constants";
import Meta from "components/meta";
import aboutData from "_data/about";
import Container from "components/layout/container";
import Seo from "components/atoms/seo";

const About = () => {
  return (
    <Container>
      <Meta />
      <Seo title="About" tags={["소개", "프로필"]} />
      <h2 className="pt-10">문준호</h2>
      <p>Developer | ✉️ junho234323@gmail.com | 2000.10.15</p>

      <h2 className="pt-10">경력</h2>
      <ul>
        {aboutData.career.map((one, index) => (
          <li key={index}>
            <a href={one.href} target="_blank">
              <strong>{one.companyName}</strong> | {one.period}
            </a>
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
    </Container>
  );
};

export default About;
