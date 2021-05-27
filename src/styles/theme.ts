import { DefaultTheme } from "styled-components";

const Theme: DefaultTheme = {
  mainColor: "#34a853",

  device: {
    maxWidth: "1100px",
    minWidth: "320px",
    mobile: "screen and (max-width: 480px)",
    tablet: "screen and (min-width: 480px) and (max-width: 1024px)",
    desktop: "screen and (min-width: 1024px)",
  },
};

export default Theme;
