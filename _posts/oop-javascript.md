---
title: "객체지향 JavaScript 이론"
excerpt: "객체지향 프로그래밍의 이론과 궁극적인 목표에 대해 정리한 내용입니다."
coverImage: "/assets/blog/oop-javascript/cover.png"
date: "2023-02-20"
tags: ["JavaScript", "OOP", "코드스피츠"]
reference: [
{exposed: "코드스피츠 86 객체지향 자바스크립트 - 1회차", url: "https://www.youtube.com/watch?v=E9NZ0YEZrYU"}
]
---

> 객체지향 프로그래밍의 이론과 궁극적인 목표에 대해 정리한 내용이며, 아래 강의영상을 보고 정리한 내용입니다.
>
> [https://www.youtube.com/watch?v=E9NZ0YEZrYU](https://www.youtube.com/watch?v=E9NZ0YEZrYU)

## Value Context VS Identifier Context

FP(함수형 프로그래밍), OOP(객체지향 프로그래밍)를 구분하는 중요한 개념은 프로그램을 개발할 때 Value Context/Identifier Context 중 어떤 관점으로 개발하냐에 따라 정해진다.

- Value Context
  - 메모리 주소와 관계없이 들어있는 값을 봄
  - 함수지향
- Identifier Context
  - 값이 아닌 메모리 주소를 봄
  - 객체지향

이 두 가지를 혼용하는 순간 혼란이 가중되어 버그가 발생할 수 있다. 되도록 하나의 관점(Context)으로 개발하는 걸 권장한다.

```javascript
const a = { a: 3, b: 5 };
const b = { a: 3, b: 5 };

// Identifier Context
console.log(a === b); // false

// Value Context
console.log(JSON.stringify(a) === JSON.stringify(b)); // true
```

객체지향의 가장 기본은 메소드의 인자, 리턴하는 값 등 전부 다 객체(Identifier)만 사용해야 하며, 값(value)을 사용할 수 있는 건 `생성자`가 유일하다.

### Value 특징

<!-- prettier-ignore -->
- 끝없는 복사본
  - 참조하지 않는다.
  - 값을 할당하거나, 함수 인자로 넘길 때 언제나 복사본을 만든다.
    ```javascript
      let a = 1;
      let b = a;

      a = 2;

      console.log(a); // 2
      console.log(b); // 1
    ```
- 상태 변화에 안전?
  - 뭘 하든 복사본이 만들어지니 상태가 변할 수 없다.
  - 상태가 관리되어 안전한 게 아니라, 계속 불변하는 값을 만들어서 안전해 보일 뿐이다.
    - `3 + 1 = 4`  ⇒ 3과 1은 그대로 있고 4가 만들어진다.
    - 이걸 관리하기 위해 함수형 프로그래밍 등장. 미리 정해진 함수의 연산을 사용.
- 연산을 기반으로 전개
  - 공식이 자주 바뀌거나, 복잡한 도메인의 연산을 표현하기는 어렵다.
  - 수식이 정해져 있고 간단하다면 추천
    - 넷플릭스 어울림 ⇒ 동영상을 스트리밍하는 게 다니까

### Identifier 특징

- 하나의 원본
  - 하나의 객체를 가지고 속성을 바꾸면서 사용 ⇒ 상태가 일관성이 없음
- 상태 변화를 내부에서 책임짐
  - 바뀐 속성에 대한 조건들을 내부에서 제어해야 함 ⇒ 어려움
- 메세지를 기반으로 로직을 전개
  - 구현한 데까지 만들고 나머지는 실패 유도를 할 수 있음

<aside>

💡 객체지향의 가장 중요한 점은 값(value)을 사용하지 않는다.

</aside>

## 다형성(Polymorphism)

`다형성`(Polymorphism) = `대체가능성`(substitution) + `내적일관성`(internal identity)

```javascript
const Worker = class {
  run() {
    console.log("working");
  }
  print() {
    this.run();
  }
};

// Overriding
const HardWorker = class extends Worker {
  run() {
    console.log("HardWorking");
  }
};

const worker = new HardWorker();

console.log(worker instanceof Worker); // true

worker.print(); // HardWorking => HardWorker의 run()
```

### 대체가능성(substitution)

```javascript
console.log(worker instanceof Worker); // true
```

- 확장된 객체는 원본으로 대체 가능
- 확장된 class는 대상 class를 대체할 수 있다
- 자식 class는 부모 class를 대체할 수 있다
- HardWorker의 부분집합은 Worker

### 내적일관성(internal identity)

```javascript
worker.print(); // HardWorking => HardWorker의 run()
```

- 생성 시점의 타입이 내부에 일관성 있게 참조됨
- 어떠한 경우에도 태어났을 때의 원본 class를 유지하려는 속성
- worker는 HardWorker class이므로 this.run() ⇒ HardWorker의 run()을 의미

<aside>

💡 객체지향언어란?

다형성(Polymorphism)[`대체가능성` + `내적일관성`]이 언어 차원에서 지원되는 것을 의미한다. 이를 구현하는 방식은 언어마다 굉장히 다르며, JavaScript에서는 prototype을 통해 지원한다.

</aside>

## 객체의 본질(Object Essentials)

객체지향언어를 쓴다고 객체지향 프로그래밍을 하는 건 아니다. 객체지향 프로그래밍을 위한 조건들을 살펴보자.

`객체의 본질`(Object Essentials) = `기능의 캡슐화`(Encapsulation of functionality) + `상태 관리 책임`(Maintenance of state)

```javascript
const EssentialObject = class {
  #name = "";
  #screen = null;

  constructor(name) {
    this.#name = name;
  }

  camouflage(name) {
    this.#screen = (Math.random() * 10).toString(16).replace(".", "");
  }

  get name() {
    return this.#screen || this.#name;
  }
};
```

### 기능의 캡슐화(Encapsulation of functionality)

```javascript
get name() {
  return this.#screen || this.#name;
}
```

- 외부에 기능(메소드)을 감춘다.
  - ATM을 생각하면, 단순한 인터페이스를 보여주고 복잡한 작업들은 노출하지 않는다.
  - `setAge` method는 캡슐화가 아니다. 나이를 **어디에**, **왜** 사용하는지 생각하고 `setChild`, `setAdult`와 같은 method로 직접적인 노출을 하지 않고 기능의 캡슐화가 가능하다.

### 상태 관리 책임(Maintenance of state)

```javascript
#name = "";
#screen = null;

...

camouflage(name) {
this.#screen = (Math.random() \* 10).toString(16).replace(".", "");
}

```

- 외부에 상태(데이터)를 감춘다. ⇒ hide state
  - 객체의 속성이 노출되는 순간 값으로 사용된다. 이후 Value Context로 움직이기 때문에 객체지향은 무너진다.
- 상태에 대한 관리는 내가 직접 한다.
  - `setAge` method는 외부에서 나이를 조절할 수 있으니 이에 위배된다.

<aside>

💡 객체지향 프로그래밍이란?

구현한 모든 객체가 `상태 관리 책임`(Maintenance of state) + `기능의 캡슐화`(Encapsulation of functionality)를 만족하도록 해야 한다.

</aside>

### 변화의 격리(Isloation of change)

- 모든 프로그램은 계속해서 변하며, 변화를 막을 순 없다.
- 모든 프로그래밍 언어의 궁극적인 목표는 변화에 대한 격리다.
  - A를 수정했다고 B에서 문제가 발생하면 안 됨.
- 객체지향에서 `상태 관리 책임`+ `기능의 캡슐화`를 객체의 본질로 보는 이유는, 변화의 여파를 막고 격리벽을 세울 수 있는 유일한 수단이기 때문이다.

## 객체지향의 알려진 기본 설계 요령

SOLID 원칙

## SRP - 단일책임(Single Responsibility) 원칙

- 코드를 수정하는 원인은 오직 하나뿐이다.
  - 하나의 기능만 가지며 하나의 책임을 수행하는 데 집중한다.
- 격리 수준이 높다면 촘촘한 단위테스트는 필요 없다.

### OCP - 개방폐쇄(Open Closed) 원칙

- Open: `implements`, `extends`를 할 수 있게 만들어라.
- Closed: 수정이 필요할 경우 기존의 class를 건드는 게 아니라`implements`, `extends`를 통해 또다른 class를 만들어 해결한다.
- 변할 부분과 변하지 않을 부분을 명확히 구분하고, 문제에 대한 공통점을 인식해서 추상화에 성공해야한다.

### LSP - 업캐스팅 안전(Liskov Substitusion) 원칙

- 추상층의 정의가 너무 구체적이면 구상층의 구현에서 모순이 발생한다.
- 자식 클래스는 언제나 부모 클래스를 대체할 수 있어야 한다.
  - 다형성의 대체 가능성?

```typescript
abstract class Biology {
  breathe() {}
  moveToLeg() {}
}

class Human extends Biology {}
class Ostrich extends Biology {}
class Ameba extends Biology {}
class Eagle extends Biology {}
class Whale extends Biology {}
```

- 추상층 - 생물
  - 숨을쉰다, 다리로 이동한다.
- 구상층
  - 사람 ok
  - 타조 ok
  - 아메바 no
  - 독수리 no
  - 고래 no
- 아메바 독수리 고래는 생물이지만 다리로 이동할 수 없으므로 `upcasting`을 할 수 없다.

```typescript
abstract class Biology {
  breathe() {}
}

interface MoveToLegAble {
  moveToLeg: () => void;
}

class Human extends Biology implements MoveToLegAble {
  moveToLeg() {}
}
class Ostrich extends Biology implements MoveToLegAble {
  moveToLeg() {}
}
class Ameba extends Biology {}
class Eagle extends Biology {}
class Whale extends Biology {}
```

### ISP - 인터페이스 분리(Interface Segregation) 원칙

- 앞에서 예제로 사용한 코드도 LSP를 해결하기 위해 ISP를 사용했다고 할 수 있다.
  - 예제를 조금 더 추가해보자.

![ISP 반영 전](/assets/blog/oop-javascript/1.png)

```typescript
abstract class Biology {
  breathe() {}
  moveToLeg() {}
  fly() {}
}

class Human extends Biology {}
class Ostrich extends Biology {}
class Ameba extends Biology {}
class Eagle extends Biology {}
class Whale extends Biology {}
```

- 숨을쉰다
  - 모두 ok
- 다리로 이동한다
  - 사람, 타조
- 난다
  - 독수리

![ISP 반영 후](/assets/blog/oop-javascript/2.png)

```typescript
abstract class Biology {
  breathe() {}
}

abstract class MoveToLegAbleBiology extends Biology {
  moveToLeg() {}
}
abstract class flyAbleBiology extends Biology {
  fly() {}
}

class Human extends MoveToLegAbleBiology {}
class Ostrich extends MoveToLegAbleBiology {}
class Ameba extends Biology {}
class Eagle extends flyAbleBiology {}
class Whale extends Biology {}
```

혹은 아래와 같이 사용할 수 있을 것 같습니다.

![ISP 반영 후](/assets/blog/oop-javascript/3.png)

```typescript
abstract class Biology {
  breathe() {}
}

interface MoveToLegAble {
  moveToLeg: () => void;
}
interface flyAble {
  fly: () => void;
}

class Human extends Biology implements MoveToLegAble {
  moveToLeg() {}
}
class Ostrich extends Biology implements MoveToLegAble {
  moveToLeg() {}
}
class Ameba extends Biology {}
class Eagle extends Biology implements flyAble {
  fly() {}
}
class Whale extends Biology {}
```

### DIP - 다운캐스팅금지(Dependency Inversion) 원칙

- 의존성 역전의 법칙.
  - 의존성은 언제나 부모 쪽으로 흘러야 한다.
- 위 원칙들을 모두 지켜야 다운캐스팅이 일어나지 않는다
  - 다운캐스팅이 있으면 객체지향이 무너진다.

### 그 외

- DI(Dependency Injection) - 의존성 주입
  - IOC(Inversion of control) - 제어역전의 일부. 구현체 중 하나
- DRY(Don't Repeat Yourself) - 중복방지
- Hollyworld Principle - 의존성 부패방지
- Law of demeter - 최소지식

<aside>

위 내용은 가이드를 위한 기준. 이후 영상에서 상세하게 배워보자.

</aside>

## Message

- 메세지를 기반으로 로직을 전개.
- 내가 해결할 수 없는 건 다른 녀석에게 Message를 보낸다.

### SRP(단일책임원칙)를 준수하는 객체망이 문제를 해결

- 설계는 언제나 상황/조직을 보고 유연하게 처리한다.
  - 어느 정도 수준까지 쪼갤지.
- 단일 책임 원칙을 준수하는 객체에게 책임 이상의 업무를 부여하면?
  - 만능 객체가 되려 한다.
  - 다른 객체에게 의뢰한다.

> 다른 객체에게 의뢰하는 것 = 다른 객체에게 메세지를 보내는 것

- 메세지 - 의뢰할 내용
- 오퍼레이션 - 메시지를 수신할 객체가 제공하는 서비스
  - 객체를 사용하기 위해 외부에 노출되는 서비스 메뉴판 느낌
  - 오퍼레이터가 런타임에 어떤 메소드랑 매핑될지 결정하는 걸 `동적바인딩`이라고 한다.
- 메소드 - 오퍼레이션과 연결될 실제 처리기

> - 추상클래스를 상속받거나 인터페이스를 상속받는 이유
>   - 오퍼레이션과 메서드를 분리해서 런타임에 원하는 것을 사용하기 위함 (OCP)

## 의존성(Dependency)

- 가장 중요한 격리의 문제
- 다른 사람의 문제로 내가 영향을 받는 것

<aside>

다른 객체를 알고 의뢰를 해야 하지만, 나에게 영향은 없어야 한다. (모순적이기에 어렵다.)

디자인(설계)에서 각각 의존성을 적절히 가질 수 있도록 적당한 `균형점`을 찾아야 한다.

</aside>

### 의존성의 종류

1. 객체 생명 주기 전체에 걸친 의존성
   - 상속(extends)
   - 연관(association)
2. 각 오퍼레이션 실행 시 임시적인 의존성
   - 의존(dependency)

<aside>

의존성이 높다면?

- 수정 여파 규모 증가
- 수정하기 어려운 구조 생성
- 순환 의존성
  - A가 의존한 B가 의존한 C가 의존한 D에서 문제 발생
  - 타이틀을 바꿨는데 게시판이 먹통

</aside>

<aside>

객체지향을 배우는 이유는 격리구간을 세우고 의존성을 관리하기 위해서다. 변화에 대해 격리를 하기 위해.

</aside>

## 의존성 역전 (Dependency Inversion)

- 다운캐스팅(DIP) 금지
- Polymorphism(추상인터페이스) 사용

```javascript
const Worker = class {
  run() {
    console.log("working");
  }
  print() {
    this.run();
  }
};

const HardWorker = class extends Worker {
  run() {
    console.log("HardWorking");
  }
};

const worker = new HardWorker();

const Manager = class {
  #workers;
  constructor(...workers) {
    if (workers.every((w) => w instanceof Worker)) this.#workers = workers;
    else throw "invalid workers";
  }
  doWork() {
    this.#wokers.forEach((w) => w.run());
  }
};

const manager = new Manager(new Worker(), new HardWorker());
manager.doWork(); // working, hardworking
```

- 개방폐쇄원칙(OCP) 준수
  - Worker로 부터 확장된 객체를 더 만들 수 있음 ⇒ Open
  - 확장할 때마다 코드를 수정할 필요 없음 ⇒ Closed
    - 확장된 객체(HardWorker)가 아닌 추상화된 객체(Worker)를 사용
- 개방폐쇄원칙(OCP)을 준수하면 의존성 역전 원칙(DIP)은 자연스럽게 달성
  - OCP와 DIP는 깊은 관계
  - OCP가 안되면 DIP가 될 리 없다.

## 제어역전 (Inversion of Control)

- 객체지향에서 도달해야 할 궁극적인 목표.
- 나머지 원칙들을 모두 준수해야 달성할 수 있음.

### 개념

1. Control = flow control(흐름 제어)
2. 광의에서 흐름 제어 = 프로그램 실행 통제
3. 동기 흐름제어, 비동기 흐름제어 등

### 문제점

- 흐름 제어는 상태와 결합하여 진행됨
- 상태 통제와 흐름 제어 = 알고리즘
- 변화에 취약하고 구현하기도 어려움
  - 함수 1개가 120줄이면.. 경우의 수가 수백가지.. 예측이 힘들다.
  - 예측도 힘든데 유지보수는 더 어려움.

### 대안

- 제어를 추상화하고
- 개별 제어의 차이점만 외부에서 주입받는다.
  - 아래 예제를 가지고 자세히 봐보자.

```javascript
const Renderer = class {
  #view = null;
  #base = null;

  constructor(baseElement) {
    this.#base = baseElement;
  }

  set view(v) {
    if (v instanceof View) this.#view = v;
    else throw `invalid view: ${v}`;
  }

  render(data) {
    const base = this.#base,
      view = this.#view;

    if (!base || !view) throw "no base or no view";

    let target = base.firstElementChild;

    do base.removeChild(target);
    while ((target = target.nextElementSibling));

    base.appendChild(view.getElement(data));
    view.initAni();
    view.startAni();
  }
};

const View = class {
  getElement(data) {
    throw `override!`;
  }
  initAni() {
    throw "override!";
  }
  startAni() {
    throw "override!";
  }
};

const renderer = new Renderer(document.body);
renderer.view = new (class extends View {
  #el;
  getElement(data) {
    this.#el = document.createElement("div");
    this.#el.innerHTML = `<h2>${data.title}</h2><p>${data.description}</p>`;
    this.#el.style.cssText = `width:100%;background:${data.background}`;
    return this.#el;
  }
  initAni() {
    const style = this.#el.style;
    style.marginLeft = "100%";
    style.transition = "0.3s";
  }
  startAni() {
    requestAnimationFrame(() => (this.#el.style.marginLeft = 0));
  }
})();

renderer.render({
  title: "title test",
  description: "contents.........",
  background: "#ffffaa",
});
```

- renderer에서만 `제어`를 처리함.
  - 얘만 고치면 됨.
- 제어 외의 view는 주입(공급)받아 사용.

> - `Framework`
>   - 제어 역전을 사용.
>   - 일부의 기능들을 정의 ⇒ 그걸 모아서 실행(제어) 시켜줌
> - `Library`
>   - 제어하지 않음.
>   - 기능을 가져다 사용
