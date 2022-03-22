import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    font-family: 'Lato', sans-serif;
    box-sizing: border-box;
    font-weight:300;
    letter-spacing: 0.5px;
    line-height:1.5;
    text-decoration-thickness:from-font;
}
a {
    text-decoration: none;
    color:${({ theme }) => theme.mainColor};

    :hover{
        text-decoration: underline;

    }
    /* display:inline-block; */
    /* width: 100%; */
}
ul{
    padding:0 0 0 20px;
    /* list-style: square; */
}
li {
    padding-top:10px;
}
// 모바일
/* @media ${({ theme }) => theme.device.mobile} {
    * {
        font-size:14px;
    }
} */


// 모바일
@media ${({ theme }) => theme.device.mobile} {
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
