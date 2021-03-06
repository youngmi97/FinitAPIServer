import React, { Component } from "react";
import styled from "@emotion/styled/macro";
import styled1 from "@emotion/styled";

const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  borderRadius: 6,
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
  padding: "20px 20px 20px 20px",
  boxSizing: "border-box",
  borderRadius: 6,
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
  textAlign: "left",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

const Paragraph = styled.p({
  left: "0",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
  textAlign: "left",
});

//url(/static/avatar/${(props) => props.name}[48].svg)

const BackgroundWrap = styled1.div`
  background: ${(props) => props.background};
  width: 217px;
  height: 217px;
  border-radius: 6px;
  position: relative;
  border: 1px solid #C8C7CC;
  z-index: 5;
 `;

const Background = styled1.div`
  background-size: 96px 96px;
  background-repeat: no-repeat;
  position: relative;
  background-color: transparent;
  color:#FFF;
  width: 217px;
  height: 217px;
  cursor: pointer;
  border-radius: 6px;
  background-image: url(/static/avatar/${(props) => props.name}/[48].svg);
  border: 1px solid #C8C7CC;
  background-position: center;
  z-index: 10;

  &:hover {
    ${DisplayOver} {
      background-color: rgba(0,0,0,0.5);
    }
    ${SubTitle} {
      transform: translate3d(0,0,0);
    }
    ${Paragraph} {
      transform: translate3d(0,0,0);
    }
    ${Hover} {  
      opacity: 1;
    }
  }
  `;

const CTA = styled.div({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});

class HoveringCard extends Component {
  render() {
    return (
      <div className="HoveringCard">
        <BackgroundWrap {...this.props}>
          <Background {...this.props}>
            <DisplayOver>
              <Hover>
                <SubTitle>{this.props.name}</SubTitle>
                <Paragraph>
                  {this.props.price}
                  <br />
                  Next payment is in {this.props.date} days
                </Paragraph>
                <CTA>View Details</CTA>
              </Hover>
            </DisplayOver>
          </Background>
        </BackgroundWrap>
      </div>
    );
  }
}

export default HoveringCard;
