import { CareerType } from "../../../../data";
import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import TitleWrap from "../../molecules/TitleWrap";
import PeriodWrap from "../../molecules/PeriodWrap";

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
          <PeriodWrap period={one.period} />
        </Grid>
      ))}
    </>
  );
}

export default Career;
