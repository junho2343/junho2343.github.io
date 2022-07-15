import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "components/pages/About";
import Grid from "components/UI/atom/Grid";
import Footer from "components/UI/organisms/Footer";
import Header from "components/UI/organisms/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Grid display="flex" direction="column" alignItems="center">
        <Grid
          left={20}
          right={20}
          width={1024}
          style={{ minWidth: 320, minHeight: "100vh" }}
        >
          <Header />
          <Switch>
            {/* <Route path="/posts" exact>
              <Posts />
            </Route> */}

            {/* <Route path="/posts/:content">
              <Post />
            </Route> */}

            {/* 최초 페이지 */}
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </Grid>
        <Footer />
      </Grid>
    </BrowserRouter>
  );
}
