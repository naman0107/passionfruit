import React from "react";
import "./App.css";
import "./font/index.css";
import {
  Layout,
  Header,
  Navigation,
  Content,
  Drawer,
  Grid,
  Cell
} from "react-mdl";
import { Link } from "react-router-dom";
import { StickyContainer, Sticky } from "react-sticky";
import Main from "./components/main";
import Facebook from "./components/images/facebook.svg";
import Instagram from "./components/images/instagram.svg";
import Twitter from "./components/images/twitter.svg";
import Logo from "./components/images/favicon-2.png";

function App() {
  return (
    <div>
      <Layout className="top-nav">
        <StickyContainer>
          <Sticky>
            {({ style }) => (
              <Header
                scroll
                transparent
                style={{ height: "64px", color: "#A2253D" }}
              >
                <Navigation className="nav-links">
                  <Link to="/">Home</Link>
                  <Link to="/team">Team</Link>
                  <Link to="/about">About</Link>
                  <Link to="/news">News</Link>
                  <Link to="/legal">Legal</Link>
                  <Link to="/contact">Contact Us</Link>
                </Navigation>
              </Header>
            )}
          </Sticky>
        </StickyContainer>
        <Drawer title="Passion Fruit">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/team">Team</Link>
            <Link to="/about">About</Link>
            <Link to="/news">News</Link>
            <Link to="/legal">Legal</Link>
            <Link to="/contact">Contact Us</Link>
          </Navigation>
        </Drawer>
        <Content style={{ overflow: "initial" }}>
          <Main />
        </Content>
        <div
          className="footer"
          style={{
            width: "100%",
            margin: "auto",
            backgroundColor: "#4B1142"
          }}
        >
          <Grid
            style={{
              width: "80%",
              margin: "auto",
              marginTop: "3%",
              marginBottom: "4%"
            }}
          >
            <Cell className="social-block" col={3}>
              <div className="social-icons-footer">
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

              <span>
                <a href="/">Terms of Service </a> | &nbsp;&nbsp;
                <a href="/">Privacy Policy</a>
              </span>
            </Cell>
            <Cell style={{ textAlign: "center" }} col="6">
              <img alt="logo" src={Logo} />
            </Cell>
            <Cell col="3">
              <button
                onclick="location.href = 'https://www.passionfruit.me/join-our-mailing-list/';"
                id="myButton"
                className="button"
                style={{ backgroundColor: "#ba55d3", color: "#fff" }}
              >
                Signup for our newsletter
              </button>
            </Cell>
          </Grid>
        </div>
      </Layout>
    </div>
  );
}

export default App;
