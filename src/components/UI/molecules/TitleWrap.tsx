import Grid from "components/UI/atom/Grid";
import Text from "components/UI/atom/Text";

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
