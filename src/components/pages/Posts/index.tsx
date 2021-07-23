// import { useEffect, useState } from "react";

// import MarkDown from "../../UI/molecules/MarkDown";
import Grid from "../../UI/atom/Grid";
import data from "../../../data";
import { Link } from "react-router-dom";
import PeriodWrap from "../../UI/molecules/PeriodWrap";
import Text from "../../UI/atom/Text";
import Line from "../../UI/atom/Line";

export default function Posts() {
  return (
    <>
      {data.posts.map((one, index) => (
        <Grid key={index}>
          <Link to={`/posts/${one.content}`} style={{ textDecoration: "none" }}>
            <Grid top={20} bottom={5} display="flex" alignItems="center">
              <Grid
                width={80}
                height={80}
                mr={10}
                display="flex"
                justifyContent="center"
                alignItems="center"
                border="1px solid #eaecef"
              >
                {one.thumbnail ? (
                  <img src={one.thumbnail} alt="" style={{ width: "100%" }} />
                ) : (
                  <Text fontSize="0.8rem">No ThumbNail</Text>
                )}
              </Grid>

              <Text fontSize="1.4rem" fontWeight={300} inline>
                {one.title}
              </Text>
              {/* <PeriodWrap period={one.date} /> */}
            </Grid>
            <Line color="#eaecef" />
            {/* <Grid top={20} /> */}
          </Link>
        </Grid>
      ))}
    </>
  );
}
