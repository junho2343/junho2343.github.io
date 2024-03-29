---
title: "JavaScript / Node.js 잘 알고 사용하기"
excerpt: "JavaScript / Node.js의 동작 원리를 통해 코드의 흐름이 어떤 방식으로 진행되며, Single Thread, Event Loop, Non-Blocking I/O에 대해 알고 확장성 있는 애플리케이션을 만들기 위해 어떤 부분을 조심해야 하는지 알아봅시다."
coverImage: "/assets/blog/javascript-node.js-know-use/cover.jpeg"
date: "2023-02-10"
tags: ["JavaScript", "Node.js"]
reference: [
{exposed: "어쨌든 이벤트 루프는 무엇입니까? | Philip Roberts | JSConf EU", url: "https://www.youtube.com/watch?v=8aGhZQkoFbQ"},
{exposed: "Don't Block the Event Loop (or the Worker Pool)", url: "https://nodejs.org/en/docs/guides/dont-block-the-event-loop/"},
{exposed: "Overview of Blocking vs Non-Blocking", url: "https://nodejs.org/en/docs/guides/blocking-vs-non-blocking/"},
{exposed: "[10분 테코톡] 유세지의 Node.js", url: "https://www.youtube.com/watch?v=A04zlpL1Uw4"},
{exposed: "Don't block the event loop! 매끄러운 경험을 위한 JavaScript 비동기 처리", url: "https://engineering.linecorp.com/ko/blog/dont-block-the-event-loop/"},
{exposed: "Node.js, lots of ways to block your event-loop (and how to avoid it)", url: "https://medium.com/voodoo-engineering/node-js-lots-of-ways-to-block-your-event-loop-and-how-to-avoid-it-b41f41deecf5"},
{exposed: "How JavaScript works: an overview of the engine, the runtime, and the call stack", url: "https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf"},
{exposed: "Node.js는 어떻게 동작하는가", url: "https://yceffort.kr/2020/10/how-node-js-works"},
{exposed: "Javascript 동작원리 (Single thread, Event loop, Asynchronous)", url: "https://medium.com/@vdongbin/javascript-작동원리-single-thread-event-loop-asynchronous-e47e07b24d1c"},
{exposed: "자바스크립트와 이벤트 루프", url: "https://meetup.nhncloud.com/posts/89"},
]
---

> JavaScript / Node.js의 동작 원리를 통해 코드의 흐름이 어떤 방식으로 진행되며, Single Thread, Event Loop, Non-Blocking I/O에 대해 알고 확장성 있는 애플리케이션을 만들기 위해 어떤 부분을 조심해야 하는지 알아봅시다.

## 브라우저에서의 JavaScript 동작 원리부터

우선 JavaScript 코드는 Engine을 통해 실행되며, 우리가 아는 브라우저나 Node.js 안에 내재되어 있습니다. 그럼 JavaScript Engine은 어떤 역할을 담당할까요?

![Chrome, Node.js 에 내재된 V8 JavaScript Engine](/assets/blog/javascript-node.js-know-use/1.png)

JavaScript Engine은 JavaScript 코드를 컴퓨터가 이해할 수 있는 언어로 변환시켜주며, 주요 구성 요소를 단순화해 보자면 메모리 할당이 일어나는 **Memory Heap**과 코드 실행에 따라 호출 스택이 쌓이는 **Call Stack**이 있습니다.

하지만 저희가 흔히 아는 비동기식 코드를 위한 setTimeout 이나 HTTP 요청을 관리하는 코드들, JavaScript 의 동작 원리에 항상 언급되는 Event Loop는 찾아볼 수 없습니다.

<!-- <div>

![Chrome 브라우저의 구성 요소](/assets/blog/javascript-node.js-know-use/2.png)

<div class="text-sm">Chrome 브라우저의 구성 요소</div>
</div> -->

![Chrome 브라우저](/assets/blog/javascript-node.js-know-use/2.png)

위에서 언급한 요소들은 **JavaScript Engine**이 아닌 **JavaScript Runtime**에 내재되어 있는걸 볼 수 있으며, 어떤 식으로 연결되어 움직이는지 차근차근 알아봅시다.

<aside>

💡 JavaScript Runtime이란?

JavaScript Engine이 실행되는 환경이며, 대표적으로 브라우저나 Node.js가 JavaScript Runtime이라고 불립니다.

</aside>

## Single Thread == One Call Stack

JavaScript는 **Single Thread** 프로그래밍 언어입니다. 이 말은 한 번에 하나의 **Call Stack** 만을 가지며, 하나의 프로그램은 <u>동시에 하나의 코드</u>만 실행할 수 있다는 말인데요. 이게 무엇을 의미하는지 시각화하여 살펴봅시다.

<aside>

💡 Call Stack이란?

LIFO 형태의 Stack 자료구조 형식으로, 여러 함수를 호출하는 스크립트에서 자신의 위치를 기록/추적하는데 사용됩니다.

</aside>

![](/assets/blog/javascript-node.js-know-use/3.gif)

위 GIF를 보면, 함수를 실행하기 위해 Call Stack에 쌓고, 함수의 실행이 끝날 때 나중에 쌓인 스택부터 제거되는 걸 볼 수 있습니다. 이를 통해 **코드 실행의 흐름**을 알 수 있죠.

