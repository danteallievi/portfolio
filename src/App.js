import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About, Portfolio, Skills, Layout } from "./components";

import { CssBaseline } from "@material-ui/core";
import { MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./styles";

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <About />
            </Route>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
            <Route exact path="/skills">
              <Skills />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
