import { BrowserRouter, Route, Switch } from "react-router-dom";

import About from "../components/pages/About";

import Footer from "../components/UI/organisms/Footer";

import Grid from "../components/UI/atom/Grid";

function Router() {
  return (
    <BrowserRouter>
      <Grid display="flex" direction="column" alignItems="center">
        <Grid left={20} right={20} width={1024}>
          <Switch>
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

export default Router;
