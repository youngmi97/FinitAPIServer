import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import Calendar from "./calendar/calendar";
import Event from "./calendar/event";
import LIST_ITEM_DISCOVER from "./List_item_discover";
import LIST_ITEM_DISCOVER_MINI from "./List_item_discover_mini";
import { AuthContext } from "../context/auth";

const drawerWidth = 256;
const drawerWidth2 = 305;

const TextTypography1 = withStyles({
  root: {
    fontSize: 24,
    color: "#000000",
    marginLeft: 16,
  },
})(Typography);

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    padding: theme.spacing(2),
    justifyContent: "center",
  },
  icon_root: {
    flexGrow: 1,
    maxWidth: 500,
  },
  list: {
    maxWidth: 200,
    backgroundColor: theme.palette.background.paper,
    blockSize: 5,
  },
  grow: {
    flexGrow: 1,
  },
  Buttoncolor: {
    color: theme.palette.primary.main,
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    height: 10,
  },
  appBar2: {
    width: `calc(100%)`,
  },
  toolBar: {
    marginTop: 0,
    marginLeft: 256,
    height: 60,
    width: "100%",
    [theme.breakpoints.down(1024)]: {
      marginLeft: 0,
    },
    backgroundColor: "#fafafa",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawer2: {
    width: drawerWidth2,

    flexShrink: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 1),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
    },
    marginLeft: 0,
    marginRight: 10,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    fontSize: 10,

    height: 20,
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  searchIcon: {
    padding: theme.spacing(2, 0),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  drawerPaper: {
    marginTop: 61,
    width: 256,
    [theme.breakpoints.down(1024)]: {
      width: 0,
    },
    backgroundColor: "white",
  },
  mainbreak: {
    marginLeft: 400,
    [theme.breakpoints.down(1024)]: {
      marginLeft: 0,
    },
    [theme.breakpoints.down(608)]: {
      marginRight: 0,
    },
  },
  drawerPaper2: {
    marginTop: 61,
    width: 305,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  overlay: {
    position: "absolute",
    bottom: "10px",
    right: "20px",
  },
  overlay1: {
    position: "absolute",
    bottom: "70px",
    right: "10px",
  },
  drawerContainer: {
    overflow: "auto",
  },
  paperContainer: {
    height: 260,
    width: 1440,
  },
  ListItemSize: {
    padding: 0,
    "& span, & svg": {
      fontSize: "1rem",
    },
  },
  ListItemSize2: {
    height: 40,
    width: 40,
    backgroundColor: theme.palette.common.white,
    color: "grey",
    marginRight: 10,
    padding: 0,
    borderRadius: theme.shape.borderRadius,
    "& span, & svg": {
      fontSize: "20px",
    },
  },
  ListItemSize4: {
    height: 40,
    width: 40,
    backgroundColor: "#7610EB",
    color: "white",
    marginRight: 10,
    padding: 0,
    borderRadius: theme.shape.borderRadius,
    "& span, & svg": {
      fontSize: "20px",
    },
  },
  ListItemSize3: {
    padding: 0,
    fontSize: "0.5rem",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: 0,
    backgroundColor: "#fafafa",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 305,
  },
  divider: {
    width: "82%",
    height: "1px",
    backgroundColor: "#e5e5e5",
    marginLeft: "272px",
  },

  dividerReduced: {
    width: "100%",
    height: "1px",
    backgroundColor: "#e5e5e5",
  },
}));

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      console.log("window width", window.innerWidth);
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

export default function Main(props) {
  const classes = useStyles();
  const [drawer, setDrawer] = React.useState(2);
  const [width] = useWindowSize();
  const isReduced = width <= 1023;
  const [open, setOpen] = React.useState(true);
  const [view, setView] = React.useState(false);
  const [selected, setSelected] = React.useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { user } = useContext(AuthContext);

  const menuTitle = isReduced ? (
    <LIST_ITEM_DISCOVER_MINI index="0" />
  ) : (
    <TextTypography1>Calendar</TextTypography1>
  );

  var empty = false;
  var cards = [];

  console.log("user details", user);
  const { loading, error, data } = useQuery(GET_SUBSCRIPTIONS, {
    variables: { id: user.id },
  });

  if (loading) {
    console.log("loading");
  } else {
    //console.log("User ID", data["user"]["id"]);
    if (data["user"]["services"].length > 0) {
      cards = data["user"]["services"].map(get_data);
      //console.log("card", cards);
    } else {
      empty = true;
    }
  }

  useEffect(() => {}, [empty]);

  function get_data(item) {
    //var a = item["createdAt"].split(/[^0-9]/);

    return {
      name: item["name"],
      planName: item["plan"],
      price:
        item["isoCurrencyCode"] +
        " $" +
        item["amount"] +
        "/" +
        item["period"].slice(0, 2),
      realPrice: parseInt(item["amount"]),
      lastDate: new Date(
        item["lastDate"].split(/[^0-9]/)[0],
        item["lastDate"].split(/[^0-9]/)[1],
        item["lastDate"].split(/[^0-9]/)[2],
        0,
        0,
        0
      ),
      startdate: item["createdAt"],
      period: item["period"],
    };
  }

  cards.sort(function (a, b) {
    if (parseInt(a.lastDate) === parseInt(b.lastDate)) {
      return a.name > b.name ? 1 : -1;
    }
    return parseInt(a.lastDate) > parseInt(b.lastDate) ? 1 : -1;
  });

  const underlineBar = isReduced ? (
    <div className={classes.dividerReduced}></div>
  ) : (
    <div className={classes.divider}></div>
  );

  return (
    <div>
      <Box
        display="flex"
        bgcolor="white"
        borderColor="grey.500"
        className={classes.toolBar}
        alignItems="center"
      >
        {menuTitle}
      </Box>

      {underlineBar}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <LIST_ITEM_DISCOVER drawer={drawer} setDrawer={(a) => setDrawer(a)} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box
          mx="auto"
          display="flex"
          p={1}
          bgcolor="background.paper"
          className={classes.mainbreak}
        >
          <Box p={1}>
            <Calendar
              selected={selected}
              cards={cards}
              setSelected={(a) => setSelected(a)}
            />
          </Box>
          <Box p={1} style={{ marginLeft: 32 }}>
            <Event selected={selected} />
          </Box>
        </Box>
      </main>
      {/* <Drawer
        className={classes.drawer2}
        variant="persistent"
        classes={{
          paper: classes.drawerPaper2,
        }}
        anchor="right"
        open={open}
      >
        <LIST_ITEM_RIGHT />
        <div className={classes.overlay1}>
          <IconButton
            className={classes.Buttoncolor}
            onClick={handleDrawerClose}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </Drawer>
      <div className={classes.overlay}>
        <IconButton onClick={handleDrawerOpen}>
          <ArrowBackIosIcon />
        </IconButton>
      </div> */}
    </div>
  );
}
const GET_SUBSCRIPTIONS = gql`
  query user($id: ID!) {
    user(id: $id) {
      id
      services {
        id
        name
        amount
        isoCurrencyCode
        plan
        lastDate
        period
        createdAt
      }
    }
  }
`;
