import React from "react";
import styled from "@emotion/styled/macro";

const Card = styled.div({
  width: "590px",
  height: "454px",
  position: "relative",
  backgroundColor: "#FFFFFF",
  borderRadius: 4,
});

const Content = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  padding: "32px 32px 32px 32px",
  boxSizing: "border-box",
});

const Title = styled.h4({
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
  color: "black",
});

const SubTitle = styled.h4({});

export default function SubscriptionDetail() {
  return (
    <div className="SubscriptionDetail">
      <Card>
        <Content>
          <Title>Notion</Title>
          <SubTitle>Team plan, monthly payment. 8 members</SubTitle>
        </Content>
      </Card>
    </div>
  );
}
