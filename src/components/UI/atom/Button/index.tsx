import { MouseEventHandler, ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  children: ReactNode;

  // 배경색상
  background?: string;

  // 테두리 색상
  borderColor?: string;

  // 클릭 이벤트
  onClick?: MouseEventHandler;

  // 비활성화 여부
  disabled?: boolean;

  // 앞쪽 접두사
  startAdornment?: ReactNode;
}

const ButtonTag = styled.button<IProps>`
  width: 100%;
  min-height: 45px;

  background-color: ${({ background, theme }) =>
    background ? background : theme.mainColor};

  border: ${({ borderColor }) =>
    borderColor ? `1px solid ${borderColor}` : "unset"};
;

  color: white;

  cursor: pointer;

  position: relative;

  : 
`;

const Adornment = styled.span`
  position: absolute;

  top: 50%;
  left: 10px;
  width: 22px;

  transform: translateY(-50%);

  display: flex;
  align-items: center;

  > img {
    width: inherit;
  }
`;

function Button(props: IProps) {
  return (
    <ButtonTag {...props}>
      {props.startAdornment && <Adornment>{props.startAdornment}</Adornment>}
      {props.children}
    </ButtonTag>
  );
}

export default Button;
