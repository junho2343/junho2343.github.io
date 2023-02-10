---
title: "현실적인 MSA에 대해"
excerpt: "MSA에 대해 드는 저의 주관적인 생각을 정리한 내용입니다. MSA 도입을 고민 중인 분들에게 도움이 되었으면 합니다."
coverImage: "/assets/blog/realistic-msa/1.webp"
date: "2023-01-06"
tag: ["아키텍처", "MSA"]
reference: [
{exposed: "회원시스템 이벤트기반 아키텍처 구축하기", url: "https://techblog.woowahan.com/7835/"},
{exposed: "이모티콘 서비스는 왜 MSA를 선택했나?", url: "https://tech.kakao.com/2021/09/14/msa/"},
{exposed: "오늘의집 MSA Phase 1. 전환전략", url: "https://www.bucketplace.com/post/2021-11-19-오늘의집-msa-여정-part-1-시작/"},
{exposed: "LG CNS 기술블로그 DX Lounge에서 최신 IT 소식을 만나보세요!", url: "https://www.lgcns.com/blog/cns-tech/36171/"},
{exposed: "오버 엔지니어링과 기술 부채", url: "https://seokjun.kim/over-engineering-vs-techincal-debt/"},
{exposed: "DDD와 MSA 기반으로 좋은 서비스 개발하기", url: "https://helloworld.kurly.com/blog/ddd-msa-service-development/"},
{exposed: "[MSA] Asynchronous Backing Service", url: "https://waspro.tistory.com/435"},
{exposed: "Competing Consumers pattern", url: "https://learn.microsoft.com/en-us/azure/architecture/patterns/competing-consumers"},
{exposed: "How Event-Driven Architectures Benefit from Stream Processing", url: "https://pandio.com/event-streams-queues/"},
{exposed: "What is event-driven architecture (EDA)?", url: "https://aws.amazon.com/what-is/eda/"},
{exposed: "Event-driven architecture", url: "https://en.wikipedia.org/wiki/Event-driven_architecture"},
{exposed: "Event-Driven Microservice Architecture", url: "https://medium.com/trendyol-tech/event-driven-microservice-architecture-91f80ceaa21e"},
{exposed: "Event-driven architectures", url: "https://cloud.google.com/eventarc/docs/event-driven-architectures"},
{exposed: "Event-driven architecture with Pub/Sub", url: "https://cloud.google.com/solutions/event-driven-architecture-pubsub"}
]
---

> MSA에 대해 드는 저의 주관적인 생각을 정리한 내용입니다. MSA 도입을 고민 중인 분들에게 도움이 되었으면 합니다.

## MSA를 도입하는 이유

아마 많은 회사에서 서비스의 성장에 따라 트래픽을 감당하기 어려워지거나, 서비스 확장에 어려움을 느끼는 등 다양한 이유로 MSA 도입을 고민하고 계실 거라고 생각합니다. 정리하자면 아래와 같은 이유가 있을 것 같네요.

- 서비스 성장에 따른 폭발적인 트래픽
- 부분적인 scale-out 어려움
- 하나의 기술 스택에 종속되어 각 기능에 적합한 기술을 사용하기 어려움
- 부분 장애가 전체 장애로 전파될 위험성
- 서비스가 크고 복잡해짐에 따른 개선/확장의 어려움

## 장점만 있지는 않다

모든 기술에는 트레이드오프(trade-off)가 있듯, 마이크로서비스로의 전환은 장점만큼 고려해야 할 점이 꽤 있습니다.

- IPC(Inter-Process Communication)
  - 네트워크상 분리된 서비스 간의 통신 고려
- 분산 트랜잭션
  - 분리된 서비스 간 DB 트랜잭션 처리 고려(🤬)
- 운영(인력)
  - 서비스가 분리된 만큼 관리 포인트 증가

현실적으로 빅테크기업이 아닌 스타트업이나 규모가 작은 팀에서 모든 기능을 세세히 분리하여 관리/운영하는 건 생각보다 쉽지 않습니다. 또한 <u>오버엔지니어링</u>이 발생하지 않도록 정말 마이크로서비스로 전환해야만 문제해결이 가능한지도 고려해 봐야 합니다.

- 서버 트래픽이 문제라면
  - `scale-up`을 통해 단일 서버의 성능을 올리기
  - `scale-out` 과 `로드밸런싱`을 통해 여러 대의 서버로 트래픽을 분산하기
- DB 트래픽이 문제라면
  - 읽기 작업이 문제라면
    - 이미 조회한 데이터를 `Cache`를 통해 재사용
    - `Replication` 을 통해 `Read/Write` DB 분리
  - 쓰기 작업이 문제라면
    - `Vertical Partitioning`을 통한 동일한 DB 내 테이블을 분할
    - `Horizontal Partitioning(Sharding)`을 통한 DB 서버를 분할

이러한 부분들을 모두 생각한 후 마이크로서비스로의 전환을 마음먹었다면, `비즈니스의 요구사항`/`서비스 독립성 우선 확보` 등을 비교하여 우선순위를 둔 후 한 서비스씩 점진적으로 전환하길 추천해 드립니다.

