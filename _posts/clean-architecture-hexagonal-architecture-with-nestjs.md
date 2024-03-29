---
title: "클린 아키텍처(헥사고날 아키텍처) 알아보기 with NestJS"
excerpt: "아키텍처 패턴 중 하나이기에 주관적이며 애매합니다. 이런 애매한 부분들을 추구하는 원칙에 벗어나지 않는 선에서, 저만의 기준을 세워 정리하고 구현하였음을 참고해 주세요."
coverImage: "/assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/2.png"
date: "2023-03-10"
tags: ["아키텍처","NestJS"]
reference: [
{exposed: "[KSUG Seminar] Growing Application - 2nd. 애플리케이션 아키텍처와 객체지향", url: "https://www.youtube.com/watch?v=26S4VFUWlJM"},
{exposed: "[NHN FORWARD 22] 클린 아키텍처 애매한 부분 정해 드립니다.", url: "https://www.youtube.com/watch?v=g6Tg6_qpIVc"},
{exposed: "ㄷㄷㄷ: Domain Driven Design과 적용 사례공유 / if(kakao)2022", url: "https://www.youtube.com/watch?v=4QHvTeeTsj0"},
{exposed: "기획자님들! 개발자가 아키텍처에 집착하는 이유, 쉽게 알려드립니다", url: "https://www.youtube.com/watch?v=saxHxoUeeSw"},
{exposed: "클린아키텍처는 죽었다! 헥사고날 아키텍처 10분만에 대충 이해시켜 드림 | Hexagonal architecture", url: "https://www.youtube.com/watch?v=MKfSLrwLex8"},
]
---

> 아키텍처 패턴 중 하나이기에 주관적이며 애매합니다. 이런 애매한 부분들을 추구하는 원칙에 벗어나지 않는 선에서, 저만의 기준을 세워 정리하고 구현하였음을 참고해 주세요.

## 좋은 소프트웨어 아키텍처의 목표

모든 프로그램은 계속해서 변하며 이를 막을 순 없습니다. 이러한 변화로부터 변경 사항을 최소화하고, 투입되는 인력을 최소화하는 것이 좋은 소프트웨어 아키텍처의 목표라고 생각합니다.

이러한 목표를 달성하기 위해 다양한 원칙들이 있으며 여러원칙을 지키면서 개발하기는 쉽지 않은데요, `아키텍처 패턴`은 일부 원칙들을 강제화하거나 쉽게 지킬 수 있도록 일종의 레시피 역할을 하며 도와줍니다.

## 클린 아키텍처(Clean Architecture)

![](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/1.jpeg>)

위에서 언급한 아키텍처 패턴 중 하나로, 다음과 같은 특징이 있습니다.

- 의존성이 외부에서 내부로만 존재한다.
- 비즈니스 로직(엔티티)은 외부에 대해 전혀 몰라도 된다.
- 유스케이스라는 레이어를 추가하여 전체적인 흐름을 제어한다. (오른쪽 아래 이미지 참고)

`레이어 아키텍처`와 동일하게 역할에 따라 계층을 분리하며 각 계층의 책임을 분명히 하는 것은 같지만, 더 나아가 비즈니스 로직(엔티티)과 외부 사항 간의 결합도를 최소화하는 것에 목적을 두고 있는 패턴입니다.

실제 구현된 코드를 보면 `레이어 아키텍처`와 다르다는 걸 알 수 있지만, 위 그림만 봐서는 헷갈리며 다를 게 없어 보일 수 있습니다.

이러한 `클린 아키텍처`에 대해 구현하는 방법을 구체화 한 것에 `헥사고날 아키텍처`가 있습니다.

## 헥사고날 아키텍처(Hexagonal Architecture)

![](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/2.png>)

`클린 아키텍처`와 동일하게 의존성은 안쪽으로만 향하기 때문에, 비즈니스 로직(엔티티)은 외부에 대해 전혀 몰라도 됩니다.

또한 Adapter와 Port를 통해 육각형(Hexagonal) 안과 밖의 관심사를 조금 더 명확하게 분리하고, 각자의 역할을 독립적으로 수행할 수 있도록 합니다. (Ports and Adapters Architecture 라고도 불립니다.)

각 영역별 가진 책임은 다음과 같습니다.

### 어댑터(Adapter)

외부 시스템간의 상호작용을 위한 영역

- `In Adapter`, Driving Adapter
  - 외부 시스템에서 애플리케이션을 호출하기 위한 영역 / 수신 영역
  - API, Message Queue, Message Subscribe 등
- `Out Adapter`, Driven Adapter
  - 애플리케이션에서 외부 시스템을 호출하기 위한 영역 / 송신 영역
  - Database, SMS, Message Publish 등

### 포트(Port)

어댑터와 애플리케이션을 연결하는 인터페이스 영역

- `In Port`, Input Port
  - Use Case의 인터페이스
