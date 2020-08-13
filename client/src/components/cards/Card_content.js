// plain card state
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import AutoScale from "react-auto-scale";

const useStyles = makeStyles((theme) => ({
	root: {
		minWidth: 217,
		maxWidth: "100%",
		Height: "auto",
	},
	media: {
		minHeight: 217,
		maxWidth: "100%",
		Height: "auto",
	},
	overlay: {
		position: "absolute",
		top: "0%",
		left: "80%",
	},
	Buttoncolor: {
		color: theme.palette.primary.main,
	},
}));

export default function MediaCard() {
	const classes = useStyles();

	return (
		<AutoScale Width={316} maxHeight={400} maxScale={2}>
			<Card className={classes.root}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image="netflix.jpeg"
						title="Contemplative Reptile"
					/>
				</CardActionArea>
			</Card>
		</AutoScale>
	);
}
