import * as React from "react";
import { Link } from "react-router-dom";

export default class App extends React.Component<any> {
  public render() {
    const { render, routes } = this.props;

    const route = routes.find(
      (r: any) => r.path === this.props.location.pathname,
    );

    return (
      <React.Fragment>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main style={{ marginTop: "1em" }}>{render()}</main>
      </React.Fragment>
    );
  }
}
