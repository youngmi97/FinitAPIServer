import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Card_content from "./Card_content";
import Card_internal from "./Card_internal";
import { fade, makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
	root: {
		margin: 12,
		maxWidth: 186,
		Width: 186,
		maxHeight: 186,
		height: 186,
		minWidth: 186,
		minHeight: 186,
	},
}));

export default function Active_content() {
	const classes = useStyles();
	const [hover, sethover] = React.useState(false);
	const [hover1, sethover1] = React.useState(false);
	return (
		<Grid>
			<Grid container spacing={0}>
				<Grid item xs className={classes.root}>
					<Grid
						name="hover-feedback"
						precision={0.5}
						onClick={() => sethover1(!hover1)}
					>
						{hover1 !== true ? <Card_content /> : <Card_internal />}
					</Grid>
				</Grid>
				<Grid item xs className={classes.root}>
					<Grid
						name="hover-feedback"
						onMouseEnter={() => sethover(true)}
						onMouseLeave={() => sethover(false)}
					>
						{hover !== true ? <Card_content /> : <Card_internal />}
					</Grid>
				</Grid>
				<Grid item xs className={classes.root}>
					<Card_internal />
				</Grid>
				<Grid item xs className={classes.root}>
					<Card_internal />
				</Grid>
			</Grid>
			<br />
			<Grid container spacing={1}>
				<Grid item xs className={classes.root}>
					<Card_content />
				</Grid>
				<Grid item xs className={classes.root}>
					<Card_content />
				</Grid>
				<Grid item xs className={classes.root}></Grid>
				<Grid item xs className={classes.root}></Grid>
			</Grid>
		</Grid>
	);
}
