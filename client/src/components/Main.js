import React from "react";
import clsx from "clsx";
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
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Add from "@material-ui/icons/Add";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Launches from "./Launches";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ViewListIcon from "@material-ui/icons/ViewList";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SwapIcon from "@material-ui/icons/SwapVert";
import PeopleIcon from "@material-ui/icons/SupervisedUserCircleRounded";
import Profile_Card from "./Profile_Card";
import List_item_discover from "./List_item_discover";
import Active_content from "./Active_content";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import List_item_right from "./List_item_right";
import List_Viewbreak from "./List_viewbreak";
import withWidth from "@material-ui/core/withWidth";

const drawerWidth = 256;
const drawerWidth2 = 305;

const TextTypography1 = withStyles({
	root: {
		fontSize: 24,
		color: "#000000",
		marginLeft: 10,
	},
})(Typography);

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
		// display: "flex",
		flexGrow: 1,
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
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawer2: {
		width: drawerWidth2,
		height: "100%",

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
		width: 305,
		top: 121,
	},
	overlay: {
		position: "absolute",
		bottom: "10px",
		right: "0px",
	},
	overlay1: {
		position: "absolute",
		bottom: "131px",
		right: "0px",
	},
	drawerPaper3: {},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
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
	},
	contentShift: {
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
		marginRight: 305,
	},
}));

export default function Main(props) {
	const classes = useStyles();
	const { width } = props;
	const [value, setValue] = React.useState(0);
	const [open, setOpen] = React.useState(true);
	const [view, setView] = React.useState(true);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Box
				display="flex"
				bgcolor="white"
				borderColor="grey.500"
				boxShadow="0px 0.5px 0px rgba(0, 0, 0, 0.3)"
				className={classes.toolBar}
				alignItems="center"
			>
				<TextTypography1>All subcriptions</TextTypography1>
			</Box>
			<Drawer
				className={classes.drawer}
				variant="permanent"
				classes={{
					paper: classes.drawerPaper,
				}}
				anchor="left"
			>
				<List_item_discover />
			</Drawer>
			<Drawer
				className={classes.drawer2}
				variant="persistent"
				classes={{
					paper: classes.drawerPaper2,
				}}
				anchor="right"
				open={open}
			>
				<List_item_right />
				<div className={classes.overlay1}>
					<IconButton
						className={classes.Buttoncolor}
						onClick={handleDrawerClose}
					>
						<ArrowForwardIosIcon />
					</IconButton>
				</div>
			</Drawer>
			<main
				className={clsx(classes.content, {
					[classes.contentShift]: open,
				})}
			>
				<Box mx="auto" bgcolor="background.paper" className={classes.mainbreak}>
					<Grid container spacing={1}>
						<Grid item className={classes.drawerPaper3} alignContent="center">
							<div className={classes.grow}>
								<Toolbar variant="dense">
									<IconButton
										className={classes.ListItemSize2}
										onClick={() => setView(!view)}
									>
										<ViewListIcon />
									</IconButton>
									<div className={classes.grow} />
									<div className={classes.search}>
										<div className={classes.searchIcon}>
											<SearchIcon />
										</div>
										<InputBase
											placeholder="  Search"
											classes={{
												root: classes.inputRoot,
												input: classes.inputInput,
											}}
											inputProps={{ "aria-label": "search" }}
										/>
									</div>
									<IconButton className={classes.ListItemSize2}>
										<SwapIcon />
									</IconButton>
									<IconButton className={classes.ListItemSize4}>
										<Add />
									</IconButton>
								</Toolbar>
							</div>
							<main className={classes.content}>
								{view !== true ? <Active_content /> : <List_Viewbreak />}
							</main>
						</Grid>
					</Grid>
				</Box>
			</main>
			<div className={classes.overlay}>
				<IconButton onClick={handleDrawerOpen}>
					<ArrowForwardIosIcon />
				</IconButton>
			</div>
		</div>
	);
}
