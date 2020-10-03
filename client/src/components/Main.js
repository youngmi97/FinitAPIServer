import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { useQuery } from "@apollo/react-hooks";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";

import gql from "graphql-tag";
import ACTIVE_CONTENT from "./Active_content";
import LIST_ITEM_DISCOVER from "./List_item_discover";
import LIST_ITEM_RIGHT from "./List_item_right";
import EmptyContent from "./EmptyContent";
import LIST_VIEWBREAK from "./List_viewbreak";
import SubscriptionToolbar from "./toolbars/Toolbar";
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
    zIndex: 50,
    position: "relative",
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
    marginLeft: 256,
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
  const [width] = useWindowSize();
  const isReduced = width <= 1023;
  const [sortvariable, setsortvariable] = React.useState("Alphabetical");

  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(1);
  const [drawer, setDrawer] = React.useState(0);
  const [view, setView] = React.useState(false);

  const handleState = () => {
    setState(state * -1);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const menuTitle = isReduced ? (
    <LIST_ITEM_DISCOVER_MINI index="1" />
  ) : (
    <TextTypography1>All Subscriptions</TextTypography1>
  );
  var empty = false;
  var cards = [];
  const { loading, error, data } = useQuery(GET_SUBSCRIPTIONS);

  if (loading) {
    console.log("loading");
  } else {
    console.log("card1", data["me"]);
    if (data["me"]["accounts"][0]["transactions"].length > 0) {
      cards = data["me"]["accounts"][0]["transactions"].map(get_data);
      console.log("card", cards);
    } else {
      empty = true;
    }
  }

  useEffect(() => {}, [empty]);
  function get_data(item) {
    return {
      name: item["name"],
      order: 1,
      planName: "Standard",
      price: item["isoCurrencyCode"] + " $" + item["amount"] + "/mo",
      realPrice: parseInt(item["amount"]),
    };
  }

  const underlineBar = isReduced ? (
    <div className={classes.dividerReduced}></div>
  ) : (
    <div className={classes.divider}></div>
  );

  // const cards = [
  //   {
  //     name: "Netflix",
  //     order: 3,
  //     planName: "Standard",
  //     price: "USD 12.00/mo",
  //     realPrice: 12,
  //   },
  //   {
  //     name: "Spotify",
  //     order: 1,
  //     planName: "Basic",
  //     price: "USD $8.00/mo",
  //     realPrice: 8,
  //   },
  //   {
  //     name: "Netflix",
  //     order: 5,
  //     planName: "Premium",
  //     price: "USD $9.00/mo",
  //     realPrice: 9,
  //   },
  //   {
  //     name: "Notability",
  //     order: 2,
  //     planName: "Basic",
  //     price: "USD $8.00/mo",
  //     realPrice: 8,
  //   },
  //   {
  //     name: "GoogleDrive",
  //     order: 7,
  //     planName: "Standard",
  //     price: "USD $12.00/mo",
  //     realPrice: 12,
  //   },
  //   {
  //     name: "Spotify",
  //     order: 4,
  //     planName: "Standard",
  //     price: "USD $10.00/mo",
  //     realPrice: 10,
  //   },
  //   {
  //     name: "Youtube",
  //     order: 6,
  //     planName: "Premium",
  //     price: "USD $11.00/mo",
  //     realPrice: 11,
  //   },
  //   {
  //     name: "Youtube",
  //     order: 8,
  //     planName: "Standard",
  //     price: "USD $12.00/mo",
  //     realPrice: 12,
  //   },
  // ];

  switch (sortvariable) {
    case "Alphabetical":
      cards.sort(function (a, b) {
        if (a.name === b.name) {
          return (a.realPrice - b.realPrice) * state;
        }
        return a.name > b.name ? 1 * state : -1 * state;
      });
      break;
    case "Price":
      cards.sort(function (a, b) {
        if (a.realPrice === b.realPrice) {
          return a.name > b.name ? 1 * state : -1 * state;
        }
        return a.realPrice > b.realPrice ? 1 * state : -1 * state;
      });
      break;
    case "Date Added":
      cards.sort((a, b) => (a.order - b.order) * state);
      break;
    default:
      break;
  }

  return empty ? (
    <div>
      <Box
        display="flex"
        bgcolor="background.paper"
        borderColor="grey.500"
        //boxShadow="0px 0.5px 0px rgba(0, 0, 0, 0.3)"
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
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box mx="auto" bgcolor="background.paper" className={classes.mainbreak}>
          <Grid item alignContent="center">
            <div className={classes.grow}>
              <SubscriptionToolbar
                changeView={() => setView(!view)}
                changeSort={() => handleState()}
                changeKind={(kind) => setsortvariable(kind)}
              />
            </div>
            <main className={classes.content}>
              <EmptyContent />
            </main>
          </Grid>
        </Box>
      </div>
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
      </Drawer> */}
      {/* <div className={classes.overlay}>
        <IconButton onClick={handleDrawerOpen}>
          <ArrowBackIosIcon />
        </IconButton>
      </div> */}
    </div>
  ) : (
    <div>
      <Box
        display="flex"
        bgcolor="background.paper"
        borderColor="grey.500"
        //boxShadow="0px 0.5px 0px rgba(0, 0, 0, 0.3)"
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
      <div
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <Box mx="auto" bgcolor="background.paper" className={classes.mainbreak}>
          <Grid item alignContent="center">
            <div className={classes.grow}>
              <SubscriptionToolbar
                changeView={() => setView(!view)}
                changeSort={() => handleState()}
                changeKind={(kind) => setsortvariable(kind)}
              />
            </div>
            <main className={classes.content}>
              {view !== true ? (
                <ACTIVE_CONTENT cards={cards} />
              ) : (
                <LIST_VIEWBREAK cards={cards} />
              )}
            </main>
          </Grid>
        </Box>
      </div>
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
      </Drawer> */}
      {/* <div className={classes.overlay}>
        <IconButton onClick={handleDrawerOpen}>
          <ArrowBackIosIcon />
        </IconButton>
      </div> */}
    </div>
  );
}

const GET_SUBSCRIPTIONS = gql`
  query {
    me {
      id
      accounts {
        id
        transactions {
          id
          name
          category
          amount
          date
          paymentChannel
          isoCurrencyCode
        }
      }
    }
  }
`;
