import Grid from "components/UI/atom/Grid";
import ProjectWrap from "components/UI/molecules/ProjectWrap";
import TitleWrap from "components/UI/molecules/TitleWrap";
import { ProjectType } from "data";

interface IProps {
  data: ProjectType[];
}

function Project({ data }: IProps) {
  return (
    <>
      <TitleWrap title="프로젝트" />

      <Grid top={30} />
      {/* <Text fontSize="0.85rem" color="#8d8d8d">
        프로젝트 마우스 오버시 상세내역 확인 가능
      </Text> */}

      {data.map((one, index) => (
        <Grid key={index}>
          <ProjectWrap data={one} key={index} />
        </Grid>
      ))}
    </>
  );
}

export default Project;
