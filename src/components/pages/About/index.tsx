import Grid from "../../UI/atom/Grid";

import TitleWrap from "../../UI/molecules/TitleWrap";
import Profile from "../../UI/organisms/Profile";
import Career from "../../UI/organisms/Career";
import Project from "../../UI/organisms/Project";

import data from "../../../data";

import test from "simple-icons";

function About() {
  // console.log(Object.keys(test).join(","));
  console.log(test["nextdotjs"]);
  return (
    <>
      <Grid top={40}>
        <TitleWrap title="JUNHO MOON" subject="Developer" />

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
