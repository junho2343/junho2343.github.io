import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import Icon from "../../atom/Icon";
import { ProjectOneType } from "../../../../data";
import styled from "styled-components";
import Accordion from "../Accordion";

interface IProps {
  data: ProjectOneType;
}

const WrapGrid = styled(Grid)`
  cursor: pointer;

  /* :hover {
    
  } */
`;

function ProjectWrap({ data }: IProps) {
  return (
    <WrapGrid top={30} bottom={20}>
      <Grid bottom={10}>
        <Text fontSize="1.4rem" fontWeight={200} inline>
          {data.name}
        </Text>

        <Grid display="inline-block" left={10} />
        <Grid display="inline-block" color="#f9e7e6" left={4} right={4}>
          <Text fontSize="0.9rem">{data.period}</Text>
        </Grid>
      </Grid>

      <Text dangerouslySetInnerHTML={{ __html: data.content }} />

      <Grid top={15}>
        {data.skill.sort().map((one, index) => (
          <Icon target={one} key={index} />
        ))}
      </Grid>
      {data.detail && (
        <>
          <Grid top={20} />
          <Accordion
            // open={index === 0 ? true : false}
            height={30}
            title={
              <Text fontSize="1.4rem" fontWeight={200}>
                자세히
              </Text>
            }
            content={
              <Grid top={20} bottom={10}>
                {data.detail.map((one, index) => (
                  <li key={index}>
                    <Text fontSize="0.9rem" inline>
                      {one}
                    </Text>
                  </li>
                ))}
              </Grid>
            }
          />
        </>
      )}
    </WrapGrid>
  );
}

export default ProjectWrap;
