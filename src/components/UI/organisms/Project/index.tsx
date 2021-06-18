import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import TitleWrap from "../../molecules/TitleWrap";
import Accordion from "../../molecules/Accordion";
import ProjectWrap from "../../molecules/ProjectWrap";

import { ProjectType } from "../../../../data";

interface IProps {
  data: ProjectType;
}

function Project({ data }: IProps) {
  return (
    <>
      <TitleWrap title="PROJECT" />

      <Grid top={10} />
      {/* <Text fontSize="0.85rem" color="#8d8d8d">
        프로젝트 마우스 오버시 상세내역 확인 가능
      </Text> */}

      <Grid top={20} />

      {data.map((one, index) => (
        <Grid key={index}>
          <Accordion
            open={index === 0 ? true : false}
            height={30}
            title={<Text fontWeight={600}>{one.name}</Text>}
            content={
              <>
                {one.data.map((one, index) => (
                  <ProjectWrap data={one} key={index} />
                ))}
              </>
            }
          />
        </Grid>
      ))}
    </>
  );
}

export default Project;
