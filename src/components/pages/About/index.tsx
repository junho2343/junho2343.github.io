import Grid from "../../UI/atom/Grid";

import Profile from "../../UI/organisms/Profile";
import Career from "../../UI/organisms/Career";
import Project from "../../UI/organisms/Project";

import data from "../../../data";

function About() {
  return (
    <>
      <Grid>
        <Grid top={40} />
        <Profile data={data.profile} />

        <Grid top={60} />
        <Career data={data.career} />

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
