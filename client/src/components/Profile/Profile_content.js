import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import {
  List,
  ListItem,
  Typography,
  Button,
  Avatar,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "512px",
    height: "97px",
  },

  List: {
    border: "1px solid #C8C7CC",
    padding: 32,
    maxWidth: 512,
    maxHeight: 369,
    backgroundColor: "white",
    borderRadius: 8,
    marginTop: 0,
  },
  he: { height: 70 },
  ListItemSize: {
    color: "Black",
    fontWeight: 400,
    fontSize: "17px",
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  console.log(props.card);
  return (
    <div>
      <div className={classes.root}>
        <Typography
          style={{ fontSize: 17, fontWeight: 600, marginBottom: 18.5 }}
        >
          Account Info
        </Typography>
        <List className={classes.List}>
          <Typography style={{ fontSize: 14, fontWeight: 400 }}>
            PROFILE
          </Typography>
          <ListItem
            divider
            style={{ margin: 0, padding: 0, marginTop: 32, height: 65 }}
          >
            <Box
              display="flex"
              alignItems="center"
              p={1}
              style={{ margin: 0, padding: 0 }}
            >
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography className={classes.ListItemSize}>Image</Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>name</Typography>
                <Typography style={{ fontSize: 14, color: "#666666" }}>
                  memeber, date
                </Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem divider style={{ margin: 0, padding: 0, height: 65 }}>
            <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  BirthDay
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>value</Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem divider style={{ margin: 0, padding: 0, height: 65 }}>
            <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Gender
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>value</Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem style={{ margin: 0, padding: 0, height: 65 }}>
            <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Identification
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>Button</Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
        <List className={classes.List} style={{ marginTop: 16 }}>
          <Typography style={{ fontSize: 14, fontWeight: 400 }}>
            ACCOUNT OPTIONS
          </Typography>
          <ListItem divider style={{ margin: 0, padding: 0, height: 65 }}>
            <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Language
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>English</Typography>
              </Box>
            </Box>
          </ListItem>
          <ListItem style={{ margin: 0, padding: 0, height: 65 }}>
            <Box display="flex" p={1} style={{ margin: 0, padding: 0 }}>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Currency
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>USD</Typography>
              </Box>
            </Box>
          </ListItem>
        </List>
        <List className={classes.List} style={{ marginTop: 16 }}>
          <Typography style={{ fontSize: 14, fontWeight: 400 }}>
            CONTACT INFO
          </Typography>
          <ListItem
            divider
            style={{
              margin: 0,
              padding: 0,
              height: 65,
            }}
          >
            <Box
              display="flex"
              alignItems="center"
              p={1}
              style={{ margin: 0, padding: 0 }}
            >
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Email
                </Typography>
              </Box>
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 17 }}>email</Typography>
                <Typography style={{ fontSize: 14, color: "#666666" }}>
                  Confirmed
                </Typography>
              </Box>
              <Box p={1}>
                <Button
                  style={{
                    color: "#7610EB",
                    fontSize: 17,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Change
                </Button>
              </Box>
            </Box>
          </ListItem>
          <ListItem style={{ margin: 0, padding: 0, height: 65 }}>
            <Box
              display="flex"
              alignItems="center"
              p={1}
              style={{ margin: 0, padding: 0 }}
            >
              <Box p={1} style={{ width: 150, margin: 0, padding: 0 }}>
                <Typography style={{ fontSize: 14, fontWeight: 600 }}>
                  Phone
                </Typography>
              </Box>

              <Box
                p={1}
                flexGrow={1}
                style={{ width: 150, margin: 0, padding: 0 }}
              >
                <Typography style={{ fontSize: 17 }}>Phone</Typography>
                <Typography style={{ fontSize: 14, color: "#666666" }}>
                  Unconfirmed
                </Typography>
              </Box>
              <Box p={1}>
                <Button
                  style={{
                    color: "#7610EB",
                    fontSize: 17,
                    fontWeight: 600,
                    textTransform: "none",
                  }}
                >
                  Confirm
                </Button>
              </Box>
            </Box>
          </ListItem>
        </List>
      </div>
    </div>
  );
}
