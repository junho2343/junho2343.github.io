import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    /* color:#333; */
    letter-spacing: 0.5px;
}
a {
    text-decoration: none;
    :hover{
        text-decoration: underline;

    }
    color: inherit;
    /* display:inline-block; */
    /* width: 100%; */
}
ul,
li {
    /* list-style: square; */
}
// 모바일
/* @media ${({ theme }) => theme.device.mobile} {
    * {
        font-size:14px;
    }
} */

@media screen and (max-width: 400px) {
    * {
        font-size:13px;
    }
}

@media screen and (min-width: 400px) and (max-width: 480px) {
    * {
        font-size:14px;
    }
}

// 태블릿
@media ${({ theme }) => theme.device.tablet} {
    * {
        font-size:15px;
    }
}
// 데스크탑
@media ${({ theme }) => theme.device.desktop} {
    * {
        font-size:16px;
    }
}

`;

export default GlobalStyle;
