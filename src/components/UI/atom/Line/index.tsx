import styled from "styled-components";

interface IProps {
  // 라인 색상
  color?: "main" | string;

  // 라인 굵기
  height?: number;
}

const LineTag = styled.div<IProps>`
  // 라인 색상
  background-color: ${({ color, theme }) =>
    color ? (color === "main" ? theme.mainColor : color) : "black"};

  // 너비
  width: 100%;

  // 굵기
  height: ${({ height }) => (height ? height : 1)}px;
`;

function Line(props: IProps) {
  return <LineTag {...props} />;
}

export default Line;
