import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import Icon from "../../atom/Icon";
import TitleWrap from "../../molecules/TitleWrap";
import Accordion from "../../molecules/Accordion";

import { ProjectType } from "../../../../data";

interface IProps {
  data: ProjectType;
}

function Project({ data }: IProps) {
  return (
    <>
      <TitleWrap title="PROJECT" />

      <Grid top={30} />

      {data.map((one, index) => (
        <Grid key={index}>
          <Accordion
            open={index === 0 ? true : false}
            height={30}
            title={<Text fontWeight={600}>{one.name}</Text>}
            content={
              <>
                {one.data.map((one, index) => (
                  <Grid top={30} bottom={20} key={index}>
                    <Grid bottom={10}>
                      <Text fontSize="1.4rem" fontWeight={200} inline>
                        {one.name}
                      </Text>

                      <Grid display="inline-block" left={10} />
                      <Grid
                        display="inline-block"
                        color="#f9e7e6"
                        left={4}
                        right={4}
                      >
                        <Text fontSize="0.9rem">{one.period}</Text>
                      </Grid>
                    </Grid>

                    <Text dangerouslySetInnerHTML={{ __html: one.detail }} />

                    <Grid top={15}>
                      {one.skill.map((one, index) => (
                        <Icon target={one} key={index} />
                      ))}
                    </Grid>
                  </Grid>
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
