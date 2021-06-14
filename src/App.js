import React from "react";
import {Router, Route, Switch} from "react-router-dom";

import "bootstrap/scss/bootstrap.scss";

import history from "./history";

import LandingPage from "./components/pages/landingPage/LandingPage";
import Authentication from "./components/pages/authentication/Authentication";

import "./app.scss";

const App = () => {
    console.log(process.env.REACT_APP_BASE_URL)
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={LandingPage} />
                <Route path="/authentication" exact component={Authentication}/>
            </Switch>
        </Router>
    );
};

export default App;