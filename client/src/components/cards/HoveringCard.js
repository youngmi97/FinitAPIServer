import React, { Component } from "react";
import styled from "@emotion/styled/macro";

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  borderRadius: 4,
});

const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  borderRadius: 4,
});

const SubTitle = styled.h4({
  fontFamily: [
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  width: "217px",
  height: "217px",
  cursor: "pointer",
  backgroundImage: "url(/static/images/Netflix.svg)",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <Background>
          <DisplayOver>
            <Hover>
              <SubTitle>Netflix</SubTitle>
              <Paragraph>
                USD $12.00/mo
                <br />
                Next payment is in 3 days
              </Paragraph>
              <CTA>View Details</CTA>
            </Hover>
          </DisplayOver>
        </Background>
      </div>
    );
  }
}

export default App;
