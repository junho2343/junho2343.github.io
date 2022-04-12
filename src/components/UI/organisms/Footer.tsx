import Grid from "components/UI/atom/Grid";
import Line from "components/UI/atom/Line";
import Text from "components/UI/atom/Text";

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
          <Text color="#8898a9">© Moon Junho. {new Date().getFullYear()}</Text>
        </Grid>
      </Grid>
    </>
  );
}

export default Footer;
