import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  // 하위 엘리먼트
  children?: ReactNode;

  // 디스플레이 유형
  display?: "inline-block" | "flex" | "inline-flex" | "none";

  // flex 방향
  direction?: "row" | "column";

  // flex 가로 정렬 기준
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";

  // flex 세로 정렬 기준
  alignItems?: "center" | "flex-start" | "flex-end";

  // 패딩
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;

  // 마진
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;

  // 가로
  width?: number;

  // 세로
  height?: number | string;

  // 배경색상
  color?: string;

  relative?: boolean;

  // 선
  border?: string;
}
const Grid = styled.div<IProps>`
  // 디스플레이 유형
  ${({ display }) => (display ? `display: ${display};` : "")}

  // flex 방향
  ${({ direction }) => (direction ? `flex-direction: ${direction};` : "")}

  // flex 가로 정렬 기준
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ""}

  // flex 세로 정렬 기준
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}

  // 패딩
  ${({ top }) => (top ? `padding-top: ${top}px;` : "")}
  ${({ bottom }) => (bottom ? `padding-bottom: ${bottom}px;` : "")}
  ${({ left }) => (left ? `padding-left: ${left}px;` : "")}
  ${({ right }) => (right ? `padding-right: ${right}px;` : "")}

  // 마진
  ${({ mt }) => (mt ? `margin-top: ${mt}px;` : "")}
  ${({ mb }) => (mb ? `margin-bottom: ${mb}px;` : "")}
  ${({ ml }) => (ml ? `margin-left: ${ml}px;` : "")}
  ${({ mr }) => (mr ? `margin-right: ${mr}px;` : "")}

  // 가로
  width: ${({ display }) =>
    display && (display === "inline-block" || display === "inline-flex")
      ? "auto"
      : "100%"};

  ${({ display, width }) =>
    width
      ? display && (display === "inline-block" || display === "inline-flex")
        ? `width: ${width}px;`
        : `max-width: ${width}px;`
      : ""}

  // 세로
  ${({ height }) =>
    height
      ? typeof height === "number"
        ? `height: ${height}px;`
        : `height: ${height};`
      : ""}

  // 배경색상
  background-color: ${({ color, theme }) =>
    color === "main" ? theme.mainColor : color ? color : "none"};

  ${({ relative }) => (relative ? `position: relative;` : "")}

  // 선
  ${({ border }) => (border ? `border: ${border};` : "")}

  word-break: break-all;

  position: relative;
`;

// function Grid(props: IProps) {
//   return <GridTag {...props} />;
// }

export default Grid;
