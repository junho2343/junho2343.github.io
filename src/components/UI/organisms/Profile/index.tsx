import { ProfileType } from "../../../../data";
import Grid from "../../atom/Grid";
import Text from "../../atom/Text";
import TitleWrap from "../../molecules/TitleWrap";

interface IProps {
  data: ProfileType;
}

function Profile({ data }: IProps) {
  return (
    <>
      <TitleWrap title="PROFILE" />
      {data.map((one, index) => (
        <Grid top={10} key={index}>
          <Grid display="inline-block" width={100}>
            <Text fontWeight={600}>{one.name}</Text>
          </Grid>
          <Grid display="inline-block">{one.value}</Grid>
        </Grid>
      ))}
    </>
  );
}

export default Profile;
