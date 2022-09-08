import Head from "next/head";

import AboutType from "interfaces/about";
import { TITLE_TAG } from "lib/constants";

const data: AboutType = {
  career: [
    {
      companyName: "플레이오토(PLAYAUTO)",
      period: "2018.12 ~ 현재 (3년 8개월)",
      href: "https://plto.com/",
      summary: [
        "EMP 솔루션 내 상품 상세 영역 리팩토링",
        "상품 이전 웹 서비스 공통화 & 리팩토링 - 쿠팡 / 위메프 / 11번가 /올웨이즈 제공",
        {
          href: "https://marketplace.coupangcorp.com/s/blog/salenews-20210205-MCZJCYSUZLN5BAJLH2WG2GNZVXEQ",
          text: "쿠팡 상품 이전 웹 서비스 신규 개발 & 운영",
        },

        "EMP 솔루션 엔진 개발",
      ],
    },
  ],
  awardsAndCertificate: [
    {
      name: "AWS 공인 솔루션스 아키텍트 – 어소시에이트",
      href: "https://www.credly.com/badges/647c637d-ccd4-4b56-bc45-058606547fa4/public_url",
      period: "2022.04",
    },
    {
      name: "제 53회 전국기능경기대회 웹개발 부문 은메달",
      href: "https://meister.hrdkorea.or.kr/sub/3/3/1/20160512111525375100_view.do",
      period: "2018.10",
    },
    {
      name: "서울 지방기능경기대회 웹개발 부문 은메달",
      href: "https://meister.hrdkorea.or.kr/sub/3/2/1/20160512110924569100_view.do",
      period: "2018.04",
    },
  ],
};

const About = () => {
  return (
    <>
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
        {data.career.map((one, index) => (
          <li key={index}>
            <a href={one.href} target="_blank">
              <strong>{one.companyName}</strong> | {one.period}
            </a>
            <ul>
              {one.summary.map((one, index) => (
                <li key={index}>
                  {typeof one === "string" ? (
                    one
                  ) : (
                    <a href={one.href} className="font-[400]">
                      {one.text}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <h2 className="pt-10">수상 & 자격증</h2>
      <ul>
        {data.awardsAndCertificate.map((one, index) => (
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
