import * as React from "react";
import { BrowserRouter, Link, Route, StaticRouter } from "react-router-dom";

import Contact from "components/contact";
import Home from "components/home";

const Router = typeof document !== "undefined" ? BrowserRouter : StaticRouter;

const App = (props: any) => (
  <Router location={props.pathname} context={{}}>
    <React.Fragment>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <main style={{ marginTop: "1em" }}>
        <Route exact path="/" render={() => <Home {...props} />} />
        <Route path="/contact" render={() => <Contact {...props} />} />
      </main>
    </React.Fragment>
  </Router>
);

export default App;
