import { IconType } from "../components/UI/atom/Icon";

export type ProfileType = {
  name: string;
  value: string;
}[];

export type CareerType = {
  name: string;
  href: string;
  period: string;
}[];

export type ProjectType = {
  name: string;
  data: ProjectOneType[];
}[];

export type ProjectOneType = {
  best?: boolean;
  name: string;
  period: string;
  people: number | number[];
  content: string;
  detail?: string[];
  skill: IconType[];
};

interface IProps {
  profile: ProfileType;
  career: CareerType;
  project: ProjectType;
}

const data: IProps = {
  profile: [
    {
      name: "이름",
      value: "문준호",
    },
    {
      name: "생년월일",
      value: "2000.10.15",
    },
    {
      name: "연락처",
      value: "010-2105-8667",
    },
    // {
    //   name: "이메일",
    //   value: "junho234323@gmail.com",
    // },
    {
      name: "짧은소개",
      value: "단축키를 애용하며, 심플한 개발을 위해 노력합니다",
    },
  ],
  career: [
    {
      name: "@플레이오토",
      href: "https://plto.com/",
      period: "2018.10 ~ 현재",
    },
    {
      name: "@전국 기능경기대회 은메달- 웹 디자인 및 개발",
      href:
        "https://meister.hrdkorea.or.kr/sub/3/3/1/20160512111525375100_view.do",
      period: "2018.10",
    },
    {
      name: "@서울 기능경기대회 은메달- 웹 디자인 및 개발",
      href:
        "https://meister.hrdkorea.or.kr/sub/3/2/1/20160512110924569100_view.do",
      period: "2018.04",
    },
  ],
  project: [
    {
      name: "@플레이오토",
      data: [
        {
          name: "상품 이전 웹 서비스 공통화 버전 개발",
          period: "2021.04 ~ 현재",
          people: 2,
          content: `쿠팡에 제공 했던 상품 이전 웹 서비스 WakeUp 을 여러 쇼핑몰에 제공을 위해 공통화 버전 개발<br/>
                    위메프 제공`,
          detail: [
            "쇼핑몰과의 통신을 Queue 방식으로 처리하는 사내 PlayApi v1 활용",
            "대량 상품 이전으로 인한 트래픽 분산을 위해 병렬처리 및 최적화",
            "socket 을 통한 병렬처리 진행사항 실시간 화면 노출",
            "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
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
          ],
        },

        {
          best: true,
          name: "쿠팡 상품 이전 웹 서비스 개발",
          period: "2020.07 ~ 2021.03",
          people: 1,
          content: `최소한의 정보로 타 마켓에서 판매중인 상품을 쿠팡 Wing 으로 이전할 수 있는 상품이전 웹 서비스를 개발하여 쿠팡에 제공<br/>
                  전체적인 구조 / 개발 및 쿠팡측과의 소통을 혼자 도맡아 진행<br/><br/>
                  이전한 상품 수 : 47,049,895 - 2021.06.07 기준
                  `,
          detail: [
            "쇼핑몰과의 통신을 Queue 방식으로 처리하는 사내 PlayApi v1 활용",
            "대량 상품 이전으로 인한 트래픽 분산을 위해 병렬처리 및 최적화",
            "socket 을 통한 병렬처리 진행사항 실시간 화면 노출",
            "GitHub Action 을 통한 배포 자동화 (Docker, AWS ECR, ECS) + 슬랙 배포 알림 추가",
            "AWS Lambda 를 통한 통계 계산 크론",
            "작업 조회 및 상세 연동 내역 조회가 가능한 어드민 개발 (플레이오토, 쿠팡 CS 팀 사용)",
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
          period: "2020.12 ~ 2020.12",
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
          period: "2020.06 ~ 2020.07",
          people: 1,
          content: `플레이오토 EMP 솔루션 내 연동 쇼핑몰 개발<br/>
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
          period: "2020.03 ~ 2020.06",
          people: [1, 2],
          content: `플레이오토 내 존재하는 여러 페이지 및 계정정보를 통합하는 과정에서 EMP 솔루션 부분 API 개발<br/>
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
        {
          name: "EMP 솔루션 내 세트 영역 리펙토링",
          period: "2020.01 ~ 2020.03",
          people: 2,
          content: `쇼핑몰별 공통화 할 수 없는 데이터를 세팅하는 \`세트\` 영역을 프론트 영역만 리펙토링 (javascript, jQuery -> React)<br/>
                    기존 React 프레임워크 빌드 결과물이 우리가 추구하는 결과물과 달라 사용하지 않고 WebPack 직접 설정<br/>
                    결과물이 기획과 상이하여 실적용 실패..
                        `,
          detail: [
            "쇼핑몰마다 각각 빌드 되도록 Webpack 설정",
            "기존 사용자의 데이터를 그대로 사용할 수 있도록 유지",
            "반복되는 소스를 줄이기 위한 컴포넌트 분리",
          ],
          skill: ["React", "Material-UI", "Webpack", "Amazon AWS"],
        },
        {
          name: "메이크글로벌 쇼핑몰 엔진 연동 개발",
          period: "2019.04 ~ 2019.05",
          people: 1,
          content: `플레이오토 EMP 솔루션 내 연동 쇼핑몰 개발<br/>
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
          name: "EMP 솔루션 유지보수",
          period: "2018.10 ~ 2019.12",
          people: [7, 8],
          content: `
                    [스크랩핑 / API] 연동으로 이루어진 쇼핑몰과의 HTTP 통신 부분을 개발 및 유지보수<br/>
                    HTTP 통신 및 다양한 쇼핑몰별 구조, e-commerce 시장에 대한 이해도 증가<br/>
                    10년을 넘게 서비스해온 솔루션 유지보수를 맡으먼서 유지보수의 중요성 및 기존 소스 분석력 증가
                        `,

          skill: ["C Sharp", "PHP", "JavaScript", "jQuery"],
        },
      ],
    },
    {
      name: "@test",
      data: [
        {
          name: "이거함",
          content: "test",
          people: 1,
          period: "2018.10 ~ 2019.12",
          skill: [],
        },
      ],
    },
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

export default data;
