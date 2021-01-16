const data = {
    profile: [
        {
            name: '이름',
            value: '문준호'
        },
        {
            name: '생년월일',
            value: '2000.10.15'
        },
        {
            name: '연락처',
            value: ' 010-2105-8667'
        },
        {
            name: '짧은소개',
            value: '단축키를 애용하며, 심플한 개발을 위해 노력합니다'
        }
    ],
    career: [
        {
            name: '@플레이오토',
            href: 'https://plto.com/',
            period: '2018.10 ~ 현재'
        },
        {
            name: '@전국 기능경기대회 은메달- 웹 디자인 및 개발',
            href: 'https://meister.hrdkorea.or.kr/sub/3/3/1/20160512111525375100_view.do',
            period: '2018.10'
        },
        {
            name: '@서울 기능경기대회 은메달- 웹 디자인 및 개발',
            href: 'https://meister.hrdkorea.or.kr/sub/3/2/1/20160512110924569100_view.do',
            period: '2018.04'
        }
    ],
    project: [
        {
            name: '@플레이오토',
            data: [
                {
                    name: '쿠팡 상품 이전 웹 서비스 개발',
                    period: '2020.07 ~ 현재',
                    detail: `최소한의 정보로 타 마켓에서 판매중인 상품을 쿠팡 Wing 으로 이전할 수 있는 웹 서비스를 개발하여 쿠팡에 제공<br/>
                        쿠팡측과 지속 소통을 하며 협업중`,
                    skill: [
                        'React',
                        'Next.js',
                        'Node.js',
                        'Express',
                        'Socket.io',
                        'Sass',
                        'C Sharp',
                        'Amazon AWS',
                        'Mysql',
                        'JSON Web Tokens'
                    ]
                },
                {
                    name: '셀러봇캐시 전용 REST API 개발',
                    period: '2020.12 ~ 2020.12',
                    detail: `플레이오토에 인입된 업체에게 셀러봇캐시 연동 서비스 제공<br/>
                        여러 영역 중 API 부분을 맡아 개발<br/>
                        플레이오토 내 저장된 쇼핑몰 계정정보를 셀러봇캐시 측에 REST API 로 제공
                        `,
                    skill: ['Node.js', 'Express', 'Mysql']
                },
                {
                    name: '펀앤쇼핑 쇼핑몰 엔진 연동 개발',
                    period: '2020.06 ~ 2020.07',
                    detail: `플레이오토 EMP 솔루션 내 연동 쇼핑몰 개발<br/>
                    스크랩핑을 통해 펀앤쇼핑 어드민 기능을 HTTP 통신으로 구현
                        `,
                    skill: ['C Sharp', 'PHP', 'JavaScript', 'jQuery']
                },
                {
                    name: '플토 통합홈페이지 EMP API 개발',
                    period: '2020.03 ~ 2020.06',
                    detail: `플레이오토 내 존재하는 여러 페이지 및 계정정보를 통합하는 과정에서 EMP 솔루션 부분 API 개발<br/>
                    타 팀과의 협업을 통해 진행
                        `,
                    skill: ['PHP', 'Mysql']
                },
                {
                    name: 'EMP 솔루션 내 세트 영역 리펙토링',
                    period: '2020.01 ~ 2020.03',
                    detail: `쇼핑몰별 공통화 할 수 없는 데이터를 세팅하는 세트영역을 리펙토링 <br/>
                    프론트 영역만 리펙토링 (javascript, jQuery -> React)<br/>
                    결과물이 기획과 상이하여 실적용 실패..
                        `,
                    skill: ['React', 'Material-UI', 'Webpack', 'Amazon AWS']
                },
                {
                    name: '메이크글로벌 쇼핑몰 엔진 연동 개발',
                    period: '2019.04 ~ 2019.05',
                    detail: `플레이오토 EMP 솔루션 내 연동 쇼핑몰 개발<br/>
                    스크랩핑을 통해 메이크글로벌 어드민 기능을 HTTP 통신으로 구현
                        `,
                    skill: ['C Sharp', 'PHP', 'JavaScript', 'jQuery']
                },
                {
                    name: 'EMP 솔루션 유지보수',
                    period: '2018.10 ~ 2019.12',
                    detail: `EMP 솔루션 내 엔진 유지보수 :<br/>
                    스크랩핑 or API 연동으로 이루어진 쇼핑몰과의 HTTP 통신 부분을 유지보수<br/>
                    HTTP 통신 및 다양한 쇼핑몰별 구조, e-commerce 시장에 대한 이해도 증가
                    
                        `,
                    skill: ['C Sharp', 'PHP', 'JavaScript', 'jQuery']
                }
            ]
        },
        {
            name: '@플레이오토',
            data: [
                {
                    name: '쿠팡 상품 이전 웹 서비스 개발',
                    period: '2020.07 ~ 현재',
                    detail: `최소한의 정보로 타 마켓에서 판매중인 상품을 쿠팡 Wing 으로 이전할 수 있는 웹 서비스를 개발하여 쿠팡에 제공<br/>
                        쿠팡측과 지속 소통을 하며 협업중`,
                    skill: [
                        'React',
                        'Next.js',
                        'Node.js',
                        'Express',
                        'Socket.io',
                        'Sass',
                        'C Sharp',
                        'Amazon AWS',
                        'Mysql',
                        'JSON Web Tokens'
                    ]
                }
            ]
        }
    ]
};

export default data;
