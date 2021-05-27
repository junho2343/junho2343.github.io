import Grid from "../../atom/Grid";
import Line from "../../atom/Line";
import Text from "../../atom/Text";

interface IProps {
  title: string;
}

function Header({ title }: IProps) {
  return (
    <Grid>
      <Text
        lineHeight={50}
        textAlign="center"
        fontWeight={600}
        fontSize="1.1rem"
        color="#333"
      >
        {title}
      </Text>
      <Line />
    </Grid>
  );
}

export default Header;
