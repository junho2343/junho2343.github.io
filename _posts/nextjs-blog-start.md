---
title: "Next.js 블로그 시작하기"
excerpt: "필자가 블로그를 시작하게 된 계기들과 Next.js 로 블로그를 구현한 이유에 대해 정리한 내용입니다."
coverImage: "/assets/blog/nextjs-blog-start/cover.JPG"
date: "2022-09-12 19:00"
ogImage:
  url: "/assets/blog/nextjs-blog-start/cover.JPG"
---

> 필자가 블로그를 시작하게 된 계기들과 Next.js 로 블로그를 구현한 이유에 대해 정리한 내용입니다.

## 갑자기 블로그를 시작하게 된 계기

어느덧 개발자로 일한 지 4년 차가 된 지금... 첫 이직을 준비하게 되면서 아래와 같은 고민을 가지게 되었습니다.

- 나라는 사람을 어떻게 표현할 수 있을지 (내가 어떤 사람인지)

개발실력도 물론 중요하겠지만, 결국 같이 일하고 싶은 사람을 뽑는 자리이기 때문에 이를 어떻게 표현할 지 말이죠. 그래서 저의 생각들을 정리한 글들을 작성하고자 블로그를 시작하게 되었습니다.

## 왜 Next.js 인가요?

우선 블로그 플랫폼을 선택할 때 저의 선택기준은 아래와 같습니다.

- SEO
- 서버 구현 X - GitHub Pages를 통한 정적 사이트 호스팅 사용.
- 디자인 & 기능 커스텀
- 마크다운 지원

선택기준을 제대로 이해하려면 CSR, SSR, SSG에 대한 이해가 필요한데요,

http 요청에 따른 응답 전문과 실행되는 영역을 가지고 가볍게 비교해봅시다.

### CSR - Client Side Rendering

- http 요청 시 이미 만들어진 정적파일을 응답
  - 빈 html과 JS 파일들
- 이를 Client(브라우저)에서 렌더링하여 콘텐츠가 사용자에게 노출됨

![CSR - http 요청에 대한 응답 전문](/assets/blog/nextjs-blog-start/1.png)
CSR - http 요청에 대한 응답 전문

### SSR - Server Side Rendering

- http 요청 시 실행 중인 서버에서 완성된 html을 생성 후 응답
  - PHP, JSP, ASP 방식

![SSR - http 요청에 대한 응답 전문](/assets/blog/nextjs-blog-start/2.png)

SSR - http 요청에 대한 응답 전문

### SSG - Static Site Generator

- http 요청 시 이미 만들어진 완성된 html을 응답

![SSG - http 요청에 대한 응답 전문 (SSR 응답과 동일)](/assets/blog/nextjs-blog-start/3.png)
SSG - http 요청에 대한 응답 전문 (SSR 응답과 동일)

<br/>

이를 가지고 비교해 보면, 서버가 따로 필요 없으면서 검색엔진에도 노출되는 SSG를 선택하게 되었습니다.

혹 SSR과 SSG의 응답 전문이 동일하여 헷갈리는 분이 있을 수 있는데요

<br/>

http 요청에 따라 다른 API 나 Database 접근과 같이 서버 측 리소스가 필요하지 않고, 고정된 콘텐츠를 응답해야 할 경우 SSG 를 사용합니다.

<br/>

### 본격적인 도구 선택

이제 남은 조건들을 만족하면서 SSG를 지원하는 도구를 찾아봅시다.

- ~~SEO~~
- ~~서버 구현 X - GitHub Pages를 통한 정적 사이트 호스팅 사용.~~
- 디자인 & 기능 커스텀
- 마크다운 지원

필자는 프론트엔드 라이브러리 중 React를 주로 사용했기 때문에, 가장 대중적으로 SSG 를 지원하는 React 기반의 아래 두 도구/프레임워크 를 고민하게 되었습니다.

- Gatsby
- Next.js

결론적으로 커스텀 때문에 비교적 자유로운 Next.js를 사용하게 되었고, 개발 공수를 줄이기 위해 블로그 관련 기능이 이미 존재하는 [Next.js - blog-starter](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) 를 통해 프로젝트를 구현했습니다.

