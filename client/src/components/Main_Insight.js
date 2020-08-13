import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { fade, makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import LIST_ITEM_INSIGHT from "./List_Insight";
import LIST_ITEM_RIGHT from "./List_item_right";
import PROFILE_CARD from "./Profile_Card";




const drawerWidth = 240;
const drawerWidth2 = 300;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
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
	customizeToolbar: {
		marginTop: 10,
		minHeight: 5,
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
		marginTop: 200,
	},
	drawerPaper2: {
		width: drawerWidth2,
		top: 260,
	},
	drawerPaper3: {
		marginTop: 200,
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
	paperContainer: {
		backgroundImage: `url(${"Rectangle4.png"})`,
		height: 260,
		width: 1440,
	},
	ListItemSize: {
		"& span, & svg": {
			fontSize: "1rem",
		},
	},
	ListItemSize2: {
		height: 40,
		backgroundColor: theme.palette.common.white,
		marginRight: 10,
		borderRadius: theme.shape.borderRadius,
		"& span, & svg": {
			fontSize: "1rem",
		},
	},
	ListItemSize3: {
		fontSize: "0.5rem",
	},
}));

export default function Main_Insight() {
	const classes = useStyles();

	return (
    <Paper className={classes.paperContainer}>
      {/* <AppBar position="fixed" className={classes.appBar}>
        <Launches />
      </AppBar> */}
      <Grid container>
        <Grid item xs={1} className={classes.drawerPaper}></Grid>
        <Grid item xs={2} className={classes.drawerPaper}>
          <CssBaseline />
          <PROFILE_CARD />
          <LIST_ITEM_INSIGHT />
        </Grid>
        <Grid item xs={5} className={classes.drawerPaper3}></Grid>

        <Grid item xs={2}>
          <Toolbar />
          <Drawer
            className={classes.drawer2}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper2,
            }}
            anchor="right"
          >
            <LIST_ITEM_RIGHT />
          </Drawer>
        </Grid>
      </Grid>
    </Paper>
  );
}
