import { IconType } from "components/UI/atom/Icon";

const companyData = {
  playauto: "플레이오토(PLAYAUTO)",
};

export type ProfileType = string[];

export type ListType = {
  name: string;
  href: string;
  period: string;
  summary?: (string | { text: string; href: string })[];
}[];

export type ProjectType = {
  best?: boolean;
  name: string;
  company: string;
  period: string;
  people: number | number[];
  href?: string;
  content: string;
  detail?: string[];
  skill: IconType[];
};

export type PostType = {
  title: string;
  date: string;
  content: string;
  thumbnail?: string;
};

interface IProps {
  profile: ProfileType;
  career: ListType;
  awards_certificate: ListType;
  project: ProjectType[];
  posts: PostType[];
}

const data: IProps = {
  profile: [
    "Developer | ✉️ junho234323@gmail.com | 2000.10.15",
    "단축키를 애용하며, 심플한 개발을 위해 노력합니다.",
  ],
  career: [
    {
      name: "일정공유 어플 `우리끼리` 출시",
      href: "https://www.instagram.com/woori_app_official",
      period: "2022.07",
      summary: [],
    },
    {
      name: companyData.playauto,
      href: "https://plto.com/",
      period: "2018.10 ~ 현재",
      summary: [
        "쿠팡 전용 네이버쇼핑 랭킹 스크랩핑 및 데이터 전달 구조 개발",
        "상품 이전 웹 서비스 공통화 모델 개발 - 쿠팡 / 위메프 / 11번가 / 올웨이즈 제공",
        {
          text: "쿠팡 상품 이전 웹 서비스 개발",
          href: "https://marketplace.coupangcorp.com/s/blog/salenews-20210205-MCZJCYSUZLN5BAJLH2WG2GNZVXEQ",
        },
        "솔루션 내 C# 영역 =>  웹 기반 리펙토링 (c# -> React,  PHP -> NestJS)",
        "솔루션 내 레거시 웹 영역 리펙토링 (JavaScript/JQuery -> React, PHP -> NestJS)",
        "쇼핑몰 통합관리 솔루션 EMP / 홈페이지 / 사내 어드민 유지보수",
      ],
    },
  ],
  awards_certificate: [
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
  project: [
    {
      name: "쿠팡 전용 네이버쇼핑 랭킹 스크랩핑 및 정보 전달 구조 개발",
      company: companyData.playauto,
      period: "2021.04 ~ 2022.06",
      people: 2,
      content: `
      \`상품 이전 웹 서비스\`의 고도화로 많은 양의 상품을 이전 했지만 양질의 상품을 구분할 수 없음<br/>
      이에 쿠팡에 이전한 스마트스토어 상품들 중 상위 랭킹의 상품을 구별하여 데이터 전달이 필요해짐<br/>
      주마다 카테고리별 약 16만개의 상품 정보를 수집한 뒤 전달할 데이터를 구별 및 가공하여 쿠팡에 전달
      `,
      detail: [
        "IP 차단 방지를 위해 외부 및 주기적 변경되는 IP 활용 - AWS Lambda",
        "AWS Lambda 최대 시간 초과 값(15분) 으로 인해 작업이 끝나지 않았다면 자신의 함수를 재호출 하는 방식으로 개발",
        "일반 사용자와 같아 보이도록 header 값을 조정한 후 페이지 호출간 대기시간을 널널이 주어 오랜 시간에 걸쳐 데이터를 수집 할 수 있도록 개발",
        "Serverless Framework 로 Lambda 함수 소스 관리",
        "격주마다 네이버 쇼핑 랭킹 상품 스크랩핑 크론 실행",
        "매일 저녁 수집된 정보를 기반으로 데이터를 가공하여 쿠팡에 전달하는 크론 실행",
      ],
      skill: [
        "TypeScript",
        "NestJS",
        "Node.js",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "AWS Lambda",
        "Serverless",
      ],
    },
    {
      name: "통합 지원쇼핑몰 어드민 개발",
      company: companyData.playauto,
      period: "2022.02",
      people: 2,
      content: `
       솔루션 별로 지원 쇼핑몰 어드민이 상이하여 한번에 관리할 수 있는 통합 어드민 개발<br/>
       솔루션 별로 각각 상이한 database 스키마 통합
                    `,
      detail: [
        "관리자 전용 어드민 페이지 개발 - 엑셀 일괄 업로드, 엑셀 일괄 수정, 엑셀 다운로드, 검색, 부분등록, 부분수정",
        "통합된 데이터를 각 솔루션에서 사용할 수 있도록 사내용 조회 API 제공",
      ],
      skill: [
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "styled-components",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
        "Mysql",
      ],
    },
    {
      name: "솔루션 내 레거시 웹 영역 리펙토링",
      company: companyData.playauto,
      period: "2021.11 ~ 2022.01",
      people: 2,
      content: `
      2022년 기준 7년 이상 전에 개발된 웹 영역 리펙토링.<br/>
      과거에 비해 웹 개발 기술이 날아올라, 조금 더 편하게 세트 개발이 가능한 환경 제공을 위해 시작하게 되었습니다.<br/>
      (JavaScript, JQuery -> React / PHP -> NestJS)

                    `,
      detail: [
        "UI 변경 및 컴포넌트 공통화 - 심각한 UI 소스 파편화 해결",
        "GitHub 사용, 배포 자동화 - 로컬 환경을 안거치고 서버에 직접 ftp를 통해 저장하는 php 개발 스타일이였....",
        "최초 개발시 템플릿 생성 기능 - 기본적인 뼈대 제공",
        "TypeScript 통한 필요 코드 강제화, 자동완성, 타입추론",
        "쇼핑몰들간 공통적으로 사용할 수 있는 기능들 공통화/분리 - ex) 카테고리, 미성년자 구매, 즉시할인, 출고지, 반품지 등등등...",
        "저희팀은 React 자체를 사용해본 적이 없는 분도 있었기에 신규 개발 / 유지보수에는 기존 컴포넌트를 가져다 사용할 줄만 알아도 문제가 없도록 노력을 많이 했습니다.",
      ],
      skill: [
        "React",
        "TypeScript",
        "NestJS",
        "Node.js",
        "styled-components",
        "Storybook",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "JSON Web Tokens",
        "Redux",
      ],
    },

    {
      name: "상품 이전 웹 서비스 공통화 버전 개발",
      company: companyData.playauto,
      period: "2021.04 ~ 2021.07",
      people: 2,
      content: `쿠팡에 제공 했던 상품 이전 웹 서비스 WakeUp 을 여러 쇼핑몰 제공을 위해 공통화 버전 개발<br/>
                DB 리펙토링 및 구조적인 개선 함께 진행 - 쿠팡 / 위메프 / 11번가 / 올웨이즈 제공중
                    `,
      detail: [
        "전체적인 기능은 `쿠팡 상품 이전 웹 서비스 개발` 과 동일 ",
        "Next.js 의 강점을 느끼지 못하여 CRA 로 프론트 개발 & 아토믹 디자인 패턴 도입으로 제휴사별 컴포넌트 재사용성 극대화",
        "NestJS, TypeORM 도입을 통한 백엔드 리펙토링 (완전 대대만족)",
        "공통화 작업으로 인해 제휴사 추가 인입시 개발 소요 시간 대폭 감소",
      ],
      skill: [
        "React",
        "Atomic Design",
        "TypeScript",
        "NestJS",
        "Node.js",
        "Socket.io",
        "styled-components",
        "C Sharp",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "JSON Web Tokens",
        "TypeORM",
      ],
    },

    {
      best: true,
      name: "쿠팡 상품 이전 웹 서비스 개발",
      company: companyData.playauto,
      period: "2020.07 ~ 2021.03",
      people: 1,
      href: "https://marketplace.coupangcorp.com/s/blog/salenews-20210205-MCZJCYSUZLN5BAJLH2WG2GNZVXEQ",
      content: `최소한의 정보로 타 마켓에서 판매중인 상품을 쿠팡 Wing 으로 이전할 수 있는 상품이전 웹 서비스를 개발하여 쿠팡에 제공<br/>
                  전체적인 구조 / 개발 및 쿠팡측과의 소통을 혼자 도맡아 진행<br/><br/>
                  2022.03.23 기준<br/>
                  누적 이전 상품 수 : 71,133,478 / 누적 신규 회원 수 67,006
                  `,
      detail: [
        "쇼핑몰과의 통신을 Queue 방식으로 처리하는 사내 PlayApi v1 활용",
        "대량 상품 이전으로 인한 트래픽 분산을 위해 병렬처리",
        "socket 을 통한 병렬처리 진행사항 실시간 화면 노출",
        "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
        "AWS Lambda 크론 기능 사용 - 통계 계산, 미진행 작업 재진행, 일일 가입자 슬랙 알림",
        "작업 조회 및 상세 연동 내역 조회가 가능한 어드민 추가 개발",
      ],
      skill: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "Socket.io",
        "Sass",
        "C Sharp",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "JSON Web Tokens",
      ],
    },
    {
      name: "셀러봇캐시 전용 REST API 개발",
      company: companyData.playauto,
      period: "2020.12",
      people: 1,
      content: `플레이오토에 인입된 업체에게 셀러봇캐시 연동 서비스 제공<br/>
                    여러 영역 중 API 부분을 맡아 개발<br/>
                    플레이오토 내 저장된 쇼핑몰 계정정보를 셀러봇캐시 측에 REST API 로 제공
                        `,
      detail: [
        "제휴 업체 전용 REST API 구조 개발 - 추후 제휴 업체 인입 시 해당 구조 재사용 가능하도록",
        "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
      ],
      skill: [
        "Node.js",
        "Express",
        "Mysql",
        "OpenAPI Initiative",
        "ReDoc",
        "Amazon AWS",
        "Docker",
        "GitHub Actions",
      ],
    },
    {
      name: "펀앤쇼핑 쇼핑몰 엔진 연동 개발",
      company: companyData.playauto,
      period: "2020.06 ~ 2020.07",
      people: 1,
      content: `플레이오토 EMP 솔루션 내 엔진 쇼핑몰 연동 개발<br/>
                    스크랩핑을 통해 펀앤쇼핑 어드민 기능을 HTTP 통신으로 구현
                        `,
      detail: [
        "상품 - 상품등록, 상품수정, 상품동기화, 상품가져오기, 상품취소, 상품일시품절, 상품품절복구 구현",
        "주문 - 발주확인, 주문수집, 주문동기화, 송장전송 구현",
        "문의 - 문의 수집, 문의 답변전송, 상품평 수집, 상품평 답변전송 구현",
      ],
      skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
    },
    {
      name: "플토 통합홈페이지 EMP API 개발",
      company: companyData.playauto,
      period: "2020.03 ~ 2020.06",
      people: [1, 2],
      href: "https://plto.com/",
      content: `
      사내 솔루션이 여러개 임에 따라 각기 다른 홈페이지가 여럿 존재<br/>
      이에 플레이오토 사용 인입자가 분산되어 해결을 위해 통합 홈페이지 개발<br/>
      사내에서 운영하는 여러 페이지 및 계정정보를 통합하는 과정에서 EMP 솔루션 부분 사내용 API 개발<br/>
                    타 팀과의 협업 진행
                        `,
      detail: [
        "IP 별 사용 제한",
        "회원/솔루션 관련 - 회원정보 수정, 회원 탈퇴 신청, 회원 탈퇴 복구, 통합회원 전환, 사용중인 솔루션 정보, 솔루션 재신청, 로그인, 사업자 번호 조회",
        "쇼핑몰 관련 - 지원쇼핑몰 조회",
        "통합 어드민 관련 - 영업 담당자 업데이트, 사업자 등록증 업데이트, 사업자 유형 업데이트, 솔루션 전체 조회, 솔루션 상세 조회, EMP 솔루션 사용 여부",
        "도움말/문의 관련 - 도움말 리스트 검색, Best/최신 도움말 리스트 검색, 도움말 상세 검색, 비회원 1:1 문의",
        "기능 - AES 암호화/복호화",
      ],

      skill: ["PHP", "Mysql", "OpenAPI Initiative", "ReDoc"],
    },
    // {
    //   name: "EMP 솔루션 내 세트 영역 리펙토링",
    //   company: companyData.playauto,
    //   period: "2020.01 ~ 2020.03",
    //   people: 2,
    //   content: `쇼핑몰별 공통화 할 수 없는 데이터를 세팅하는 \`세트\` 영역을 프론트 영역만 리펙토링 (javascript, jQuery -> React)<br/>
    //                 기존 React 프레임워크 빌드 결과물이 우리가 추구하는 결과물과 달라 사용하지 않고 WebPack 직접 설정<br/>
    //                 결과물이 기획과 상이하여 실적용 실패..
    //                     `,
    //   detail: [
    //     "특정 영역마다 각각 빌드 결과물이 나올 수 있도록 Webpack 설정",
    //     "기존 사용자의 데이터를 그대로 사용할 수 있도록 유지",
    //     "반복되는 소스를 줄이기 위한 컴포넌트 분리",
    //   ],
    //   skill: ["React", "Material-UI", "Webpack", "Amazon AWS"],
    // },
    {
      name: "메이크글로벌 쇼핑몰 엔진 연동 개발",
      company: companyData.playauto,
      period: "2019.04 ~ 2019.05",
      people: 1,
      content: `플레이오토 EMP 솔루션 내 엔진 쇼핑몰 연동 개발<br/>
                    스크랩핑을 통해 메이크글로벌 어드민 기능을 HTTP 통신으로 구현
                        `,
      detail: [
        "상품 - 상품등록, 상품수정, 상품동기화, 상품가져오기, 상품취소, 상품일시품절, 상품품절복구 구현",
        "주문 - 발주확인, 주문수집, 주문동기화, 송장전송 구현",
        "문의 - 문의 수집, 문의 답변전송, 상품평 수집, 상품평 답변전송 구현",
      ],
      skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
    },
    {
      name: "쇼핑몰 통합관리 솔루션 EMP / 홈페이지 / 사내 어드민 유지보수",
      company: companyData.playauto,
      period: "2018.10 ~ 2019.12",
      people: [7, 8],
      content: `
                    [스크랩핑 / API] 연동으로 이루어진 쇼핑몰과의 HTTP 통신, 화면 제어 부분을 개발 및 유지보수<br/>
                    HTTP 통신, 화면 제어 및 다양한 쇼핑몰별 구조, e-commerce 시장에 대한 이해도 증가<br/>
                    10년을 넘게 서비스해온 솔루션 유지보수를 맡으면서 유지보수의 중요성 및 기존 소스 분석력 증가
                        `,

      skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
    },
  ],
  posts: [
    //     {
    //       title: "테스트1",
    //       date: "2034.01.01",
    //       content: "test",
    //     },
    //     {
    //       title: "철부지 첫 회사 입사 - 플레이오토",
    //       date: "2018.11",
    //       content: "playauto-first-company",
    //       thumbnail: plto,
    //     },
    //     {
    //       title: "2018년도 기능경기대회 회고",
    //       date: "2018.10",
    //       content: "functional-competition",
    //       thumbnail: worldSkills,
    //     },
  ],
  // wine: [
  //   {
  //     name: {
  //       eng: "Pause Canon Rouge",
  //       ko: "포즈 까농 루즈",
  //     },
  //     url: "https://waalmot.com/#/wine/5458640",
  //     eatenDate: "2021-04-04",
  //   },

  //   {
  //     name: {
  //       eng: "Veraton Garnacha",
  //       ko: "베라톤 가르나차",
  //     },
  //     url: "https://waalmot.com/#/wine/98783",
  //     eatenDate: "2021-04-17",
  //   },
  //   {
  //     name: {
  //       eng: "애시드 테스트 리슬링",
  //       ko: "Acid Test Riesling",
  //     },
  //     url: "https://waalmot.com/#/wine/8471623",
  //     eatenDate: "2021-04-17",
  //   },
  // ],
};

// 게시물 최신순 정렬
// data.posts = data.posts.sort((a, b) => {
//   return +new Date(b.date) - +new Date(a.date);
// });

export default data;
