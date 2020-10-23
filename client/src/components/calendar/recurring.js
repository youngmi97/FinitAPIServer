import React from "react";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Popover from "@material-ui/core/Popover";
import Modal from "../pop-ups/modal";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { ButtonBase, Button, Typography, Avatar, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "448px",
    borderRadius: "12px",
    padding: 10,
  },
  root1: {
    width: "590px",
    height: "420px",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "40px",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  popover: {
    backgroundColor: "#FFFFFF",
    width: 198,
    height: 80,
  },
  poplist: {
    height: 32,
  },
  ListItemSize5: {
    color: "Black",
    fontWeight: 100,
    fontSize: "14px",
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
    padding: 2,
    margin: 0,
    marginTop: 6,
  },
  overlay1: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  List2: {
    padding: 2,
    margin: 0,
    marginTop: 6,
    borderRadius: 6,
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
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
    padding: 2,
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
  const today = new Date();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function get_date(today, day) {
    return parseInt((day - today) / 86400000);
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div>
      {(() => {
        if (parseInt(props.card[0].date) == 0) {
          return (
            <div className={classes.root_today}>
              <Typography className={classes.ListItemSize2}>
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <div>
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      className={classes.List2}
                      onClick={handleClickOpen}
                    >
                      <Box p={1} style={{ paddingLeft: 0 }}>
                        <Avatar
                          variant="square"
                          style={{
                            width: 48,
                            height: 48,
                            margin: 0,
                            padding: 0,
                          }}
                          src={"static/avatar/" + value.name + "/[48].svg"}
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
                    <Modal
                      handleClose={handleClose}
                      open={open}
                      fullScreen={fullScreen}
                      name={value.name}
                      plan={value.plan}
                      period={value.period}
                      price={"US $" + value.price + "/mo"}
                      date={get_date(
                        today,
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      )}
                      day={
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          );
        } else if (props.day == props.card[0].realday.toString()) {
          return (
            <div className={classes.root_focus}>
              <Typography className={classes.ListItemSize2}>
                {props.card[0].day}
              </Typography>
              {props.card.map((value, index) => {
                return (
                  <div>
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      className={classes.List2}
                      onClick={handleClickOpen}
                    >
                      <Box p={1} style={{ paddingLeft: 0 }}>
                        <Avatar
                          variant="square"
                          style={{
                            width: 48,
                            height: 48,
                            margin: 0,
                            padding: 0,
                          }}
                          src={"static/avatar/" + value.name + "/[48].svg"}
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
                    <Modal
                      handleClose={handleClose}
                      open={open}
                      fullScreen={fullScreen}
                      name={value.name}
                      plan={value.plan}
                      period={value.period}
                      price={"US $" + value.price + "/mo"}
                      date={get_date(
                        today,
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      )}
                      day={
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      }
                    />
                  </div>
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
                  <div>
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      className={classes.List2}
                      style={{ opacity: 0.5 }}
                      onClick={handleClickOpen}
                    >
                      <Box p={1} style={{ paddingLeft: 0 }}>
                        <Avatar
                          variant="square"
                          style={{
                            width: 48,
                            height: 48,
                            margin: 0,
                            padding: 0,
                          }}
                          src={"static/avatar/" + value.name + "/[48].svg"}
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
                    <Modal
                      handleClose={handleClose}
                      open={open}
                      fullScreen={fullScreen}
                      name={value.name}
                      plan={value.plan}
                      period={value.period}
                      price={"US $" + value.price + "/mo"}
                      date={get_date(
                        today,
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      )}
                      day={
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      }
                    />
                  </div>
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
                  <div>
                    <Box
                      display="flex"
                      alignItems="center"
                      p={1}
                      className={classes.List2}
                      onClick={handleClickOpen}
                    >
                      <Box p={1} style={{ paddingLeft: 0 }}>
                        <Avatar
                          variant="square"
                          style={{
                            width: 48,
                            height: 48,
                            margin: 0,
                            padding: 0,
                          }}
                          src={"static/avatar/" + value.name + "/[48].svg"}
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
                    <Modal
                      handleClose={handleClose}
                      handleClickOpen={handleClickOpen}
                      open={open}
                      fullScreen={fullScreen}
                      name={value.name}
                      plan={value.plan}
                      period={value.period}
                      price={"US $" + value.price + "/mo"}
                      date={get_date(
                        today,
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      )}
                      day={
                        new Date(
                          value.lastDate1.split(/[^0-9]/)[0],
                          value.lastDate1.split(/[^0-9]/)[1],
                          value.lastDate1.split(/[^0-9]/)[2],
                          0,
                          0,
                          0
                        )
                      }
                    />
                  </div>
                );
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}
