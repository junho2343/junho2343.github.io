import { KeyboardEventHandler } from "react";
import styled from "styled-components";

interface IProps {
  // name
  name: string;

  type: "text" | "password";

  // 텍스트 크기
  fontSize?: string;

  // 텍스트 색상
  color?: "main" | string;

  // 클릭 이벤트
  onKeypress?: KeyboardEventHandler;

  value?: any;

  onChange?: any;
}

const InputField = styled.input<IProps>`
  width: 100%;

  background-color: #f9fafc;

  border: 1px solid #e1e2e6;

  padding: 4px;

  // 텍스트 크기
  ${({ fontSize }) => (fontSize ? `font-size: ${fontSize};` : "")}

  // 텍스트 색상
  ${({ color, theme }) =>
    color ? `color: ${color === "main" ? theme.mainColor : color};` : ""}
`;

function InputText(props: IProps) {
  return <InputField {...props} />;
}

export default InputText;
