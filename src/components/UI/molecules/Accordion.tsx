import { MouseEventHandler, ReactNode, useState } from "react";
import styled from "styled-components";
import { RiArrowDownSLine, RiArrowUpSLine } from "react-icons/ri";

import Grid from "components/UI/atom/Grid";

interface IProps {
  open?: boolean;
  height: number;
  title: ReactNode;
  content: ReactNode;
}

const AccordionTitle = styled(Grid)<{ onClick: MouseEventHandler }>`
  cursor: pointer;
`;

const AccordionWrap = styled(Grid)`
  /* max-height: 50px; */
  /* transition: 0.3s; */
  overflow: hidden;
`;

const ArrowWrap = styled(Grid)`
  position: absolute;
  right: 0;
`;

function Accordion({ open, height, title, content }: IProps) {
  const [expanded, setExpanded] = useState(open);

  return (
    <>
      <AccordionWrap height={expanded ? "" : height}>
        <AccordionTitle
          right={25}
          display="inline-flex"
          alignItems="center"
          height={height}
          relative
          onClick={() => {
            setExpanded(!expanded);
          }}
        >
          {title}
          <ArrowWrap width={20} display="flex" alignItems="center">
            {expanded ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
          </ArrowWrap>
        </AccordionTitle>

        <Grid>{content}</Grid>
      </AccordionWrap>
    </>
  );
}

export default Accordion;
