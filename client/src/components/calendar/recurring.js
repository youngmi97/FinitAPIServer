import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import { ButtonBase, Typography, Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "448px",
    borderRadius: "12px",
    padding: 10,
  },
  root_today: {
    backgroundColor: "rgba(158, 88, 238, 0.1)",
    width: "448px",
    borderRadius: "12px",
    padding: 10,
  },
  root_focus: {
    backgroundColor: "rgba(44, 44, 44, 0.06)",
    width: "448px",
    borderRadius: "12px",
    padding: 10,
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "28px",
    height: "28px",
  },
  List: {
    padding: 0,
    marginTop: 8,
  },
  List1: {
    padding: 0,
    margin: 0,
    marginTop: 6,
  },
  he: { height: 70 },
  ListItemSize: {
    color: "Black",
    fontWeight: 400,
    fontSize: "17px",
  },
  ListItemSize1: {
    color: "#666666",
    fontSize: "15px",
  },
  ListItemSize2: {
    color: "#666666",

    fontSize: "11px",
    margin: 0,
  },
  ListItemSize3: {
    color: "Black",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "69px",
  },
  ListItemSize4: {
    color: "Black",
    fontWeight: 600,
    fontSize: "14px",
    marginTop: "24px",
  },
  rect: {
    width: theme.spacing(6),
    height: theme.spacing(4),
    marginRight: 8,
    marginBottom: 8,
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {(() => {
        if (parseInt(props.card[0].date) == "0") {
          return (
            <div className={classes.root_today}>
              <Typography className={classes.ListItemSize2}>
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <Box
                    display="flex"
                    alignItems="center"
                    p={1}
                    className={classes.List1}
                  >
                    <Box p={1} style={{ paddingLeft: 0 }}>
                      <Avatar
                        variant="square"
                        style={{ width: 48, height: 48, margin: 0, padding: 0 }}
                        src={"static/avatar/" + value.name + "[48].svg"}
                      />
                    </Box>
                    <Box p={1} flexGrow={1}>
                      <Typography className={classes.ListItemSize}>
                        {value.name}
                      </Typography>
                      <Typography className={classes.ListItemSize1}>
                        {value.card}
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <div
                        style={{
                          borderRadius: 12,
                          width: 68,
                          height: 20,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 17,
                          fontWeight: 400,
                        }}
                      >
                        - ${value.price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </div>
          );
        } else if (props.day == props.card[0].day.split(" ")[1]) {
          return (
            <div className={classes.root_focus}>
              <Typography className={classes.ListItemSize2}>
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <Box
                    display="flex"
                    alignItems="center"
                    p={1}
                    className={classes.List1}
                  >
                    <Box p={1} style={{ paddingLeft: 0 }}>
                      <Avatar
                        variant="square"
                        style={{ width: 48, height: 48, margin: 0, padding: 0 }}
                        src={"static/avatar/" + value.name + "[48].svg"}
                      />
                    </Box>
                    <Box p={1} flexGrow={1}>
                      <Typography className={classes.ListItemSize}>
                        {value.name}
                      </Typography>
                      <Typography className={classes.ListItemSize1}>
                        {value.card}
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <div
                        style={{
                          borderRadius: 12,
                          width: 68,
                          height: 20,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 17,
                          fontWeight: 400,
                        }}
                      >
                        - ${value.price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </div>
          );
        } else if (parseInt(props.card[0].date) < 0) {
          return (
            <div className={classes.root}>
              <Typography
                className={classes.ListItemSize2}
                style={{ opacity: 0.5 }}
              >
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <Box
                    display="flex"
                    alignItems="center"
                    p={1}
                    className={classes.List1}
                    style={{ opacity: 0.5 }}
                  >
                    <Box p={1} style={{ paddingLeft: 0 }}>
                      <Avatar
                        variant="square"
                        style={{ width: 48, height: 48, margin: 0, padding: 0 }}
                        src={"static/avatar/" + value.name + "[48].svg"}
                      />
                    </Box>
                    <Box p={1} flexGrow={1}>
                      <Typography className={classes.ListItemSize}>
                        {value.name}
                      </Typography>
                      <Typography className={classes.ListItemSize1}>
                        {value.card}
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <div
                        style={{
                          borderRadius: 12,
                          width: 41,
                          height: 24,
                          backgroundColor: "rgba(102, 102, 102, 0.1)",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          marginLeft: 26,
                          alignItems: "center",
                          color: "#666666",
                          fontSize: 13,
                          fontWeight: 600,
                        }}
                      >
                        Paid
                      </div>
                      <div
                        style={{
                          borderRadius: 12,
                          width: 68,
                          height: 20,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 17,
                          fontWeight: 400,
                        }}
                      >
                        - ${value.price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </div>
          );
        } else {
          return (
            <div className={classes.root}>
              <Typography className={classes.ListItemSize2}>
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <Box
                    display="flex"
                    alignItems="center"
                    p={1}
                    className={classes.List1}
                  >
                    <Box p={1} style={{ paddingLeft: 0 }}>
                      <Avatar
                        variant="square"
                        style={{ width: 48, height: 48, margin: 0, padding: 0 }}
                        src={"static/avatar/" + value.name + "[48].svg"}
                      />
                    </Box>
                    <Box p={1} flexGrow={1}>
                      <Typography className={classes.ListItemSize}>
                        {value.name}
                      </Typography>
                      <Typography className={classes.ListItemSize1}>
                        {value.card}
                      </Typography>
                    </Box>
                    <Box p={1}>
                      <div
                        style={{
                          borderRadius: 12,
                          width: 68,
                          height: 20,
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          fontSize: 17,
                          fontWeight: 400,
                        }}
                      >
                        - ${value.price}
                      </div>
                    </Box>
                  </Box>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}