이는 <u>스트랭글러 패턴(Strangler Pattern)</u> 이라고도 불리며, 더디게 진행될 수 있지만 안정성과 우선순위가 시급한 서비스를 먼저 전환할 수 있어 효율적입니다.

## 분리된 서비스 간 통신 방법

전환할 서비스를 선택했다면 분리된 서비스 간의 통신 방법(IPC)에 대해 고민을 해봐야 합니다. 크게 응답을 기다리는 동기적인 방법과 응답을 기다리지 않는 비동기적인 방법이 있는데요. (예시는 한가지씩만 들었습니다.)

- 동기방식
  - HTTP 통신
- 비동기방식
  - 메시징 시스템

![](/assets/blog/realistic-msa/2.png)

데이터 조회 같은 읽기 위주의 작업은 보통 응답을 바로 줘야 하기에 `동기적`인 방법을 사용하며 캐싱 등 다양한 방법을 통해 대처할 수 있습니다. 반면 특정 액션을 수행해야 하는 쓰기 위주의 작업은 서비스에 따라 처리시간이 오래 걸릴 수 있으며, 트래픽이 몰릴 경우 `동기적`인 방법으로는 한계가 있습니다. 그래서 사용자에게 응답을 기다리지 않고 작업 요청이 성공됐는지만 알려준 후 실제 작업은 따로 처리될 수 있도록 `비동기적`인 방법을 많이 사용합니다.

쇼핑몰로 예를 들자면, 상품 데이터를 조회하여 노출해줄 때는 지연이 없도록 `동기적`으로 응답받은 후 바로 보여줍니다. 하지만 상품을 주문하는 작업의 경우 배송까지 시간이 걸리기에 성공적으로 주문이 접수됐는지만 알려준 후 실제 처리는 따로 진행될 수 있도록 `비동기적`인 방법을 사용할 수 있겠죠.

추가적인 예로 단순한 회원가입조차 트래픽을 감당할 수 없어 고민 중이라면, 해당 작업의 주 행위를 `동기적`으로 처리한 후 다른 부가적인 작업을 `비동기적`으로 처리하는 방법도 있습니다. 회원가입이라는 주 행위만을 처리한 후 신규회원 쿠폰 발급, 가입 메시지 발송 등의 부가적인 작업을 나중에 처리하여 <u>비관심사들의 분리</u>를 진행할 수 있습니다.

## 메시징 시스템 이용

MSA는 분리된 서비스 간 결합을 낮게 유지하는 게 핵심이며, 앞서 말했던 마이크로서비스 간 통신방법에서 영향을 많이 받습니다. 변경 사항이 발생할 때 대상 서비스만 이해하고 처리가 될 수 있도록 <u>명확한 경계</u>를 가지도록 말이죠.

서비스가 분리되면 코드상의 요청은 `동기적`인 HTTP 통신으로 변경됩니다. 이는 대상 서비스를 알고 호출해야 하기 때문에 서비스는 분리되었지만 결합이 느슨해지지는 않았습니다.

![](/assets/blog/realistic-msa/3.png)

이러한 마이크로서비스 간 결합을 느슨하게 가져가는 방법으로는 메시징 시스템을 이용한 `비동기 요청`이 있습니다. 하지만 이 방법도 항상 느슨한 결합을 보장하지는 않으며, 이 부분에 대해서는 이벤트 기반 아키텍처와 함께 설명을 이어가겠습니다.

## 이벤트 기반 아키텍처와 느슨한 결합

![](/assets/blog/realistic-msa/4.webp)

MSA와 함께 언급되는 `EDA`(Event Driven Architecture)는 이러한 느슨한 결합을 가져갈 수 있도록 도와줍니다. EDA는 마이크로서비스 간 통신을 이벤트 중심으로 처리하는 설계 패턴으로 생산자/게시자가 이벤트를 생성하고 소비자/구독자는 이벤트를 소비하여 다양한 작업을 수행합니다.

이벤트 기반 아키텍처가 느슨한 결합을 가져갈 수 있는 이유는 생산자는 소비자에 대해 아무것도 몰라도 이벤트를 전달할 수 있기 때문입니다.

회원가입 작업 중 신규회원 쿠폰 발급을 하기 위해 다른 서비스에 메시지를 보내야 한다고 가정하겠습니다. 이때 신규회원 쿠폰 발급이라는 <u>목적을 담은 메시지</u>를 전달하게 된다면 생산자는 소비자와 의존관계가 남아 있으므로 결합이 느슨해졌다고 볼 수 없습니다.

반면 발생한 <u>회원가입 자체(이벤트)</u>를 메시지로 전달한다면 생산자와 소비자는 서로에 대해 알지 못하며 <u>명확한 경계</u>를 가지고 두 서비스는 느슨한 결합을 가지게 됩니다.

## 결론

전달하고자 했던 내용은 마이크로서비스로의 전환이 현재 인력/기술에서 오버엔지니어링인지 확인한 후 점진적으로 전환을 이어갔으면 하는 내용입니다. 또한 MSA의 핵심은 결합을 최대한 느슨하게 가져가며 명확한 경계를 가져야 장점을 잘 발휘할 수 있는 것 같습니다.
