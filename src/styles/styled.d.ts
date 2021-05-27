// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    mainColor: string;

    device: {
      maxWidth: string;
      minWidth: string;
      mobile: string;
      tablet: string;
      desktop: string;
    };
  }
}
