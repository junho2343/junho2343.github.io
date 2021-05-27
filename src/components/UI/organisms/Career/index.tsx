import { CareerType } from "../../../../data";
import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import TitleWrap from "../../molecules/TitleWrap";

interface IProps {
  data: CareerType;
}

function Career({ data }: IProps) {
  return (
    <>
      <TitleWrap title="CAREER" />
      {data.map((one, index) => (
        <Grid top={10} key={index}>
          <a href={one.href} target="_blank" rel="noreferrer">
            <Text fontWeight={400} underline inline>
              {one.name}
            </Text>
          </a>
          <Grid display="inline-block" left={10} />
          <Grid display="inline-block" color="#f9e7e6" left={4} right={4}>
            <Text fontSize="0.9rem">{one.period}</Text>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default Career;
