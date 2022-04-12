import Grid from "components/UI/atom/Grid";
import AwardsCertificate from "components/UI/organisms/AwardsCertificate";
import Career from "components/UI/organisms/Career";
import Profile from "components/UI/organisms/Profile";
import Project from "components/UI/organisms/Project";
import data from "data";

function About() {
  return (
    <>
      <Grid>
        <Grid top={40} />
        <Profile data={data.profile} />

        <Grid top={60} />
        <Career data={data.career} />

        <Grid top={60} />
        <AwardsCertificate data={data.awards_certificate} />

        <Grid top={60} />
        <Project data={data.project} />

        <a href="https://hits.seeyoufarm.com">
          <img
            src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fjunho2343"
            alt=""
          />
        </a>
      </Grid>
      {/* <Title text="PROFILE" adornment="Developer" size="big" />
  <Title text="PROFILE" adornment="Developer" />

  <Text text="문준호" title="이름" /> */}
    </>
  );
}

export default About;
