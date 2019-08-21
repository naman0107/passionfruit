import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import Slide from "react-reveal/Slide";
import PfPhone3 from "./images/pf-phones-3.png";
export default class about extends Component {
  render() {
    return (
      <Grid className="why-passionfruit parallax">
        <Cell className="last-block" col={6}>
          <Slide left>
            <h2>Soon</h2>
            <span>You will be able to meet</span>
            <h3>People who share your passions</h3>
          </Slide>
          <div class="divider-inner" />

          <Slide bottom>
            <p>
              Passionfruit is being built for iOS and Android. We’ve worked hard
              and passionately to bring you this app, and we know you’ll love
              connecting with others to make real lasting connections.
            </p>
            <p>
              <span>Looks can be deceiving. Look where you can’t see.</span>
            </p>
          </Slide>
        </Cell>
        <Cell className="last-block" col={6}>
          <Slide bottom>
            <img alt="Pf-Phone3" src={PfPhone3} />
          </Slide>
        </Cell>
      </Grid>
    );
  }
}
