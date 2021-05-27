import Grid from "../../atom/Grid";
import Line from "../../atom/Line";
import Text from "../../atom/Text";

function Footer() {
  return (
    <>
      <Grid top={30} />

      <Line color="#D8E0E7" />

      <Grid display="flex" justifyContent="center" color="#f6f9fc" height={80}>
        <Grid
          display="flex"
          alignItems="center"
          left={20}
          right={20}
          width={1024}
          height="100%"
        >
          <Text color="#8898a9">© Moon Junho. 2021</Text>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
