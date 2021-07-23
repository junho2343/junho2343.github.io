import Grid from "../../atom/Grid";
import Line from "../../atom/Line";
import Text from "../../atom/Text";
import MenuWrap from "../../molecules/MenuWrap";

import logo from "../../../../images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Grid top={40}>
      <Grid
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bottom={10}
      >
        <div>
          <Link to="/">
            <img src={logo} alt="" style={{ width: 100 }} />
          </Link>

          <Grid display="inline-block" left={10}>
            <Text color="#777" inline>
              SoftWare Engineer
            </Text>
          </Grid>
        </div>
        <MenuWrap />
      </Grid>
      {/* <Text
        lineHeight={50}
        textAlign="center"
        fontWeight={600}
        fontSize="1.1rem"
        color="#333"
      >
        

        
      </Text> */}

      <Line color="#ececec" />
    </Grid>
  );
}

export default Header;
