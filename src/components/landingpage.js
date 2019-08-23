import React, { Component } from "react";
import { Cell, Grid } from "react-mdl";
import YouTube from "react-youtube";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import { Helmet } from "react-helmet";
import IphoneImg from "./images/passionfruit-iphone-1.png";
import AppleStore from "./images/applecomingsoongray-1.png";
import AndroidStore from "./images/androidcomingsoongray.png";
import Facebook from "./images/facebook.svg";
import Instagram from "./images/instagram.svg";
import Twitter from "./images/twitter.svg";
import Web from "./images/www.png";
import Seperator from "./images/line_2-peach.png";
import Hipster from "./images/pf-hipster1.jpg";
import Shape from "./images/shapes_bg_1.jpg";
import MusicIcon from "./images/music-icon.png";
import ThumbsupIcon from "./images/thumbsup-icon.png";
import ChatIcon from "./images/chat-icon.png";
import HeartIcon from "./images/heart-icon.png";
import NoProfileIcon from "./images/no-profile-2.png";
import PfPhone from "./images/pf-goliphone_1.png";
import PfPhone3 from "./images/pf-phones-3.png";
export default class landingpage extends Component {
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
      <div
        style={{
          width: "100%",
          margin: "auto",
          backgroundColor: "#FCF7F4"
        }}
      >
        <Helmet>
          <title>Passionfruit &#8211; Helping People Really Connect</title>
        </Helmet>
        <Zoom>
          <div
            style={{
              width: "80%",
              margin: "auto",
              backgroundColor: "#FCF7F4"
            }}
          >
            <Grid className="demo-grid-ruler">
              <Cell col={4}>
                <img
                  style={{ width: "100%", float: "right" }}
                  alt="passionfruit-iphone-1"
                  src={IphoneImg}
                />
              </Cell>

              <Cell col={8}>
                <div>
                  <h2 className="fancy-title-1">Real Connections through</h2>
                  <span className="fancy-title-2">Your Passions</span>
                </div>
                <div className="mk-text-block">
                  <p>
                    Passionfruit is a social app which connects people through
                    shared interests and passions.{" "}
                    <a href="https://passionfruit.me/join-our-mailing-list/">
                      <span
                        style={{
                          fontSize: "20px",
                          color: "#a3228a",
                          fontWeight: 300,
                          letterSpacing: "0px",
                          lineHeight: "36px",
                          textDecoration: "none"
                        }}
                      >
                        <strong>Click here</strong>
                      </span>
                    </a>{" "}
                    to join our mailing list and stay informed on important
                    updates and announcements.
                  </p>
                </div>
                <div className="coming-soon">
                  <span>Coming September 2019</span>
                </div>
                <div className="mobile-apps">
                  <a href="/">
                    <img alt="apple-store" src={AppleStore} />
                  </a>
                  <a href="/">
                    <img alt="android-store" src={AndroidStore} />
                  </a>
                </div>

                <Cell col={12}>
                  <div className="social-icons">
                    <a href="/">
                      <img alt="facebook" src={Facebook} />
                    </a>
                    <a href="/">
                      <img alt="instagram" src={Instagram} />
                    </a>
                    <a href="/">
                      <img alt="twitter" src={Twitter} />
                    </a>
                  </div>
                </Cell>
              </Cell>
            </Grid>
          </div>
        </Zoom>

