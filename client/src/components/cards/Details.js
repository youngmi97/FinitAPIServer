import React from "react";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import HoveringCard from "./HoveringCard";
import Modal from "../pop-ups/modal";
import { ButtonBase, Typography, Avatar, Box, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
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
  overlay1: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  Avatar: {
    margin: "8px",
  },
  List: {
    padding: 0,
    marginTop: 8,
  },
  List1: {
    padding: 0,
    marginTop: 6,
  },
  he: { height: 70 },
  ListItemSize: {
    color: "Black",
    fontWeight: 700,
    fontSize: "24px",
  },
  ListItemSize1: {
    color: "#666666",
    fontSize: "14px",
  },
  ListItemSize2: {
    color: "Black",
    fontWeight: 100,
    fontSize: "14px",
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
  popover: {
    backgroundColor: "#FFFFFF",
    width: 198,
    height: 80,
  },
  poplist: {
    height: 32,
  },
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const today = new Date();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const backgrounds = {
    Aaptiv: "#FFFFFF",
    Adobe: "#E6001F",
    Amazon: "#FF9201",
    AppleMusic: "linear-gradient(0deg, #FA233B 0.39%, #FB5C74 97.84%)",
    AppleTV: "#FFFFFF",
    AudiSelect: "#FFFFFF",
    Avast: "#160e53",

    BarkBox: "#46b0df",
    BirchBox: "#231f20",
    Blinkist: "#FFFFFF",
    Bloomberg: "#FFFFFF",
    BlueApron: "#FFFFFF",

    Codeacademy: "#FFFFFF",
    Coursera: "#FFFFFF",

    DisneyPlus: "#1F2161",
    DollarShaveClub: "#FFFFFF",
    DropBox: "#FFFFFF",

    Economist: "#e3120b",
    Equinox: "#000000",

    Glo: "#FFFFFF",
    GoogleDrive: "#FFFFFF",
    GooglePlayPass: "#FFFFFF",
    Grammarly: "FFFFFF",

    HelloFresh: "#91c11e",
    Hulu: "#000000",

    iCloud: "#FFFFFF",
    Ipsy: "#f5978d",

    JetBrains: "#FFFFFF",

    LeetCode: "#FFFFFF",
    LinkedIn: "#0077B4",

    Todist: "#E44332",
    Twitch: "#9147FF",

    Medium: "#FFFFFF",
    Miro: "#ffd02f",

    Netflix: "#000000",
    Notion: "#FFFFFF",

    Office365: "#FFFFFF",
    OnePassword: "#FFFFFF",

    Peloton: "#000000",
    PillPack: "#FFFFFF",
    Play: "#FFFFFF",
    Protopie: "#FFFFFF",

    Skillshare: "#FFFFFF",
    Spotify: "#000000",
    StitchFix: "#FFFFFF",
    SurfAir: "#11253C",
    Swit: "#ff595d",

    Xbox: "#107C10",

    Youtube: "#FF0000",

    ZipCar: "#FFFFFF",
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function get_date(today, day) {
    return parseInt((day - today) / 86400000);
  }

  function get_background(name) {
    const color = backgrounds[name];
    console.log("background color", color);
    return color;
  }

  const date = get_date(
    today,
    new Date(
      props.lastdate.split(/[^0-9]/)[0],
      props.lastdate.split(/[^0-9]/)[1],
      props.lastdate.split(/[^0-9]/)[2],
      0,
      0,
      0
    )
  );
  const day = new Date(
    props.lastdate.split(/[^0-9]/)[0],
    props.lastdate.split(/[^0-9]/)[1],
    props.lastdate.split(/[^0-9]/)[2],
    0,
    0,
    0
  );

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
      <ButtonBase onClick={handleClickOpen}>
        <HoveringCard
          name={props.name}
          price={props.price}
          plan={props.plan}
          date={date}
          background={get_background(props.name)}
        />
      </ButtonBase>
      <Modal
        handleClose={handleClose}
        handleClickOpen={handleClickOpen}
        open={open}
        fullScreen={fullScreen}
        name={props.name}
        plan={props.plan}
        period={props.period}
        price={props.price}
        date={date}
        day={day}
      />
    </div>
  );
}
