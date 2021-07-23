import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Grid from "../../atom/Grid";
import Text from "../../atom/Text";

const MenuPc = styled(Grid)`
  @media ${({ theme }) => theme.device.mobile} {
    display: none;
  }
`;

const MenuMobile = styled.div<{ menuActive: boolean }>`
  display: none;
  @media ${({ theme }) => theme.device.mobile} {
    display: block;
  }

  > #menu {
    cursor: pointer;
    width: 30px;
  }

  > #mask {
    visibility: ${({ menuActive }) => (menuActive ? "visible" : "hidden")};
    opacity: ${({ menuActive }) => (menuActive ? "1" : "0")};
    width: 100%;
    height: 100vh;
    position: fixed;
    z-index: 9;
    top: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: 0.5s;
    cursor: pointer;
  }
  > #menuWrap {
    width: 40%;
    height: 100vh;
    float: right;
    position: fixed;
    z-index: 10;
    top: 0;
    right: ${({ menuActive }) => (menuActive ? "0" : "-100%")};
    background: white;
    transition: 0.5s;
  }
`;

function MenuWrap() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <MenuPc display="flex" justifyContent="space-between" width={100}>
        <Link to="/">About</Link>
        <Link to="/posts">Post</Link>
      </MenuPc>
      <MenuMobile menuActive={menuActive}>
        <div
          id="menu"
          onClick={() => {
            setMenuActive(true);
          }}
        >
          <Grid color="#777" height={2} mb={5} />
          <Grid color="#777" height={2} mb={5} />
          <Grid color="#777" height={2} />
        </div>
        <div
          id="mask"
          onClick={() => {
            setMenuActive(false);
          }}
        />
        <Grid id="menuWrap" left={30} top={30}>
          <Grid bottom={10}>
            <Text>
              <Link
                to="/"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                About
              </Link>
            </Text>
          </Grid>
          <Grid bottom={10}>
            <Text>
              <Link
                to="/posts"
                onClick={() => {
                  setMenuActive(false);
                }}
              >
                Post
              </Link>
            </Text>
          </Grid>
        </Grid>
      </MenuMobile>
    </>
  );
}

export default MenuWrap;
