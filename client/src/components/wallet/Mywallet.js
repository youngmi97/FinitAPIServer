import { Box } from "@material-ui/core";
// import Avatar from "@material-ui/core/Avatar";
// import Backdrop from "@material-ui/core/Backdrop";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
// import Grid from "@material-ui/core/Grid";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
// import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#7610EB",

    minHeight: 202,
    maxHeight: 202,
    borderRadius: "10px",
  },
  title: {
    fontSize: 14,
    fontWeight: 500,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 186,
  },
  overlay: {
    position: "absolute",
    top: "0%",
    left: "75%",
    color: "white",
  },
  ListItemSize: {
    color: "white",
    borderColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
  },
  ListItemSize2: {
    color: "white",
    borderColor: "white",
    fontSize: "17px",
  },
  ListItemSize3: {
    color: "white",
    borderColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    height: "40px",
    textTransform: "none",
    marginLeft: "5px",
  },
  ListItemSize4: {
    color: "white",
    fontSize: "24px",
  },
  ListItemSize5: {
    color: "#7610EB",
    borderColor: "white",
    backgroundColor: "white",
    fontSize: "14px",
    fontWeight: 400,
    alignItems: "center",
    borderRadius: 5,
    textTransform: "none",
    height: "40px",
    marginRight: "5px",
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
}));

export default function Card_internal() {
  const classes = useStyles();
  // const [open, setOpen] = React.useState(false);
  // const handleClose = () => {
  //   setOpen(false);
  // };
  // const handleToggle = () => {
  //   setOpen(!open);
  // };
  return (
    <Card className={classes.root}>
      {/* <CardHeader></CardHeader> */}
      <CardContent>
        <Box display="flex" margin="16px">
          <Box flexGrow={1} className={classes.ListItemSize}>
            MY WALLET
          </Box>
          <Box className={classes.ListItemSize}>Balance</Box>
        </Box>
        <Box
          display="flex"
          marginLeft="16px"
          marginRight="16px"
          marginTop="0px"
        >
          <Box flexGrow={1} className={classes.ListItemSize2}>
            Surplus Wallet
          </Box>
          <Box className={classes.ListItemSize4}>$69.00</Box>
        </Box>
        <Box display="flex" marginLeft="16px" marginTop="4px">
          <Box flexGrow={1} className={classes.ListItemSize}>
            98EA45HEGAJFH0A
          </Box>
        </Box>
        <Box display="flex" margin="16px">
          <Box className={classes.ListItemSize2}>
            <Button
              className={classes.ListItemSize5}
              variant="outlined"
              marine="5px"
            >
              Manage Wallet
            </Button>
            <Button
              className={classes.ListItemSize3}
              variant="outlined"
              marine="5px"
            >
              Empty Wallet
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
