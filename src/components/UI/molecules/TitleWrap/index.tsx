import Text from "../../atom/Text";
import Line from "../../atom/Line";
import Grid from "../../atom/Grid";

interface IProps {
  title: string;
  subject?: string;
}

function TitleWrap(props: IProps) {
  return (
    <>
      <Grid>
        <Text
          color="main"
          fontSize={props.subject ? "1.6rem" : "1.3rem"}
          fontWeight={props.subject ? 500 : 400}
          letterSpacing={1}
          inline
        >
          {props.title}
        </Text>
        {props.subject && (
          <Grid display="inline-block" left={10}>
            <Text color="#777" inline>
              {props.subject}
            </Text>
          </Grid>
        )}
      </Grid>
      <Grid top={5}>
        <Line color="#ececec" />
      </Grid>
    </>
  );
}

export default TitleWrap;
