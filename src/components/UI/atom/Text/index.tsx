import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children?: ReactNode;

  // 텍스트 정렬
  textAlign?: "center" | "right";

  // 텍스트 크기
  fontSize?: string;

  // 텍스트 굵기
  fontWeight?: number;

  // 텍스트 색상
  color?: "main" | string;

  // 언더라인 여부
  underline?: boolean;

  // 인라인 여부
  inline?: boolean;

  // 자간 (글자별 간격)
  letterSpacing?: number;

  // 클릭 이벤트
  onClick?: MouseEventHandler;

  // 텍스트 높이
  lineHeight?: number;

  dangerouslySetInnerHTML?: {
    __html: string;
  };
}

const TextTag = styled.span<IProps>`
  // 텍스트 정렬
  ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : "")}

  // 텍스트 크기
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : "")}

  // 텍스트 굵기
  ${({ fontWeight }) => (fontWeight ? `font-weight: ${fontWeight};` : "")}

  // 텍스트 색상
  ${({ color, theme }) =>
    color ? `color: ${color === "main" ? theme.mainColor : color};` : ""}

  // 언더라인 여부
  ${({ underline }) => (underline ? "text-decoration: underline;" : "")}

  // 자간 (글자별 간격)
  ${({ letterSpacing }) =>
    letterSpacing ? `letter-spacing: ${letterSpacing}px;` : ""}

  // 인라인 여부
  display: ${({ inline }) => (inline ? "inline" : "block")};

  // 텍스트 높이
  ${({ lineHeight }) => (lineHeight ? `line-height: ${lineHeight}px;` : "")}
`;

function Text(props: IProps) {
  return <TextTag {...props} />;
}

export default Text;
