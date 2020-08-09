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
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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
		maxWidth: 300,
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
	small: {
		width: theme.spacing(3),
		height: theme.spacing(3),
	},
	search: {
		position: "relative",
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.black, 0.05),
		"&:hover": {
			backgroundColor: fade(theme.palette.common.black, 0.1),
		},
		marginRight: theme.spacing(2),
		marginLeft: 0,
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
		marginTop: 170,
	},
	drawerPaper2: {
		width: drawerWidth2,
		top: 200,
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
		"& span, & svg": {
			fontSize: "0.8rem",
		},
	},
	ListItemSize3: {
		fontSize: "0.5rem",
	},
	ListItemSize4: {
		"& span, & svg": {
			fontSize: "0.8rem",
		},
		marginRight: 0,
	},
}));

export default function List_item_right() {
	const classes = useStyles();
	return (
		<div>
			<Toolbar className={classes.customizeToolbar}>
				<div className={classes.grow}>
					<Typography variant="h7">Upcoming Payments</Typography>
					<div className={classes.grow} />
				</div>
				<div>
					<StyledButton>View all></StyledButton>
				</div>
			</Toolbar>

			<div className={classes.drawerContainer}>
				<List
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={classes.list}
				>
					<ListSubheader
						className={classes.ListItemSize3}
						component="div"
						id="nested-list-subheader"
					>
						JULY
					</ListSubheader>

					<ListItem button>
						<Grid container>
							<Grid item xs={2}>
								<ListItemText className={classes.ListItemSize4} primary="29" />
							</Grid>
							<Grid item xs={2}>
								<Avatar
									variant="square"
									className={classes.small}
									src="Netflix_small.png"
								/>
							</Grid>
							<Grid item xs={5}>
								<ListItemText
									className={classes.ListItemSize2}
									primary="Netflix"
								/>
							</Grid>
							<Grid item xs={3}>
								<ListItemText
									className={classes.ListItemSize2}
									primary="$12.99"
								/>
							</Grid>
						</Grid>
					</ListItem>
				</List>
				<List
					component="nav"
					aria-labelledby="nested-list-subheader"
					className={classes.list}
				>
					<ListSubheader
						className={classes.ListItemSize3}
						component="div"
						id="nested-list-subheader"
					>
						JULY
					</ListSubheader>

					<ListItem button>
						<Grid container>
							<Grid item xs={2}>
								<ListItemText className={classes.ListItemSize4} primary="29" />
							</Grid>
							<Grid item xs={2}>
								<Avatar
									variant="square"
									className={classes.small}
									src="Netflix_small.png"
								/>
							</Grid>
							<Grid item xs={5}>
								<ListItemText
									className={classes.ListItemSize2}
									primary="Netflix"
								/>
							</Grid>
							<Grid item xs={3}>
								<ListItemText
									className={classes.ListItemSize2}
									primary="$12.99"
								/>
							</Grid>
						</Grid>
					</ListItem>
				</List>
			</div>
			<Toolbar className={classes.customizeToolbar}>
				<div className={classes.grow}>
					<Typography variant="h7">Group Invites</Typography>
					<div className={classes.grow} />
				</div>
				<div>
					<StyledButton>View all></StyledButton>
				</div>
			</Toolbar>
		</div>
	);
}
