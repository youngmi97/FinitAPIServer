import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
// import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useQuery } from "@apollo/react-hooks";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import clsx from "clsx";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import gql from "graphql-tag";
import Chart from "./Insight/Chart";
import Spendlist from "./Insight/spendlist";
import LIST_ITEM_DISCOVER from "./List_item_discover";
import LIST_ITEM_RIGHT from "./List_item_right";
import LIST_ITEM_DISCOVER_MINI from "./List_item_discover_mini";
import moment from "moment";

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
  const [up, setUp] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const [drawer, setDrawer] = React.useState(3);
  // const [view, setView] = React.useState(false);
  const today = new Date();
  const [width] = useWindowSize();
  const isReduced = width <= 1023;
  const [index, setIndex] = React.useState(0);

  const underlineBar = isReduced ? (
    <div className={classes.dividerReduced}></div>
  ) : (
    <div className={classes.divider}></div>
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const { user } = useContext(AuthContext);

  var empty = false;
  let cards = [];

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
      category: item["category"][0],
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
        12,
        0,
        0
      ),
      lastDate1: item["lastDate"],
      plan: item["plan"],
      startdate: item["createdAt"],
      period: item["period"],
      stringprice: item["price"],
      firstAddedDate: moment(today).diff(
        new Date(
          item["firstAddedDate"].split(/[^0-9]/)[0],
          item["firstAddedDate"].split(/[^0-9]/)[1],
          item["firstAddedDate"].split(/[^0-9]/)[2],
          12,
          0,
          0
        ),
        "months"
      ),
    };
  }
  switch (index) {
    case 0:
      cards.sort(function (a, b) {
        if (a.firstAddedDate === b.firstAddedDate) {
          return a.name > b.name ? 1 * up : -1 * up;
        }
        return a.firstAddedDate > b.firstAddedDate ? 1 * up : -1 * up;
      });
      break;

    case 1:
      cards.sort(function (a, b) {
        if (a.realPrice * a.firstAddedDate === b.realPrice * b.firstAddedDate) {
          return a.name > b.name ? 1 * up : -1 * up;
        }
        return a.realPrice * a.firstAddedDate > b.realPrice * b.firstAddedDate
          ? 1 * up
          : -1 * up;
      });
      break;
    case 2:
      cards.sort(function (a, b) {
        if (a.realPrice === b.realPrice) {
          return a.name > b.name ? 1 * up : -1 * up;
        }
        return a.realPrice > b.realPrice ? 1 * up : -1 * up;
      });
      break;
  }

  const freecard = JSON.parse(JSON.stringify(cards));

  const menuTitle = isReduced ? (
    <LIST_ITEM_DISCOVER_MINI index="4" />
  ) : (
    <TextTypography1>Insight</TextTypography1>
  );

  return (
    <div style={{ paddingTop: 60 }}>
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
        <Box mx="auto" bgcolor="background.paper" className={classes.mainbreak}>
          <Chart
            freecard={freecard}
            index={index}
            setIndex={setIndex}
            up={up}
            setUp={setUp}
          />
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
        category
        isoCurrencyCode
        plan
        lastDate
        period
        createdAt
        firstAddedDate
      }
    }
  }
`;
