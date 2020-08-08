import React from "react";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import InputBase from "@material-ui/core/InputBase";

import Launches from "./Launches";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import Profile_Card from "./Profile_Card";
import List_item_Insight from "./List_Insight";
import Active_content from "./Active_content";
import List_item_right from "./List_item_right";

const drawerWidth = 240;
const drawerWidth2 = 300;

const StyledButton = withStyles({
	root: {
		color: "purple",
		fontSize: "0.5rem",
	},
	label: {
		fontSize: "3",
		textTransform: "capitalize",
	},
})(Button);

const AntTabs = withStyles({
	root: {},
})(Tabs);

const AntTab = withStyles((theme) => ({
	root: {
		textTransform: "none",
		fontSize: 10,
		inlineSize: 10,
		minWidth: 72,
		fontWeight: theme.typography.fontWeightRegular,
		fontFamily: [
			"-apple-system",
			"BlinkMacSystemFont",
			'"Segoe UI"',
			"Roboto",
			'"Helvetica Neue"',
			"Arial",
			"sans-serif",
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"',
		].join(","),
		"&:hover": {
			color: "#40a9ff",
			opacity: 1,
		},
		"&$selected": {
			color: "#800080",
			fontWeight: theme.typography.fontWeightMedium,
		},
		"&:focus": {
			color: "#40a9ff",
		},
	},
	selected: {},
}))((props) => <Tab disableRipple {...props} />);

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
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Paper className={classes.paperContainer}>
			{/* <AppBar position="fixed" className={classes.appBar}>
        <Launches />
      </AppBar> */}
			<Grid container>
				<Grid item xs={1} className={classes.drawerPaper}></Grid>
				<Grid item xs={2} className={classes.drawerPaper}>
					<CssBaseline />
					<Profile_Card />
					<List_item_Insight />
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
						<List_item_right />
					</Drawer>
				</Grid>
			</Grid>
		</Paper>
	);
}