## 기능 커스텀

제가 아래에 알려드리는 기능들은 개인적으로 필수라고 생각되는 기능들이며, 그 이외에 기능 + 디자인은 각자 입맛에 맞게 커스텀 하시길 바랍니다.

> 💡 핸즈온 형식의 게시물이 아닌 정보 제공의 게시물이기 때문에 자세한 사용 방법은 생략된 점 양해 부탁드립니다.

<br/>

### Next.js - 정적 사이트 생성 세팅

Next.js는 기본적으로 SSR 방식으로 지원되기 때문에 SSG 방식으로 정적파일을 생성하기 위해선 수정이 필요합니다.

```json
// package.json
{
  // ... 앞 내용 생략
  "scripts": {
    "build": "next build && next export"
  }
  // ... 뒷 내용 생략
}
```

공식 문서에 나와 있듯 Node.js 서버 없이 독립 실행형으로 실행할 수 있는 정적 HTML로 Next.js 애플리케이션을 내보낼 수 있습니다.

[Advanced Features: Static HTML Export | Next.js](https://nextjs.org/docs/advanced-features/static-html-export)

<br/>

### utterances를 통한 댓글 기능

독자들과 의사소통을 위해서는 댓글 기능이 필수겠죠? 추가적인 리소스 관리 없이 GitHub 이슈를 통해 댓글 기능을 지원하는 utterances를 사용했습니다.

적용 방법은 공식 홈페이지 혹은 정리된 게시물들을 보고 적용해 보시면 될 것 같습니다. ~~귀찮아서가 아닙니다.~~

[utterances](https://utteranc.es/)

<br/>

### GitHub Pages를 통한 정적 사이트 호스팅

이제 개발한 프로젝트를 직접 호스팅해 봐야겠죠. 우선 아래 공식 문서에 따라 레포지토리를 생성해주세요.

[Creating a GitHub Pages site - GitHub Docs](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

<br/>

호스팅이 제대로 되는지 보기 위해서는 먼저 정적파일을 생성한 후 생성한 레포지토리에 파일을 올려봅시다.

```bash
npm run build # next build && next export
```

<br/>

이러면 `https://[자신의 GitHubID].github.io` 접근 시 페이지가 정상 노출되어야 합니다!

![스크린샷 2022-09-11 오후 10.15.35.png](/assets/blog/nextjs-blog-start/4.png)

<br/>

### **Github Actions로 배포 자동화**

게시물을 작성할때마다 빌드하고 업로드하는 과정을 수기로 할 수 없으니 배포 자동화까지 구현해봅시다.

```yml
# .github/workflows/prod.yml

# ... 앞 내용 생략
# 정적 파일로 빌드
- name: build
  run: npm run build

# gh-pages 통한 배포
- name: Deploy
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./out
```

핵심은 [github-pages-action](https://github.com/marketplace/actions/github-pages-action) 액션을 통해 빌드된 정적파일들을 gh-pages 브랜치에 푸쉬하는 것입니다.

마지막으로 GitHub Pages의 기본 호스팅 브랜치를 gh-pages 로 변경해줍시다.

![스크린샷 2022-09-11 오후 10.37.00.png](/assets/blog/nextjs-blog-start/5.png)

이로써 대략적인 블로그 기능들은 추가가 완료된 것 같습니다.

## 마치며

위에서 사용한 라이브러리 같은 경우 여러 사용자가 다양하게 해석을 한 게시물들이 많이 존재합니다. 정리된 글을 보는 것도 좋지만, 개인적으로 공식 문서와 함께 보면 라이브러리가 추구하는 방향대로 더 잘 사용할 수 있는 것 같습니다. ~~저는 그랬습니다.~~

회사에서도 문서 작성 시 시간이 꽤 소요되는 편인데, 요런 간단한 내용에 대해서도 시간이 꽤 걸렸네요…

앞으로 꾸준히 작성할 수 있도록 해보겠습니다.
