import Grid from "components/UI/atom/Grid";
import Line from "components/UI/atom/Line";
import MenuWrap from "components/UI/molecules/MenuWrap";

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
