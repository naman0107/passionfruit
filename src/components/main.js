import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import About from "./about";
import Team from "./team";
import News from "./news";
import Legal from "./legal";
import Contact from "./contact";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route path="/about" component={About} />
    <Route path="/team" component={Team} />
    <Route path="/news" component={News} />
    <Route path="/legal" component={Legal} />
    <Route path="/contact" component={Contact} />
  </Switch>
);

export default Main;
