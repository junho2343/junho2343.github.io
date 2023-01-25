import aboutData from "_data/about";

const projectData = [
  {
    best: true,
    name: "쿠팡 상품 이전 웹 서비스 신규 개발",
    company: aboutData.career[0].companyName,
    period: "2020.07 ~ 2021.03",
    people: 1,
    href: "https://marketplace.coupangcorp.com/s/blog/salenews-20210205-MCZJCYSUZLN5BAJLH2WG2GNZVXEQ",
    content: `최소한의 정보를 입력하여 타 마켓에서 판매중인 상품을 쿠팡 Wing 으로 쉽게 이전할 수 있는 웹 서비스를 쿠팡에 제공<br/>
              메시징 시스템을 이용한 비동기 방식의 데이터 처리 시스템을 구축하여 고가용성을 갖춘 서비스 설계<br/><br/>

              누적 이전 상품 수 : 71,133,478 / 누적 신규 사용자 수 67,006 - 2022.03.23 기준
                  `,

    detail: {
      myParts: [
        {
          title: "Client",
          content: [
            "Next.js 기본 구조를 기반으로 화면 영역 개발",
            "모바일 반응형 지원",
            "Socket.io를 활용해 서버측 작업 진행사항을 클라이언트에 실시간 노출",
          ],
        },
        {
          title: "Server",
          content: [
            "AWS SNS, SQS를 이용하여 비동기 방식의 데이터 처리 시스템 구축",
            "영구히 저장할 필요 없는 데이터의 많은 I/O를 감당하기 위해 REDIS 사용",
            "작업 조회/통계 어드민 개발 - 크론을 통해 통계 데이터 주기적 계산",
            "AWS ECR, ECS, Docker 를 통한 분산 서버 환경, 무중단 배포 구현",
          ],
        },
        "쿠팡팀과 지속적인 미팅 및 메일을 통한 커뮤니케이션으로 전반적인 프로젝트 진행",
        "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
      ],
      resultAndPerformance: [
        "누적 이전 상품 수 : 71,133,478 / 누적 신규 사용자 수 67,006 - 2022.03.23 기준",
        "플레이오토 회사 인지도 상승 및 신규 사용자 인입으로 유료 회원 전환률 약 8% 상승",
        "제휴사(쿠팡) 로부터 계약금을 통한 매출 증가 기여",
        // "개발자 - 더 이상 소스파편화로 스트레스를 받지 않음 ",
      ],
    },
    skill: [
      "Node.js",
      "Mysql",

      "Socket.io",
      "Amazon SQS",
      "Redis",

      "Amazon ECS",
      "Docker",
      "GitHub Actions",

      "Amazon CloudWatch",

      "Next.js",
      "Sass",
      "Amazon S3",
    ],
  },

  {
    best: true,
    name: "상품 이전 웹 서비스 공통화 버전 개발",
    company: aboutData.career[0].companyName,
    period: "2021.04 ~ 2021.07",
    people: 2,
    content: `쿠팡에만 제공 했던 상품 이전 웹 서비스를 여러 제휴 쇼핑몰 제공을 위해 공통화 버전 개발<br/>
              고가용성, 유지보수성을 위한 개선도 함께 진행<br/><br/>
              쿠팡 / 위메프 / 11번가 / 올웨이즈 제공중
                    `,
    detail: {
      myParts: [
        {
          title: "Client",
          content: ["Atomic Design 패턴으로 인한 컴포넌트 재사용성 극대화"],
        },
        {
          title: "Server",
          content: [
            "TypeORM 도입으로 유지보수 편의성 확보",
            "NestJS 도입으로 유지보수 편의성 확보",
            "IDC Database => AWS RDS 마이그레이션으로 유연한 대처 가능",
            "쓰기(Master), 읽기(Slave) DB 분리로 트래픽 분산",
          ],
        },
        "TypeScript 도입으로 유지보수 편의성 확보",
      ],
      resultAndPerformance: [
        "추가 제휴사 인입 시 공통 로직 구현 x - 개발 비용 감소",
        "정적타입(TypeScript), ORM(TypeORM), 프레임워크(NestJS) 도입으로 유지보수 편의성 확보",
        "제휴사로부터 계약금을 통한 매출 증가 기여",
      ],
    },
    skill: [
      "TypeScript",
      "Node.js",
      "NestJS",
      "Mysql",
      "TypeORM",
      "Amazon RDS",
      "Socket.io",
      "Amazon SQS",
      "Redis",

      "Amazon ECS",
      "Docker",
      "GitHub Actions",
      "Amazon CloudWatch",

      "React",
      "Atomic Design",
      "styled-components",
      "Amazon S3",
    ],
  },

  {
    name: "솔루션 내 상품상세 영역 서비스 분리 및 리팩토링",
    company: aboutData.career[0].companyName,
    period: "2022.05 ~ 2022.07",
    people: 3,
    content: `
      c#, PHP 기반 솔루션 내 상품상세 영역 속도 개선 및 불편사항 해결을 위해 독립적인 서비스 분리 및 리팩토링<br/>

      (Client: c# -> React / Server: PHP -> NestJS)
                    `,
    detail: {
      myParts: [
        {
          title: "Client",
          content: [
            "styled-components 를 통한 컴포넌트 분리 및 프론트 기본 구조 개발",
            "Redux 를 이용한 상태관리 구조 개발",
          ],
        },
        {
          title: "Server",
          content: [
            "PHP -> NestJS 도입으로 유지보수 편의성 학보",
            "REDIS를 이용한 캐싱으로 조회영역 속도 개선",
            "AWS ECR, ECS, Docker 를 통한 분산 서버 환경, 무중단 배포 구현",
          ],
        },
        "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
      ],
      resultAndPerformance: [
        "첫 로딩 속도 및 저장 기능 속도개선 - 약 3~4초 => 1초 미만",
        ".exe 프로그램 => 웹 리팩토링으로 상시 배포 가능",
        "정적타입(TypeScript), 배포 자동화(GitHub Actions) 도입으로 유지보수 편의성 확보",
      ],
    },
    skill: [
      "TypeScript",

      "Node.js",
      "NestJS",
      "Mysql",
      "Amazon RDS",

      "Redis",
      "Amazon ECS",
      "Docker",
      "GitHub Actions",
      "Amazon CloudWatch",

      "React",
      "styled-components",
      "Amazon S3",
    ],
  },

  {
    name: "통합 지원쇼핑몰 어드민 개발",
    company: aboutData.career[0].companyName,
    period: "2022.02",
    people: 2,
    content: `
      사업부별 지원쇼핑몰 어드민이 각각 존재하여 한번에 관리할 수 있는 통합 어드민 개발<br/>
       사업부별 각각 상이한 DB 스키마 통합
                    `,

    detail: {
      myParts: [
        {
          title: "Client",
          content: ["페이징 처리 및 API 연동"],
        },
        {
          title: "Server",
          content: [
            "사업부별 DB 스키마 통합",
            "엑셀 통한 등록/수정 기능 개발",
            "AWS ECR, ECS, Docker 를 통한 분산 서버 환경, 무중단 배포 구현",
          ],
        },

        "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
      ],
      resultAndPerformance: [
        "지원 쇼핑몰 추가/수정 시 관리 영역 통합으로 비용 감소",
      ],
    },
    // detail: [
    //   "관리자 전용 어드민 페이지 개발 - 엑셀 일괄 업로드, 엑셀 일괄 수정, 엑셀 다운로드, 검색, 부분등록, 부분수정",
    //   "통합된 데이터를 각 솔루션에서 사용할 수 있도록 사내용 조회 API 제공",
    // ],
    skill: [
      "TypeScript",

      "NestJS",
      "Mysql",
      "Amazon RDS",

      "Amazon ECS",
      "Docker",
      "GitHub Actions",

      "Amazon CloudWatch",

      "React",
      "styled-components",
      "Amazon S3",
    ],
  },
  {
    name: "솔루션 내 레거시 웹 영역 리팩토링",
    company: aboutData.career[0].companyName,
    period: "2021.11 ~ 2022.01",
    people: 2,
    content: `
      약 100개의 쇼핑몰 상품정보 중 공통화할 수 없는 정보를 추가 입력하는 영역이며, 소스양이 비대함에 따라 개발 유지보수/신규개발 시간이 오래 소요됨<br/>
      조금 더 편한 개발 환경 제공을 위해 리팩토링<br/>
      (Client: JQuery -> React / Server: PHP -> NestJS)

                    `,
    detail: {
      myParts: [
        {
          title: "Client",
          content: [
            "UI 컴포넌트 공통화 - 심각한 UI 소스 파편화 해결",
            "최초 개발시 템플릿 생성 기능",
            "Redux 를 통한 상태관리 구조 개발",
            "Storybook 을 통한 빠른 컴포넌트 파악 - 약 100개가 넘는 쇼핑몰별 영역에서 사용하는 공통 컴포넌트",
          ],
        },
        {
          title: "Server",
          content: [
            "NestJS 를 통한 공통된 구조 개발 - 신규 쇼핑몰 연동 시 정해진 동일한 구조로 개발",
            "HTTP 통신용 공통 함수 개발 - 로그인 스크랩핑 및 응답 받은 쿠키 재사용 로직, 공통된 에러처리",
            "AWS ECR, ECS, Docker 를 통한 분산 서버 환경, 무중단 배포 구현",
          ],
        },
        "TypeScript 통한 필요 코드 강제화, 자동완성, 타입추론",
        "GitHub Actions 를 통한 배포 자동화, 슬랙 배포 알림 구현",
      ],
      resultAndPerformance: [
        "사용자 - UI 개편 및 공통화로 사용자 경험 개선",
        "개발자 - 개발 시간 대폭 감소 - 평균 1~2일 => 약 4시간",
      ],
    },

    skill: [
      "TypeScript",
      "Node.js",
      "NestJS",

      "Mysql",
      "Amazon ECS",
      "Docker",
      "GitHub Actions",
      "Amazon CloudWatch",

      "React",
      "styled-components",
      "Storybook",
      "Redux",
      "Amazon S3",
    ],
  },

  // {
  //   name: "셀러봇캐시 전용 REST API 개발",
  //   company: aboutData.career[0].companyName,
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
  //   company: aboutData.career[0].companyName,
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
    company: aboutData.career[0].companyName,
    period: "2020.03 ~ 2020.06",
    people: [1, 2],
    href: "https://plto.com/",
    content: `
      사업부별 각기 다른 홈페이지가 존재하여 통합홈페이지 개발 결정<br/>
      사내에서 운영하는 여러 페이지 및 계정정보를 통합하는 과정에서 EMP 솔루션 부분 API 개발
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
            "회원/솔루션 영역, 통합 어드민 관련, 도움말/문의 관련 영역 개발",
          ],
        },
        "타팀과의 지속적인 커뮤니케이션을 통해 기능 구현",
      ],
      resultAndPerformance: ["통합홈페이지를 통해 사용자 분산 인입 감소"],
    },

    skill: ["PHP", "Mysql", "OpenAPI Initiative"],
  },

  {
    name: "쇼핑몰 통합관리 솔루션 엔진 개발",
    company: aboutData.career[0].companyName,
    period: "2018.10 ~ 2019.12",
    people: [7, 8],
    content: `
                    [스크랩핑 / API] 연동으로 이루어진 쇼핑몰과의 HTTP 통신, 화면 제어 부분을 개발 및 유지보수<br/>
                    다양한 형태의 데이터 가공 경험과 e-commerce 시장에 대한 이해도 증가<br/>
                    10년을 넘게 서비스해온 솔루션을 개발하면서 기존 소스 분석력 증가
                        `,
    detail: {
      myParts: [
        "수많은 API 제공 쇼핑몰과 메일을 통한 직접적인 커뮤니케이션 진행",
        "고객응대팀에서 생성한 이슈에 대해 비개발적인 용어로 커뮤니케이션 진행",
        "약 900건의 기능 개발 및 유지보수 업무 처리",
      ],
      resultAndPerformance: [
        "다양한 기능 개발 및 유지보수 업무를 통해 솔루션 이슈 처리",
        "커뮤니케이션 능력 상승",
      ],
    },
    skill: ["PHP", "Mysql", "JavaScript", "jQuery", "C Sharp"],
  },
];

export default projectData;
