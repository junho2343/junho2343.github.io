import Head from "next/head";

import { TITLE_TAG } from "lib/constants";
import Meta from "components/meta";
import aboutData from "_data/about";
import projectData from "_data/project";
import React from "react";
import iconData from "_data/icon";

const About = () => {
  return (
    <>
      <Meta />
      <Head>
        <title>Resume {TITLE_TAG}</title>
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

      <h2 className="pt-16">프로젝트</h2>
      {projectData.map((one, index) => (
        <div key={index} className="pb-6">
          <h3 className="pt-10 font-[500]">
            {one.href ? (
              <a href={one.href} target="_blank" className="font-[500]">
                {one.name}
              </a>
            ) : (
              one.name
            )}{" "}
            | {one.company} | {one.period}
          </h3>
          <p
            className="pt-2 font-[100]"
            dangerouslySetInnerHTML={{ __html: one.content }}
          />
          <div className="pt-2 pb-2">
            {one.skill.map((one, index) => (
              <span key={index}>
                {iconData[one] ? (
                  <img
                    className="inline-block pr-1"
                    src={`https://img.shields.io/badge/${one.replace(
                      "-",
                      " "
                    )}-${iconData[one].background}?style=flat-square&logo=${
                      iconData[one]?.origin || one
                    }&logoColor=${iconData[one].color}`}
                    alt={one}
                  />
                ) : (
                  <span className="notExsitsIcon">{one}</span>
                )}
              </span>
            ))}
          </div>
          {/* {one.skill}
      <img
        src="https://img.shields.io/badge/AWS Lambda-FF9900?style=flat-square&logo=AWS Lambda&logoColor=black"
        alt=""
      /> */}
          <p className="pt-4 text-lg font-[500]">담당 역할 :</p>
          <ul>
            {one.detail.myParts.map((one, index) =>
              one.title ? (
                <li key={index} className="font-[100]">
                  {one.title}

                  <ul>
                    {one.content.map((one, index) => (
                      <li key={index} className="font-[100]">
                        {one}
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={index} className="font-[100]">
                  {one}
                </li>
              )
            )}
          </ul>
          <p className="pt-4 text-lg font-[500]">결과 및 성과 :</p>

          <ul>
            {one.detail.resultAndPerformance.map((one, index) => (
              <li key={index} className="font-[100]">
                {one}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default About;