        <div
          className="block-2"
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#96244C",
            backgroundImage: `url(${Web})`,
            backgroundPosition: "bottom",
            backgroundPositionX: "inherit"
          }}
        >
          <Grid className="your-passion">
            <Slide bottom>
              <Cell className="video-block" col={8}>
                <h2 className="fancy-title-3">
                  What’s your <b>passion?</b>
                </h2>
                <span
                  style={{ width: "100%", float: "left", textAlign: "center" }}
                >
                  <img alt="seperator" src={Seperator} />
                </span>

                <p>
                  Find the right people by drowning out the noise and keeping
                  only the essential ingredients for making a genuine
                  connection. Meet someone special with the help of
                  Passionfruit.
                </p>
              </Cell>
            </Slide>

            <Cell style={{ textAlign: "center", margin: "auto" }} col="6">
              <Zoom>
                <YouTube
                  videoId="NUFPZgVC8IQ"
                  opts={opts}
                  onReady={this._onReady}
                />
              </Zoom>
            </Cell>
          </Grid>
        </div>

        <div
          className="block-3 "
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#96244C",
            backgroundImage: `url(${Shape})`,
            backgroundAttachment: "scroll",
            willChange: "transform",
            Height: "792px",
            backgroundPosition: "top"
          }}
        >
          <Grid className="why-passionfruit parallax">
            <Cell className="video-block" col={12}>
              <h2 className="fancy-title-4">
                Why <b>Passionfruit?</b>
              </h2>
              <span
                style={{ width: "100%", float: "left", textAlign: "center" }}
              >
                <img alt="seperator" src={Seperator} />
              </span>
            </Cell>

            <Cell col={4}>
              <Slide left>
                <Cell className="text-block" col="12">
                  <div>
                    <h2 className="title-heading">
                      Common <b>Interests</b>
                    </h2>
                    <span>
                      Ever feel like meeting new people has become too
                      complicated? Passionfruit connects two minds using only
                      one thing.
                    </span>
                  </div>
                  <p>
                    <img alt="Music-Icon" src={MusicIcon} />
                  </p>
                </Cell>
              </Slide>

              <Slide left>
                <Cell className="text-block" col="12">
                  <div>
                    <h2 className="title-heading">
                      <b>Easy</b> To Use
                    </h2>
                    <span>
                      Wondering what others are passionate about? Search
                      whatever’s on your mind. If it matches someone’s passion,
                      you’ve got a natural icebreaker to use.
                    </span>
                  </div>
                  <p>
                    <img alt="Thumbsup-Icon" src={ThumbsupIcon} />
                  </p>
                </Cell>
              </Slide>

              <Slide left>
                <Cell className="text-block" col="12">
                  <div>
                    <h2 className="title-heading">
                      <b>Real</b> Connections
                    </h2>
                    <span>
                      Online communities are full of lively, invested
                      discussion. We’re inspired to extend such energy by
                      nudging people to better engage with those around them.
                      Eventually meet face to face and let the chemistry take it
                      from there.
                    </span>
                  </div>
                  <p>
                    <img alt="Chat-Icon" src={ChatIcon} />
                  </p>
                </Cell>
              </Slide>
            </Cell>
            <Cell col={4}>
              <img alt="Pf-Phone" src={PfPhone} />
            </Cell>

            <Cell col={4}>
              <Slide right>
                <Cell className="text-block" col="12">
                  <p>
                    <img alt="Heart-Icon" src={HeartIcon} />
                  </p>
                  <div className="title-heading-right">
                    <h2 className="title-heading">
                      <b>One</b> Thing
                    </h2>
                    <span>
                      Tell us your passion. An idea, a hobby, a song? Your
                      choice.
                    </span>
                  </div>
                </Cell>
              </Slide>

              <Slide right>
                <Cell className="text-block" col="12">
                  <p>
                    <img alt="No-Profile-Icon" src={NoProfileIcon} />
                  </p>
                  <div className="title-heading-right">
                    <h2 className="title-heading">
                      No Profile <b>Pictures</b>
                    </h2>
                    <span>
                      Let personality make an impression before appearance. Lead
                      with conversation, and discover those you meet to be as
                      attractive as the communication.
                    </span>
                  </div>
                </Cell>
              </Slide>
            </Cell>
          </Grid>
        </div>

        <div
          className=" parallax2"
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#96244C",
            backgroundImage: `url(${Hipster})`,
            backgroundAttachment: "scroll",
            willChange: "transform",
            Height: "792px",
            backgroundPosition: "top"
          }}
        >
          <Grid className="parallax2">
            <Cell className="belong" col={12}>
              <Zoom>
                <span>
                  It can be difficult figuring out where we belong, especially
                  in the complicated and constantly changing modern world. Who
                  can make us feel a sense of belonging? Someone who sees things
                  the way we do.
                </span>
              </Zoom>
            </Cell>
          </Grid>
        </div>

        <div
          className="block-3 "
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#96244C",
            backgroundImage: `url(${Shape})`,
            backgroundAttachment: "scroll",
            willChange: "transform",
            Height: "792px",
            backgroundPosition: "top"
          }}
        >
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
                  Passionfruit is being built for iOS and Android. We’ve worked
                  hard and passionately to bring you this app, and we know
                  you’ll love connecting with others to make real lasting
                  connections.
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
        </div>
      </div>
    );
  }
}
