import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import { useQuery } from "@apollo/react-hooks";
import React, { useLayoutEffect, useState, useContext, useEffect } from "react";

import gql from "graphql-tag";
import ACTIVE_CONTENT from "./Profile_content";
import LIST_ITEM_DISCOVER from "./Profile_drawer";

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
    width: 256,
    [theme.breakpoints.down(1024)]: {
      width: 0,
    },
    zIndex: 100,
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

  return (
    <div>
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
      <div>
        <Grid
          container
          className={classes.mainbreak}
          direction="column"
          alignItems="center"
          justify="center"
          position="absolute"
          style={{ margin: 0, padding: 0, top: -60 }}
        >
          <Grid item xs>
            <main className={classes.content}>
              <ACTIVE_CONTENT />
            </main>
          </Grid>
        </Grid>
        {/* <Box
          mx="auto"
          bgcolor="background.paper"
          position="absolute"
          p={1}
          display="flex"
          style={{ top: -60 }}
          className={classes.mainbreak}
          justifyContent="center"
        >
          <Box p={1}>
            <main className={classes.content}>
              <ACTIVE_CONTENT />
            </main>
          </Box>
        </Box> */}
      </div>
      <Button style={{ position: "absolute", top: -55, right: 5 }}>
        close
      </Button>
    </div>
  );
}
