import React, { Component } from "react";
import { Cell, Grid, Chip, ChipContact } from "react-mdl";
import YouTube from "react-youtube";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import PassionFruit from "./images/favicon-1.png";
import LinkedIn from "./images/linkedin.png";
export default class about extends Component {
  render() {
    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div style={{ width: "100%", backgroundColor: "#FFF" }}>
        <Grid className="about-us">
          <Helmet>
            <title>About Passionfruit</title>
          </Helmet>
          <Cell className="intro-block" style={{ margin: "auto" }} col={6}>
            <Slide top>
              <h2>
                About Passionfruit{" "}
                <img alt="passion-fruit" src={PassionFruit} />
              </h2>
            </Slide>
            <Zoom>
              <YouTube
                videoId="CB21vsQ8ZEA"
                opts={opts}
                onReady={this._onReady}
              />
            </Zoom>
          </Cell>
          <Cell className="about-info" style={{ margin: "auto" }} col={8}>
            <span>
              <Chip>
                <ChipContact
                  style={{
                    backgroundImage: `url(${LinkedIn})`,
                    backgroundSize: "contain"
                  }}
                  className="mdl-color--teal mdl-color-text--white"
                />
                <a
                  style={{ color: "#161de2" }}
                  target="_blank"
                  href="https://www.linkedin.com/in/dengpaul/"
                >
                  Paul Deng
                </a>
              </Chip>
              <h3>Why Passionfruit?</h3>
              <p>
                Passionfruit is the brainchild of creator <i>Paul Deng</i> who
                came up with the concept of his social app while volunteering at
                Toronto Distress Centres, where he realized that there was a
                need for people to make deep, genuine, and long-lasting
                connections. Without such connections, individuals can become
                isolated and may lack an adequate support network. Existing
                products and services often highlight superficial qualities like
                status or looks, which are unreliable when depended upon as
                foundations for long lasting relationships. In response, Paul’s
                vision is to create an app which helps people meet others on the
                same wavelength by using words and closeness. If someone near
                you is thinking about the same topics, the app matches you and
                gives you a platform to chat and break the ice. Discover what
                you’re passionate about, reach out to others with the same
                passions, meet, learn, and grow together through those passions
                and build a strong foundation for relationships.
              </p>
            </span>
          </Cell>
        </Grid>
      </div>
    );
  }
}
