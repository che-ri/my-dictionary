import React from "react";
import { GlobalStyle } from "./globalStyle";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/add" exact component={Add} />
                <Redirect from="*" to="/" />
            </Switch>
        </div>
    );
}

export default App;
