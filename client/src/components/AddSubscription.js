import React from "react";
import styled from "@emotion/styled/macro";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  ListItemSize2: {
    fontSize: "14px",
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

const currencies = [
  {
    value: "USD",
    label: "Plan Type",
  },
  {
    value: "EUR",
    label: "Plan Type",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

export default function SubscriptionDetail() {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("USD");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };
  return (
    <div>
      <Card>
        <Content>
          <Box display="flex" justifyContent="center" flexDirection="column">
            <Box p={1}>
              <TextField
                height="54px"
                fullWidth
                label="Your Subscription"
                defaultValue=""
                variant="outlined"
              />
            </Box>
            <Box p={1}>
              <TextField
                height="54px"
                fullWidth
                value={currency}
                select
                variant="outlined"
                onChange={handleChange}
                SelectProps={{
                  native: true,
                }}
              >
                {currencies.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Box>
            <Box p={1}>
              <TextField
                height="54px"
                fullWidth
                label="Date of Subscriptions"
                defaultValue=""
                variant="outlined"
              />
            </Box>
          </Box>
        </Content>
      </Card>
    </div>
  );
}
