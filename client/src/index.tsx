import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";

ReactDOM.render(<App />, document.getElementById("root"));

function App(): JSX.Element {
    return (
        <Router>
            <Switch>
                <Route path="/dyn/:test">
                    <DynamicRoute />
                </Route>
                <Route path="/">
                    <StaticRoute />
                </Route>
            </Switch>
        </Router>
    )
}

function StaticRoute(): JSX.Element {
    return (
        <div>Hello, world</div>
    )
}

function DynamicRoute(): JSX.Element {
    const location = useLocation();

    return (
        <pre>
            {JSON.stringify(location)}
        </pre>
    );
}