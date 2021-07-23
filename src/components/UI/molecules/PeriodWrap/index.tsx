import Grid from "../../atom/Grid";
import Text from "../../atom/Text";

interface IProps {
  period?: string;
}

export default function PeriodWrap({ period }: IProps) {
  return (
    <>
      <Grid display="inline-block" left={10} />
      <Grid display="inline-block" color="#f9e7e6" left={4} right={4}>
        <Text fontSize="0.9rem">{period}</Text>
      </Grid>
    </>
  );
}
