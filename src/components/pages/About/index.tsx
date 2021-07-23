import Grid from "../../UI/atom/Grid";

import Profile from "../../UI/organisms/Profile";
import Career from "../../UI/organisms/Career";
import Project from "../../UI/organisms/Project";

import data from "../../../data";

function About() {
  return (
    <>
      <Grid>
        {/* <TitleWrap title="JUNHO MOON" subject="Developer" /> */}
        {/* <TitleWrap title="JUNHO2343" subject="Software Engineer" /> */}
        {/* <TitleWrap title="SOFTWARE ENGINEER" /> */}
        {/* <TitleWrap title="JUNHO2343" /> */}

        <Grid top={40} />
        <Profile data={data.profile} />

        <Grid top={80} />
        <Career data={data.career} />

        <Grid top={80} />
        <Project data={data.project} />
      </Grid>
      {/* <Title text="PROFILE" adornment="Developer" size="big" />
  <Title text="PROFILE" adornment="Developer" />

  <Text text="문준호" title="이름" /> */}
    </>
  );
}

export default About;
