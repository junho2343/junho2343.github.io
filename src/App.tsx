import { ThemeProvider } from "styled-components";
import Router from "Router";

// styled-component 공통 설정
import GlobalStyle from "styles/global";
import theme from "styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}
