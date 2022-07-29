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
  company?: string;
  period: string;
  people: number | number[];
  href?: string;
  content: string;
  detail?: {
    myParts: (
      | string
      | {
          title: string;
          content: string[];
        }
    )[];

    resultAndPerformance: string[];
  };

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
  sideProject: ProjectType[];
  posts: PostType[];
}

const data: IProps = {
  profile: [
    "Developer | ✉️ junho234323@gmail.com | 2000.10.15",
    "",
    "",
    "단축키를 애용하며, 심플한 개발을 위해 노력하는 4년차 풀스택 개발자입니다.",
    "TypeScript, Node.js, NestJS, React 를 주로 사용하며 AWS 를 활용한 아키텍처에 관심을 가지고 있습니다.",
    // "신규 서비스를 직접 설계 및 개발 하고, 기존 솔루션의 부분 리팩토링 경험이 있습니다.",
  ],
  career: [
    {
      name: companyData.playauto,
      href: "https://plto.com/",
      period: "2018.12 ~ 현재 (3년 8개월)",
      summary: [
        "쿠팡 전용 네이버쇼핑 랭킹 스크랩핑 및 데이터 전달 구조 개발",
        "상품 이전 웹 서비스 공통화 모델 개발 - 쿠팡 / 위메프 / 11번가 / 올웨이즈 제공",
        {
          text: "쿠팡 상품 이전 웹 서비스 개발 - Event Driven 아키텍처",
          href: "https://marketplace.coupangcorp.com/s/blog/salenews-20210205-MCZJCYSUZLN5BAJLH2WG2GNZVXEQ",
        },
        "솔루션 내 상품상세 영역 서비스 분리 및 리팩토링 (c# -> React,  PHP -> NestJS)",
        "솔루션 내 레거시 웹 영역 리팩토링 (JavaScript/JQuery -> React, PHP -> NestJS)",
        "쇼핑몰 통합관리 솔루션 EMP / 사내 어드민 유지보수",
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
      name: "솔루션 내 상품상세 영역 서비스 분리 및 리팩토링",
      company: companyData.playauto,
      period: "2022.05 ~ 2022.07",
      people: 3,
      content: `
      c#, PHP 기반 솔루션 내 상품상세 영역 속도 개선 및 불편사항 해결을 위해 서비스 분리 및 리팩토링 결정<br/>
      - 클라이언트 영역: 설치 프로그램의 단점을 보완하기 위해 상시 배포 가능한 웹으로 리팩토링<br/>
      - 서버 영역: 소스관리, 자동완성, 타입추론, 배포 자동화, 쿼리 개선 등을 위해 리팩토링<br/>
      솔루션 특성상 비슷하지만 조금씩 다른 API를 줄이기 위해 언더패치, 오버패치 해결을 위한 GraphQL 도입<br/>
      (c# -> React / PHP -> NestJS)
                    `,
      detail: {
        myParts: [
          {
            title: "Client",
            content: [
              "styled-components 를 통한 컴포넌트 분리 및 프론트 구조 개발",
              "Apollo Client 를 통한 상태관리 구조 개발",
            ],
          },
          {
            title: "Server",
            content: [
              "GraphQL 기반의 NestJS 구조 및 API 개발",
              "기존 PHP 인증/인가 방식 활용과 분리된 서비스의 데이터 주고받는 구조 개발",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },
          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
        ],
        resultAndPerformance: [
          "첫 로딩 속도 및 저장 기능 속도개선 - 약 3~4초 => 1초 미만",
          "C# => 웹 리팩토링으로 상시 배포 가능",
          "GraphQL 도입으로 중복되는 API 기능 감소",
        ],
      },
      skill: [
        "React",
        "TypeScript",
        "Amazon S3",
        "styled-components",
        "Apollo GraphQL",
        "GraphQL",
        "NestJS",
        "Amazon ECS",
        "Amazon CloudWatch",
        "Amazon RDS",
        "Docker",
        "GitHub Actions",
        "Mysql",
      ],
    },

    {
      best: true,
      name: "쿠팡 전용 네이버쇼핑 랭킹 스크랩핑 및 정보 전달 구조 개발",
      company: companyData.playauto,
      period: "2022.04 ~ 2022.05",
      people: 2,
      content: `
      \`상품 이전 웹 서비스\`의 고도화로 많은 양의 상품을 이전 했지만 양질의 상품을 구분할 수 없음<br/>
      이에 쿠팡에 이전한 스마트스토어 상품들 중 상위 랭킹의 상품을 구별하여 데이터 전달이 필요해짐<br/>
      격주마다 카테고리별 약 16만개의 상품 정보를 스크랩핑 한뒤 매일 새벽 스크랩핑한 정보를 기반으로 전달할 데이터를 추가 가공하여 쿠팡에 전달
      `,
      detail: {
        myParts: [
          {
            title: "스크랩핑",
            content: [
              "AWS Lambda 사용 - IP 차단 방지를 위한 사내 외 IP / 주기적 변경되는 IP / 상시 가동 불필요",
              "네이버 쇼핑 랭킹 상품 스크랩핑 소스 개발 - 격주마다 크론 실행",
              // "AWS Lambda 최대 시간 초과 값(15분) 으로 인해 자신의 함수를 재호출 하는 방식으로 개발",
              // "실행시간이 오래걸리므로 응답을 기다리지 않도록 Amazon API Gateway 를 비동기적으로 호출",
              "AWS Lambda 소스 관리를 위해 Serverless Framework 를 활용한 구조 개발",
            ],
          },
          {
            title: "Server(NestJS)",
            content: [
              // "위 AWS Lambda 를 통한 스크랩핑 결과 저장용 API 개발",
              "스크랩핑한 정보를 기반으로 데이터 가공 후 쿠팡에 전달하는 구조 개발 - 매일 새벽 크론 실행",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },
          "쿠팡측과의 지속적인 미팅 및 메일을 통한 의사소통을 통해 전반적인 프로젝트 진행",
          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
          // "일반 사용자와 같아 보이도록 header 값을 조정한 후 페이지 호출간 대기시간을 널널이 주어 오랜 시간에 걸쳐 데이터를 수집 할 수 있도록 개발",
        ],
        resultAndPerformance: [
          "`상품 이전 웹 서비스` 를 통해 쿠팡으로 이전한 상품들 중 잘 팔리는 상품 구별이 가능해짐 - 이를 통해 쿠팡측에서 상품노출을 위한 다양한 시도를 하겠다고함",
        ],
      },
      // detail: [
      //   "IP 차단 방지를 위해 외부 및 주기적 변경되는 IP 활용 - AWS Lambda",
      //   "AWS Lambda 최대 시간 초과 값(15분) 으로 인해 작업이 끝나지 않았다면 자신의 함수를 재호출 하는 방식으로 개발",
      //   "일반 사용자와 같아 보이도록 header 값을 조정한 후 페이지 호출간 대기시간을 널널이 주어 오랜 시간에 걸쳐 데이터를 수집 할 수 있도록 개발",
      //   "Serverless Framework 로 Lambda 함수 소스 관리",
      //   "격주마다 네이버 쇼핑 랭킹 상품 스크랩핑 크론 실행",
      //   "매일 저녁 수집된 정보를 기반으로 데이터를 가공하여 쿠팡에 전달하는 크론 실행",
      // ],
      skill: [
        "TypeScript",
        "NestJS",
        "Amazon ECS",
        "Amazon CloudWatch",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "AWS Lambda",
        "Amazon RDS",
        "Amazon API Gateway",
        "Serverless",
      ],
    },
    {
      name: "통합 지원쇼핑몰 어드민 개발",
      company: companyData.playauto,
      period: "2022.02",
      people: 2,
      content: `
       사내 솔루션 별로 지원 쇼핑몰관리 어드민이 각각 존재하여 한번에 관리할 수 있는 통합 어드민 개발<br/>
       솔루션 별로 각각 상이한 database 스키마 통합
                    `,

      detail: {
        myParts: [
          {
            title: "Client",
            content: ["페이징 처리 및 API 연결"],
          },
          {
            title: "Server",
            content: [
              "솔루션별 database 스키마 통합",
              "엑셀 통한 등록/수정 기능 개발",
              "사내 API용 구조 개발 및 통합된 데이터 조회 API 개발",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },

          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
        ],
        resultAndPerformance: [
          "지원 쇼핑몰 추가/수정 시 관리 영역 통합으로 인한 리소스 감소",
        ],
      },
      // detail: [
      //   "관리자 전용 어드민 페이지 개발 - 엑셀 일괄 업로드, 엑셀 일괄 수정, 엑셀 다운로드, 검색, 부분등록, 부분수정",
      //   "통합된 데이터를 각 솔루션에서 사용할 수 있도록 사내용 조회 API 제공",
      // ],
      skill: [
        "React",
        "TypeScript",
        "styled-components",
        "Amazon S3",
        "NestJS",
        "Amazon ECS",
        "Amazon RDS",
        "Amazon CloudWatch",
        "Docker",
        "GitHub Actions",
        "Mysql",
      ],
    },
    {
      name: "솔루션 내 레거시 웹 영역 리팩토링",
      company: companyData.playauto,
      period: "2021.11 ~ 2022.01",
      people: 2,
      content: `
      2022년 기준 7년 이상 전에 개발된 웹 영역 리팩토링.<br/>
      쇼핑몰별 공통화할 수 없는 정보를 추가 입력하는 세트 영역 - 연동 쇼핑몰별 개발이 필요하여 소스 양이 어마어마함.<br/>
      과거에 비해 웹 개발 기술이 날아올라, 조금 더 편하게 세트 개발이 가능한 환경 제공을 위해 시작하게 되었습니다.<br/>
      (JavaScript, JQuery -> React / PHP -> NestJS)

                    `,
      detail: {
        myParts: [
          {
            title: "Client",
            content: [
              "UI 변경 및 컴포넌트 공통화 - 심각한 UI 소스 파편화 해결",
              "최초 개발시 템플릿 생성 기능 - 기본적인 뼈대 제공",
              "Redux 를 통한 상태관리 구조 개발",
              "Storybook 을 통한 빠른 컴포넌트 파악 및 신중한 설계 - 약 100개가 넘는 쇼핑몰별 영역에서 사용하는 공통 컴포넌트",
            ],
          },
          {
            title: "Server",
            content: [
              "NestJS 를 통한 공통된 구조 개발 - 신규 쇼핑몰 연동 시 정해진 동일한 구조로 개발",
              "http 통신용 공통 함수 개발 - 로그인 스크랩핑 및 응답 받은 쿠키 재사용 로직, 공통된 에러처리",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },
          // "쇼핑몰들간 공통적으로 사용할 수 있는 기능들 공통화/분리 - ex) 카테고리, 미성년자 구매, 즉시할인, 출고지, 반품지 등등등...",
          "TypeScript 통한 필요 코드 강제화, 자동완성, 타입추론",
          "GitHub 사용 - 로컬 환경을 안거치고 ftp를 통해 서버에 직접 저장하는 php 개발 스타일이였...",
          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
        ],
        resultAndPerformance: [
          "사용자 - UI 개편 및 공통화로 인한 눈이 즐거움 (사용자보단 개발자를 위한 리팩토링이라..)",
          "개발자 - 세트 영역 개발 시간 대폭 감소 - 평균 1~2일 => 약 4시간",
          // "개발자 - 더 이상 소스파편화로 스트레스를 받지 않음 ",
        ],
      },
      // detail: [
      //   "UI 변경 및 컴포넌트 공통화 - 심각한 UI 소스 파편화 해결",
      //   "GitHub 사용, 배포 자동화 - 로컬 환경을 안거치고 서버에 직접 ftp를 통해 저장하는 php 개발 스타일이였....",
      //   "최초 개발시 템플릿 생성 기능 - 기본적인 뼈대 제공",
      //   "TypeScript 통한 필요 코드 강제화, 자동완성, 타입추론",
      //   "쇼핑몰들간 공통적으로 사용할 수 있는 기능들 공통화/분리 - ex) 카테고리, 미성년자 구매, 즉시할인, 출고지, 반품지 등등등...",
      //   "저희팀은 React 자체를 사용해본 적이 없는 분도 있었기에 신규 개발 / 유지보수에는 기존 컴포넌트를 가져다 사용할 줄만 알아도 문제가 없도록 노력을 많이 했습니다.",
      // ],
      skill: [
        "React",
        "TypeScript",
        "NestJS",
        "styled-components",
        "Storybook",
        "Redux",
        "Amazon S3",
        "Amazon ECS",
        "Amazon CloudWatch",
        "Docker",
        "GitHub Actions",
        "Mysql",
      ],
    },

    {
      best: true,
      name: "상품 이전 웹 서비스 공통화 버전 개발",
      company: companyData.playauto,
      period: "2021.04 ~ 2021.07",
      people: 2,
      content: `쿠팡에 제공 했던 상품 이전 웹 서비스 WakeUp 을 여러 쇼핑몰 제공을 위해 공통화 버전 개발<br/>
                DB 리팩토링 및 구조적인 개선 함께 진행 - 쿠팡 / 위메프 / 11번가 / 올웨이즈 제공중
                    `,
      // detail: [
      //   "전체적인 기능은 `쿠팡 상품 이전 웹 서비스 개발` 과 동일 ",
      //   "Next.js 의 강점을 느끼지 못하여 CRA 로 프론트 개발 & 아토믹 디자인 패턴 도입으로 제휴사별 컴포넌트 재사용성 극대화",
      //   "NestJS, TypeORM 도입을 통한 백엔드 리팩토링 (완전 대대만족)",
      //   "공통화 작업으로 인해 제휴사 추가 인입시 개발 소요 시간 대폭 감소",
      // ],
      detail: {
        myParts: [
          {
            title: "Client",
            content: ["Atomic Design 패턴으로 인한 컴포넌트 재사용성 극대화"],
          },
          {
            title: "Server",
            content: [
              "ORM 서비스 TypeORM 도입",
              "Node.js => NestJS 도입",
              "IDC Database => AWS RDS 마이그레이션",
              "Amazon Aurora 를 통한 읽기, 쓰기 DB 및 쿼리 분리",
              "Database 구조 개선 - 제휴사별 서비스 제공 가능하도록",
              "핵심 기능들 공통화",
            ],
          },
          "TypeScript 도입",
          "전체적인 기능은 `쿠팡 상품 이전 웹 서비스` 와 동일",
        ],
        resultAndPerformance: [
          "추가 제휴사 인입 시 공통 로직 구현 x - 개발 비용 감소",
          "Database AWS 마이그레이션으로 사용량에 따른 유연한 사양 조절 가능",
          "TypeScript, ORM 도입으로 인한 유지보수 비용 감소 - 제가 직접 느꼈어요.. 최고..",
          "성과는 `쿠팡 상품 이전 웹 서비스` 와 동일",
        ],
      },
      skill: [
        "React",
        "Atomic Design",
        "TypeScript",
        "styled-components",
        // "C Sharp",
        "Amazon S3",
        "NestJS",
        "Socket.io",
        "Amazon ECS",
        "Amazon RDS",
        "Amazon CloudWatch",
        "Amazon SQS",
        "AWS Lambda",
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
                  누적 이전 상품 수 : 71,133,478 / 누적 신규 사용자 수 67,006
                  `,

      detail: {
        myParts: [
          {
            title: "Client",
            content: [
              "Next.js 기본 구조를 기반으로 화면 영역 개발",
              "모바일 반응형 지원",
              "Socket 을 통한 상품이전 진행사항을 클라이언트에 실시간 노출",
              "작업 조회/통계 어드민 개발",
            ],
          },
          {
            title: "Server",
            content: [
              "SNS, SQS 를 통한 대기열 구조 구현 (Event Driven 패턴) - 데이터 유실 방지 / 작업이 오래 걸려 비동기 처리",
              // "병렬 처리 로직 구현 - 이전 할 상품이 많을 경우 위 SNS 를 여러개 발행해 병렬 작업 수행",
              // "타 마켓의 상품 데이터 => 쿠팡 상품 데이터로 가공 및 전달 로직 구현",
              // "사내 통합회원 API 를 통한 인증/인가 구현",
              "작업 조회/통계 어드민 개발 - Lambda 를 통한 통계 데이터 주기적 계산 및 생성 (Database 자원 사용 최소화)",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },
          "쿠팡측과의 지속적인 미팅 및 메일을 통한 의사소통을 통해 전반적인 프로젝트 진행",
          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
        ],
        resultAndPerformance: [
          "누적 이전 상품 수 : 71,133,478 / 누적 신규 사용자 수 67,006 - 2022.03.23 기준",
          "플레이오토 회사 인지도 상승 및 사용자 인입으로 인한 유료 회원 전환률 상승 기대",
          "제휴사(쿠팡) 로부터 계약금을 통한 매출 증가 기여",
          // "개발자 - 더 이상 소스파편화로 스트레스를 받지 않음 ",
        ],
      },
      skill: [
        "Next.js",
        "Node.js",
        "Socket.io",
        "Sass",
        // "C Sharp",
        "Amazon S3",
        // "Amazon RDS",
        "Amazon ECS",
        "Amazon CloudWatch",
        "Amazon SQS",
        "AWS Lambda",
        "Docker",
        "GitHub Actions",
        "Mysql",
        "JSON Web Tokens",
      ],
    },
    // {
    //   name: "셀러봇캐시 전용 REST API 개발",
    //   company: companyData.playauto,
    //   period: "2020.12",
    //   people: 1,
    //   content: `플레이오토에 인입된 업체에게 셀러봇캐시 연동 서비스 제공<br/>
    //                 여러 영역 중 API 부분을 맡아 개발<br/>
    //                 플레이오토 내 저장된 쇼핑몰 계정정보를 셀러봇캐시 측에 REST API 로 제공
    //                     `,
    //   // detail: [
    //   //   "제휴 업체 전용 REST API 구조 개발 - 추후 제휴 업체 인입 시 해당 구조 재사용 가능하도록",
    //   //   "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
    //   // ],
    //   skill: [
    //     "Node.js",

    //     "Mysql",
    //     "OpenAPI Initiative",
    //     "ReDoc",
    //     "Amazon ECS",
    //     "Amazon CloudWatch",
    //     "Docker",
    //     "GitHub Actions",
    //   ],
    // },
    // {
    //   name: "펀앤쇼핑 쇼핑몰 엔진 연동 개발",
    //   company: companyData.playauto,
    //   period: "2020.06 ~ 2020.07",
    //   people: 1,
    //   content: `플레이오토 EMP 솔루션 내 엔진 쇼핑몰 연동 개발<br/>
    //                 스크랩핑을 통해 펀앤쇼핑 어드민 기능을 HTTP 통신으로 구현
    //                     `,
    //   // detail: [
    //   //   "상품 - 상품등록, 상품수정, 상품동기화, 상품가져오기, 상품취소, 상품일시품절, 상품품절복구 구현",
    //   //   "주문 - 발주확인, 주문수집, 주문동기화, 송장전송 구현",
    //   //   "문의 - 문의 수집, 문의 답변전송, 상품평 수집, 상품평 답변전송 구현",
    //   // ],
    //   skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
    // },
    {
      name: "플토 통합홈페이지 EMP API 개발",
      company: companyData.playauto,
      period: "2020.03 ~ 2020.06",
      people: [1, 2],
      href: "https://plto.com/",
      content: `
      사내 솔루션이 여러개 임에 따라 각기 다른 홈페이지가 여럿 존재<br/>
      이에 플레이오토 사용 인입자가 분산되어 해결을 위해 통합 홈페이지 개발<br/>
      사내에서 운영하는 여러 페이지 및 계정정보를 통합하는 과정에서 EMP 솔루션 부분 사내용 API 개발
                        `,
      // detail: [
      //   "IP 별 사용 제한",
      //   "회원/솔루션 관련 - 회원정보 수정, 회원 탈퇴 신청, 회원 탈퇴 복구, 통합회원 전환, 사용중인 솔루션 정보, 솔루션 재신청, 로그인, 사업자 번호 조회",
      //   "쇼핑몰 관련 - 지원쇼핑몰 조회",
      //   "통합 어드민 관련 - 영업 담당자 업데이트, 사업자 등록증 업데이트, 사업자 유형 업데이트, 솔루션 전체 조회, 솔루션 상세 조회, EMP 솔루션 사용 여부",
      //   "도움말/문의 관련 - 도움말 리스트 검색, Best/최신 도움말 리스트 검색, 도움말 상세 검색, 비회원 1:1 문의",
      //   "기능 - AES 암호화/복호화",
      // ],

      detail: {
        myParts: [
          {
            title: "Server",
            content: [
              "기존 홈페이지 기능을 타팀에서 사용할 수 있도록 API 제공 및 구조 개발",
              "회원/솔루션 관련 - 회원정보 수정, 회원 탈퇴 신청, 회원 탈퇴 복구, 통합회원 전환, 사용중인 솔루션 정보, 솔루션 재신청, 로그인, 사업자 번호 조회",
              "쇼핑몰 관련 - 지원쇼핑몰 조회",
              "통합 어드민 관련 - 영업 담당자 업데이트, 사업자 등록증 업데이트, 사업자 유형 업데이트, 솔루션 전체 조회, 솔루션 상세 조회, EMP 솔루션 사용 여부",
              "도움말/문의 관련 - 도움말 리스트 검색, Best/최신 도움말 리스트 검색, 도움말 상세 검색, 비회원 1:1 문의",
            ],
          },
          "타팀과의 지속적인 의사소통을 통해 기능 구현",
        ],
        resultAndPerformance: ["통합홈페이지를 통한 사용자 인입 분산 감소"],
      },

      skill: ["PHP", "Mysql", "OpenAPI Initiative", "ReDoc"],
    },
    // {
    //   name: "EMP 솔루션 내 세트 영역 리팩토링",
    //   company: companyData.playauto,
    //   period: "2020.01 ~ 2020.03",
    //   people: 2,
    //   content: `쇼핑몰별 공통화 할 수 없는 데이터를 세팅하는 \`세트\` 영역을 프론트 영역만 리팩토링 (javascript, jQuery -> React)<br/>
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
    // {
    //   name: "메이크글로벌 쇼핑몰 엔진 연동 개발",
    //   company: companyData.playauto,
    //   period: "2019.04 ~ 2019.05",
    //   people: 1,
    //   content: `플레이오토 EMP 솔루션 내 엔진 쇼핑몰 연동 개발<br/>
    //                 스크랩핑을 통해 메이크글로벌 어드민 기능을 HTTP 통신으로 구현
    //                     `,
    //   // detail: [
    //   //   "상품 - 상품등록, 상품수정, 상품동기화, 상품가져오기, 상품취소, 상품일시품절, 상품품절복구 구현",
    //   //   "주문 - 발주확인, 주문수집, 주문동기화, 송장전송 구현",
    //   //   "문의 - 문의 수집, 문의 답변전송, 상품평 수집, 상품평 답변전송 구현",
    //   // ],
    //   skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
    // },
    {
      name: "쇼핑몰 통합관리 솔루션 EMP / 사내 어드민 유지보수",
      company: companyData.playauto,
      period: "2018.10 ~ 2019.12",
      people: [7, 8],
      content: `
                    [스크랩핑 / API] 연동으로 이루어진 쇼핑몰과의 HTTP 통신, 화면 제어 부분을 개발 및 유지보수<br/>
                    HTTP 통신, 화면 제어 및 다양한 쇼핑몰별 구조, e-commerce 시장에 대한 이해도 증가<br/>
                    10년을 넘게 서비스해온 솔루션 유지보수를 맡으면서 유지보수의 중요성 및 기존 소스 분석력 증가
                        `,
      detail: {
        myParts: [
          "API 제공 쇼핑몰과의 메일을 통한 직접적인 커뮤니케이션 진행",
          "CS 팀에서 생성한 일감에 대해 비개발적인 용어로 커뮤니케이션 진행",
          "약 900건의 기능 개발 및 유지보수 업무 처리",
        ],
        resultAndPerformance: [
          "다양한 기능 개발 및 유지보수 업무를 통해 솔루션 사용자 문의 처리",
          "커뮤니케이션 능력 상승",
        ],
      },
      skill: ["C Sharp", "PHP", "JavaScript", "jQuery", "Mysql"],
    },
  ],
  sideProject: [
    {
      name: "우리끼리",
      // company: ,
      period: "2022.04 ~ 2022.07",
      people: [2],
      href: "https://www.instagram.com/woori_app_official",
      content: `
      가족, 친구, 커플들의 일정 공유 어플(IOS, Android 지원)<br/>
      부모님의 어려운 음력생일도 매년 자동 등록
                        `,
      detail: {
        myParts: [
          {
            title: "Client",
            content: ["React Native 를 통한 앱 기능 구현"],
          },
          {
            title: "Server",
            content: [
              "인증/인가 구현",
              "http 통신용 공통 함수 개발 - 로그인 스크랩핑 및 응답 받은 쿠키 재사용 로직, 공통된 에러처리",
              "빌드된 Docker 이미지 기반으로 AWS ECR, ECS 를 통해 백엔드 서버 구현 - AWS ALB 를 통한 요청 트래픽 분산",
            ],
          },
          // "쇼핑몰들간 공통적으로 사용할 수 있는 기능들 공통화/분리 - ex) 카테고리, 미성년자 구매, 즉시할인, 출고지, 반품지 등등등...",
          "TypeScript 통한 필요 코드 강제화, 자동완성, 타입추론",
          "GitHub 사용 - 로컬 환경을 안거치고 ftp를 통해 서버에 직접 저장하는 php 개발 스타일이였...",
          "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
        ],
        resultAndPerformance: [
          "사용자 - UI 개편 및 공통화로 인한 눈이 즐거움 (사용자보단 개발자를 위한 리팩토링이라..)",
          "개발자 - 세트 영역 개발 시간 대폭 감소 - 평균 1~2일 => 약 4시간",
          // "개발자 - 더 이상 소스파편화로 스트레스를 받지 않음 ",
        ],
      },
      skill: [
        "React Native",
        "Node.js",
        "TypeORM",
        "Amazon ECS",
        "Amazon S3",
        "Amazon RDS",
        "GitHub Actions",
      ],
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
