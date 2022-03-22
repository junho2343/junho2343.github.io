import Grid from "../../atom/Grid";
import Line from "../../atom/Line";
import MenuWrap from "../../molecules/MenuWrap";

function Header() {
  return (
    <>
      <Grid display="flex" alignItems="center" bottom={10}>
        <MenuWrap />
      </Grid>

      <Line color="#ececec" />
    </>
  );
}

export default Header;
