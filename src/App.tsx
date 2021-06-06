import React from "react";
import "./App.scss";
import {Header} from "./app/components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import {StatisticsPage} from "./features/statistics/pages/StatisticsPage/StatisticsPage";
import {Home} from "./features/statistics/pages/Home/Home";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact={true} path="/" component={Home} />
                    <Route path="/statistics" component={StatisticsPage} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
