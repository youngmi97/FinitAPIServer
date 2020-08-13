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
  backgroundColor: "#FFFFFF",
  borderRadius: 4,
  cursor: "default",
});

const TitleBg = styled.div({
  position: "absolute",
  backgroundColor: "#000000",
  width: 590,
  heigh: 166,
  left: `calc(50% - 590px/2)`,
  top: 0,
  borderRadius: "4px 4px 0px 0px",
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
          <SubTitle>Standard Plan, monthly payment • 8 members</SubTitle>
        </Content>
      </Card>
    </div>
  );
}