그렇다면 오래 걸리는 코드가 Call Stack에 남아있다면 어떻게 될까요?

```javascript
console.log("start");

const wakeUpTime = Date.now() + 3000;

while (Date.now() < wakeUpTime) {}

console.log("end");
```

![](/assets/blog/javascript-node.js-know-use/4.gif)

브라우저에서 2초 동안 while 문을 계속 실행하여 Call Stack을 비우지 않을 경우, 그동안의 모든 작업이 멈추게 됩니다. 2초가 지나서야 클릭 이벤트가 실행되는걸 볼 수 있죠. 이는 위에서 말했듯 JavaScript가 **Single Thread**를 기반으로 동작하여 <u>동시에 하나의 코드</u>만 실행할 수 있기 때문입니다.

또한 이렇게 코드가 느리게 동작될 경우 `Blocking` 된다고 표현합니다. `Blocking`/`Non-Blocking`은 <u>프로세스의 유휴 상태</u>에 대한 개념으로, 프로세스가 앞으로 해야 할 작업을 할 수 있는가에 따라 정해지죠.

그래서 JavaScript에서는 Call Stack에 느린 동작이 남아있을 경우 `Blocking`된다고 말할 수 있을 것 같습니다.

## JavaScript Runtime과 Event Loop

```javascript
console.log("start");

setTimeout(function cb() {
  console.log("1 seconds after");
}, 1000);

console.log("end");
```

그렇다면 우리가 흔히 사용하는 setTimeout 함수는 어떻게 동작할까요?

누구나 “start”, “end”가 먼저 콘솔에 노출되고 1초 후 “1 seconds after”가 보인다고 생각하실 겁니다. 하지만 1초를 기다리는 동안 브라우저가 멈추는 현상은 없죠.

여기에서 `JavaScript Runtime`의 역할과 `Event Loop`의 개념이 나오게 됩니다.

![](/assets/blog/javascript-node.js-know-use/2.png)

위에서 사용했던 그림을 다시 보면, 브라우저(**JavaScript Runtime**)는 **JavaScript Engine** 외에도 많은 것들을 제공합니다. setTimout과 같은 다양한 Web APIs의 기능들을 `Multi Thread` 환경에서 처리하며, 그 후에 실행할 콜백함수들을 관리하죠.

**JavaScript Runtime**에서 제공하는 함수들은 대부분 `Non-Blocking`하며 `비동기적`으로 제공됩니다. `비동기적`이라는 말은 `Blocking`/`Non-Blocking`과는 다르며 <u>프로세스의 수행 순서</u> 보장에 대한 개념으로, 코드가 위에서 아래의 흐름이 지켜지는지에 따라 정해집니다.

setTimeout 함수의 예제는 수행 순서가 위에서 아래로 일정하지 않으니 `비동기적`이라고 할 수 있습니다.

![](/assets/blog/javascript-node.js-know-use/5.gif)

실행되는 과정을 좀 더 자세히 보면, setTimeout 함수는 **브라우저**에서 제공하므로 JavaScript 코드가 처리되는 **Call Stack**과는 별개로 다른 영역에서 처리되며, 그 후 실행할 작업을 **Callback Queue**에 쌓게 됩니다.

이때 `Event Loop`는 **Call Stack**이 비어있다면 **Callback Queue**의 작업을 가져와 실행할 수 있게 해줍니다.

## 그렇다면 Node.js의 동작 원리는?

JavaScript 코드가 브라우저에서 동작되는 원리를 먼저 설명한 이유는, Node.js에서 동작되는 원리와 세부적인 단계는 다르지만 개념적으론 같기 때문입니다.

그럼 어떤 부분에서 차이가 있을까요?

![](/assets/blog/javascript-node.js-know-use/5.png)

브라우저에서 제공되는 Web APIs의 기능들 대신 시스템 디스크나 네트워크와 상호작용하는 I/O 작업들을 `Non-Blocking`하며 `비동기적`으로 제공합니다. (그렇지 않은 함수들도 있습니다.)

그렇기 때문에 다른 서버와 통신하거나, 데이터베이스에 접근하고, 파일에 접근하는 등의 I/O 작업을 JavaScript Engine 밖에서 수행하며 **Process**가 `Blocking` 되지 않도록 합니다.

이는 Node.js가 **Single Thread** 기반의 `Non-Blocking I/O` 모델이라고 불리는 이유입니다.

![](/assets/blog/javascript-node.js-know-use/6.png)

또 다른 점으로는 브라우저보다 더 많은 FIFO 대기열(Queue)을 가지며, Event Loop가 각 단계를 순회하며 작업을 수행합니다.

## 결론

위에서 보여드린 브라우저나 Node.js의 구조는 이해를 돕기 위해 많은 것들을 생략하여 간단하게 노출한 것들입니다.

전달하고자 했던 내용은 전반적인 JavaScript 코드의 흐름과 동작 원리이며, JavaScript를 잘 사용하기 위해서는 **Single Thread** 로 동작하는 **JavaScript Engine**의 **Call Stack**에 지연되는 작업을 최소화하여 **process**가 `Blocking` 되지 않도록 = `Event Loop` 가 멈추지 않도록 해야 합니다.
