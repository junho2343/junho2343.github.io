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
      {/* <p className="pt-3">
        단축키를 애용하며, 심플한 개발을 위해 노력하는 4년차 풀스택
        개발자입니다.
      </p> */}
      <p className="pt-3">
        TypeScript, Node.js, NestJS를 주로 사용하며 AWS 를 활용한 아키텍처
        설계에 관심을 가지고 있습니다.
      </p>
      <div className="bg-zinc-100 mt-3 p-4 rounded-md text-[0.95rem] text-zinc-800">
        <p>
          3년 동안 레거시 서비스 유지보수/리팩토링과 신규서비스 개발의 경험을
          가진 개발자입니다.
        </p>
        <p className="pt-3">
          약 900건의 기능 개발/유지보수 업무를 처리하며 항상 사이드 이펙트를
          고려하는 마인드를 가졌고, 주니어들로 뭉쳐진 유지보수팀에서 개발환경
          개선과 팀원들의 성장을 위해 상황에 맞는 새로운 기술 스택을 도입하고
          리팩토링하며 작은 문제들을 해결해 왔습니다.
        </p>
        <p className="pt-3">
          "쿠팡 상품 이전 웹 서비스"라는 신규서비스를 설계부터 오픈까지 혼자
          도맡았으며, 누적 9만 명의 신규 사용자와 약 8천만 건의 대규모 데이터를
          안정적으로 가공/관리 하였습니다.
        </p>
        <p className="pt-3">
          대규모 데이터 처리와 고가용성을 가진 아키텍처 설계 경험을 바탕으로
          백엔드 개발자로서 전문성을 발휘하고, 또 키우고자 합니다.
        </p>
      </div>

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
