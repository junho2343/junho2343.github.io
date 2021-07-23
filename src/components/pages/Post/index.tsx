import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import PeriodWrap from "../../UI/molecules/PeriodWrap";
import MarkDown from "../../UI/molecules/MarkDown";
import data from "../../../data";
import Text from "../../UI/atom/Text";
import Grid from "../../UI/atom/Grid";
import Line from "../../UI/atom/Line";

export default function Post() {
  const { content } = useParams<{ content: string }>();

  const [contentData, setContentData] = useState<string>("");

  const postData = data.posts.find((one) => one.content === content);

  useEffect(() => {
    async function fetchData() {
      setContentData(
        await (
          await fetch(require(`../../../data/post/${content}.md`).default)
        ).text()
      );
    }

    fetchData();
  }, []);

  return (
    <>
      {/* {content} */}
      <Grid top={20} bottom={5}>
        <Text fontSize="2rem" fontWeight={300} inline>
          {postData?.title}
        </Text>
        <PeriodWrap period={postData?.date} />
      </Grid>
      <Line color="#eaecef" />
      <Grid top={20} />

      <MarkDown>{contentData}</MarkDown>
    </>
  );
}
