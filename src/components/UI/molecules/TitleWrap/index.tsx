import Text from "../../atom/Text";
import Grid from "../../atom/Grid";

interface IProps {
  title: string;
}

function TitleWrap(props: IProps) {
  return (
    <>
      <Grid>
        <Text fontSize={"1.6rem"} fontWeight={400} letterSpacing={1} inline>
          {props.title}
        </Text>
      </Grid>
    </>
  );
}

export default TitleWrap;
