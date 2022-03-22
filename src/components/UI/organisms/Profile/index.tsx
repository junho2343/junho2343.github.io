import Grid from "components/UI/atom/Grid";
import TitleWrap from "components/UI/molecules/TitleWrap";
import { ProfileType } from "data";

interface IProps {
  data: ProfileType;
}

function Profile({ data }: IProps) {
  return (
    <>
      <TitleWrap title="문준호" />
      {data.map((one, index) => (
        <Grid top={5} key={index}>
          {one}
        </Grid>
      ))}
    </>
  );
}

export default Profile;
