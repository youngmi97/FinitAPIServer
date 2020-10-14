import React from "react";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import DialogContent from "@material-ui/core/DialogContent";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import HoveringCard from "./HoveringCard";
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
			<Dialog
				fullScreen={fullScreen}
				open={open}
				onClose={handleClose}
				margin="100"
			>
				<div className={classes.root}>
					<DialogTitle className={classes.Avatar}>
						<Avatar
							variant="square"
							src={"/static/avatar/" + props.name + "/[32].svg"}
						/>

						<Box
							display="flex"
							alignItems="flex-end"
							p={1}
							className={classes.List1}
						>
							<Box p={1} flexGrow={1} className={classes.List1}>
								<div className={classes.he}>
									<Typography className={classes.ListItemSize}>
										{props.name}
									</Typography>
									<Typography className={classes.ListItemSize1}>
										{props.plan}, {props.period} payment
									</Typography>
								</div>
							</Box>
							{/* <Box p={1}>
                <AvatarGroup max={4}>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatars/Ellipse 13.svg"
                  />
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                  <Avatar
                    alt="Cindy Baker"
                    src="/static/images/avatars/Ellipse 13.svg"
                  />
                  <Avatar
                    alt="Agnes Walker"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                  <Avatar
                    alt="Trevor Henderson"
                    src="/static/images/avatars/Ellipse 14.svg"
                  />
                </AvatarGroup>
              </Box>*/}
						</Box>
					</DialogTitle>
					<DialogContent className={classes.Avatar}>
						<Typography className={classes.ListItemSize2}>
							{props.price}
						</Typography>
						<Typography className={classes.ListItemSize1}>
							Next payment is in {date} days, scheduled for{" "}
							{monthNames[day.getMonth()]} {day.getDay()}, {day.getFullYear()}.
						</Typography>
						<Typography className={classes.ListItemSize3}>
							Payment Method
						</Typography>

						<List className={classes.List}>
							<ListItem divider className={classes.List}>
								<Avatar
									variant="square"
									className={classes.rect}
									src="static/images/Visa.svg"
								></Avatar>
								<ListItemText
									primary="VISA ****-****-****-9322"
									secondary={secondary ? "Secondary text" : null}
								/>
							</ListItem>
						</List>
						<Typography className={classes.ListItemSize4}>
							Purchase History
						</Typography>
					</DialogContent>
				</div>
				<PopupState variant="popover" popupId="demo-popup-popover">
					{(popupState) => (
						<div>
							<div>
								<Button
									className={classes.overlay}
									style={{ padding: 0, margin: 0 }}
									{...bindTrigger(popupState)}
								>
									<svg
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10C16.9 10 16 10.9 16 12ZM14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12ZM8 12C8 10.9 7.1 10 6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12Z"
											fill="#666666"
										/>
									</svg>
								</Button>
							</div>

							<Popover
								{...bindPopover(popupState)}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "right",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "right",
								}}
							>
								<Box p={2} style={{ margin: 0, padding: 0 }}>
									<List
										component="nav"
										aria-labelledby="nested-list-subheader"
										className={classes.popover}
										style={{ margin: 0, padding: 8 }}
									>
										<ListItem
											button
											dense={true}
											disableRipple={true}
											className={classes.poplist}
											style={{ margin: 0, padding: 0 }}
										>
											<Box
												display="flex"
												flexDirection="row"
												alignItems="center"
												p={1}
												margin={0}
												padding={0}
											>
												<Box p={1} alignItems="center">
													<Typography style={{ fontSize: 14, color: "black" }}>
														Edit Subscription
													</Typography>
												</Box>
											</Box>
										</ListItem>
										<ListItem
											button
											dense={true}
											disableRipple={true}
											className={classes.poplist}
											style={{ margin: 0, padding: 0 }}
										>
											<Box
												display="flex"
												flexDirection="row"
												alignItems="center"
												p={1}
												margin={0}
												padding={0}
											>
												<Box p={1} alignItems="center">
													<Typography style={{ fontSize: 14, color: "Red" }}>
														Delete Subscription
													</Typography>
												</Box>
											</Box>
										</ListItem>
									</List>
								</Box>
							</Popover>
						</div>
					)}
				</PopupState>

				<Button
					className={classes.overlay1}
					style={{ padding: 0, margin: 0, maxWidth: 24, height: 24 }}
					onClick={handleClose}
				>
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M6.97803 16.0908C6.729 16.3398 6.7207 16.7798 6.97803 17.0371C7.24365 17.2944 7.67529 17.2944 7.93262 17.0371L12 12.9614L16.0757 17.0371C16.3247 17.2944 16.7646 17.2944 17.022 17.0371C17.2793 16.7715 17.2793 16.3398 17.022 16.0908L12.9463 12.0151L17.022 7.94775C17.2793 7.69043 17.2876 7.25049 17.022 6.99316C16.7563 6.74414 16.3247 6.74414 16.0757 6.99316L12 11.0688L7.93262 6.99316C7.67529 6.74414 7.23535 6.73584 6.97803 6.99316C6.729 7.25879 6.729 7.69043 6.97803 7.94775L11.0537 12.0151L6.97803 16.0908Z"
							fill="#666666"
						/>
					</svg>
				</Button>
			</Dialog>
		</div>
	);
}
