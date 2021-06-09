import React, { useEffect } from "react";
import "./App.scss";
import { Header } from "./app/components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StatisticsPage } from "./features/statistics/pages/StatisticsPage/StatisticsPage";
import { Home } from "./features/home/page/Home/Home";
import { config } from "dotenv";
import { TestPage } from "./features/test/pages/TestPage";

function App(): JSX.Element {
  useEffect(() => {
    config();
  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact={true} path="/" component={Home} />
          <Route path="/test" component={TestPage} />
          <Route path="/statistics" component={StatisticsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