- `Out Port`, Output Port
  - Out Adapter의 인터페이스

추상화된 인터페이스를 사용함으로써 `개방 폐쇄 원칙`(Open Close Principle)을 준수하고, 자연스럽게 `의존성 역전 원칙`(Dependency Inversion Principle)을 지키게 됩니다.

예를 들어 사용하는 Database의 종류가 바뀔 경우,

추상화된 인터페이스(Out Port)로부터 확장된 Out Adapter 영역만 추가 혹은 수정함으로써, 추상화된 인터페이스(Out port)를 사용하는 육각형 내부의 변경을 최소화할 수 있습니다.

### 유스케이스(Use Case)

도메인 모델과 어댑터를 적절히 사용하여 애플리케이션의 로직을 `오케스트레이션`합니다. 도메인 모델에 필요한 준비작업이나 후처리를 담당하고, 비즈니스 로직을 도메인 모델에게 위임합니다.

### 엔티티(Entity)

애플리케이션의 핵심 비즈니스 로직을 정의하며 `도메인 모델`로도 불립니다. 어떠한 의존성도 갖지 않도록 분리하여 외부 사항 간의 결합도를 최대한 낮추어 비즈니스 로직을 처리합니다.

그림에는 엔티티로 명시되어 있지만, 특정 도메인을 개념적으로 표현하며 저는 데이터베이스의 엔티티와 헷갈릴 수 있어 도메인 모델로 사용하고 있습니다.

## 예제 코드로 알아보기

위 내용을 바탕으로 NestJS에서 `헥사고날 아키텍처 패턴`(Hexagonal Architecture Pattern)을 적용한 REST API 예제 코드를 보도록 하겠습니다.

![/src/apps/adapter/in/user.controller.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/3.png>)

위 코드는 외부 Client 로 부터 비밀번호 변경 API 요청을 받기 위한 `In Adapter` 영역입니다. 요청 값에 대한 유효성 검사나 회원 인증 여부를 검증하고 있습니다.

실제 애플리케이션의 로직은 `UserServicePort`에게 위임하고 있는데요,

![/src/apps/port/in/user.setvice.port.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/4.png>)

`In Port` 영역의 추상화된 인터페이스입니다. 위에서 언급한 `의존성 역전 원칙`을 준수하는 목적은 변경에 유연하게 대응하기 위해서지만, 유스케이스(서비스) 영역이 변하지 않을 경우 필요가 없다고 생각할 수 있습니다.

저는 API 스펙처럼 해당 영역이 할 수 있는 일들을 미리 정의하고, 쉽게 확인할 수 있으므로 분리하는 걸 선호하는 편입니다.

![/src/apps/use-case/user.service.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/5.png>)

`UserService`에서는 `의존성 주입`(Dependency Injection)을 위해 Nest IOC 컨테이너에서 관리할 수 있도록 @Injectable 데코레이터를 추가합니다.

![/src/modules/user/user.module.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/6.png>)

이제 Nest IOC 컨테이너에 `UserService`를 공급자로 등록하며, 이때 `UserServicePort`가 호출될 경우 `UserService`가 호출될 수 있도록 설정을 해줍니다.

![/src/apps/use-case/user.service.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/7.png>)

`Use Case` 영역에 해당하는 `UserService`에서는 `Out Port`를 통해 데이터베이스에 조회/저장하고, 도메인 로직을 도메인 모델에게 위임하며 <u>전체적인 흐름</u>을 제어합니다.

![/src/apps/adapter/out/user.repository.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/8.png>)

`Out Adapter` 영역의 `UserRepository`에서는 실제로 데이터베이스와 상호작용하며, `Mapper`를 통해 데이터를 변환합니다.

![/src/modules/user/user.mapper.ts](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/9.png>)

여기서 `Mapper`의 역할은 분리된 도메인 모델이 여러 테이블과 연관이 있을 수 있고, 데이터 자체도 다를 수 있으므로

`데이터베이스 엔티티` ⇒ `도메인 모델` 혹은 `도메인 모델` ⇒ `데이터베이스 엔티티`로 변환하는 작업을 합니다.

![전체적인 폴더 구조](</assets/blog/clean-architecture(hexagonal-architecture)-with-nestjs/10.png>)

## 결론

`클린 아키텍처`는 이런 식으로 각 계층을 분리하며 명확하게 <u>관심사를 분리</u>하고, 변화가 가장 잦은 도메인 로직을 <u>격리</u> 시킴으로써 유연성과 확장성을 높이는 구조를 설계하는 게 목표라면

이와 자주 언급되는 `도메인 주도 설계`(Domain Driven Design)는 위의 도메인 영역을 어떠한 기준으로 분리하고 구성할지에 대한 방법론입니다.

이러한 아키텍처는 추구하는 목적은 있지만 정답은 없다고 생각합니다. 자신이 속한 조직 상황에 맞게 적당히, 잘 적용하면 좋을 것 같습니다.
