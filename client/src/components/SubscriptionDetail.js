import React from "react";
import styled from "@emotion/styled/macro";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  avatar: {
    borderRadius: 12,
    width: 48,
    height: 48,
  },
}));

const Card = styled.div({
  width: "590px",
  height: "454px",
  position: "relative",
  backgroundColor: "white",
  borderRadius: 4,
  cursor: "default",
});

const Badge = styled.div({
  position: "absolute",
  width: 28,
  height: 28,
  left: `calc(50% - 28px/2 + 265px)`,
  top: `calc(50% - 28px/2 - 197px)`,
  backgroundImage: "url(/static/images/badges/GroupBadge.svg)",
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

const Title = styled.h3({
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
  fontStyle: "normal",
  fontWeight: 600,
  fontSize: 24,
  // lineHeight: 29,
});

const SubTitle = styled.p({
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

export default function SubscriptionDetail() {
  const classes = useStyles();

  return (
    <div className="SubscriptionDetail">
      <Card>
        <Badge />
        <Content>
          <Avatar
            className={classes.avatar}
            alt="N"
            src="/static/images/avatars/Netflix.svg"
          />
          <Title>Netflix</Title>
          <SubTitle>
            Standard Plan, monthly payment • 8 members
            <br />
            Next payment is in 3 days
          </SubTitle>
        </Content>
      </Card>
    </div>
  );
}
