import { ProjectType } from "data";
import Grid from "components/UI/atom/Grid";
import Text from "components/UI/atom/Text";
import Icon from "components/UI/atom/Icon";
import Accordion from "components/UI/molecules/Accordion";

interface IProps {
  data: ProjectType;
}

function ProjectWrap({ data }: IProps) {
  return (
    <Grid bottom={50}>
      <Grid bottom={10}>
        {data.href ? (
          <a href={data.href} target="_blank" rel="noreferrer">
            <Text fontSize="1.4rem" inline color="main">
              <Text fontSize="inherit" fontWeight={400} inline>
                {data.name}
              </Text>{" "}
              |{" "}
              <Text fontSize="inherit" fontWeight={400} inline>
                {data.company}
              </Text>{" "}
              | {data.period}
            </Text>
          </a>
        ) : (
          <Text fontSize="1.4rem" inline>
            <Text fontSize="inherit" fontWeight={400} inline>
              {data.name}
            </Text>{" "}
            |{" "}
            <Text fontSize="inherit" fontWeight={400} inline>
              {data.company}
            </Text>{" "}
            | {data.period}
          </Text>
        )}
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
              <Grid style={{ cursor: "pointer" }}>
                <Text fontSize="1.2rem">자세히</Text>
              </Grid>
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
    </Grid>
  );
}

export default ProjectWrap;
