import React from "react";

import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Freetrial from "./freetrial";
import Recurring from "./recurring";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme, makeStyles } from "@material-ui/core/styles";

import { ButtonBase, Typography, Avatar, Box, Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "448px",
    height: "97px",
  },
  overlay: {
    position: "absolute",
    top: "10px",
    right: "10px",
    width: "28px",
    height: "28px",
  },
  List: {
    border: "1px solid #C8C7CC",
    padding: 22,
    backgroundColor: "white",
    borderRadius: 8,
  },
  List1: {
    padding: 0,
    marginTop: 6,
  },
  he: { height: 70 },
  ListItemSize: {
    color: "Black",
    fontWeight: 400,
    fontSize: "17px",
  },
  ListItemSize1: {
    color: "#666666",
    fontSize: "15px",
  },
  ListItemSize2: {
    color: "#666666",

    fontSize: "11px",
    marginLeft: 12,
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
}));

export default function ResponsiveDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [secondary] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const a = props.selected ? props.selected.toLocaleDateString() : "00.00.00";

  const b = a.split(".")[2];

  const c = parseInt(b);

  const lists = [
    {
      name: "Netflix",
      card: "Visa • 3366",
      day: "OCTOBER 6",
      date: "3",
      price: "12.99",
    },
    {
      name: "Notion",
      card: "Visa • 3366",
      day: "OCTOBER 10",
      date: "7",
      price: "8",
    },
    {
      name: "Hulu",
      card: "Visa • 3366",
      day: "OCTOBER 15",
      date: "20",
      price: "5",
    },
  ];
  const paymentlists = [
    [
      {
        name: "Netflix",
        card: "Visa • 3366",
        day: "SEPTEMBER 20",
        date: "-3",
        price: "12.99",
      },
    ],
    [
      {
        name: "Notion",
        card: "Visa • 3366",
        day: "SEPTEMBER 29",
        date: "-7",
        price: "8",
      },
    ],

    [
      {
        name: "Hulu",
        card: "Visa • 3366",
        day: "OCTOBER 1",
        date: "0",
        price: "20",
      },
      {
        name: "Spotify",
        card: "Visa • 3366",
        day: "OCTOBER 1",
        date: "0",
        price: "1.25",
      },
    ],
    [
      {
        name: "Hulu",
        card: "Visa • 3366",
        day: "OCTOBER 15",
        date: "20",
        price: "5",
      },
    ],
  ];
  const name = "Netflix";
  const card = "Visa • 3366";
  const day = "OCTOBER 6";
  const date = "20";
  const price = "12.99";
  return (
    <div>
      <Typography
        style={{
          fontSize: 17,
          fontWeight: 600,
          marginBottom: 16,
        }}
      >
        Free Trial
      </Typography>
      <List className={classes.List}>
        {lists.map((card, index) => {
          return (
            <ListItem>
              <Freetrial
                name={card.name}
                card={card.card}
                day={card.day}
                date={card.date}
                price={card.price}
              />
            </ListItem>
          );
        })}
      </List>
      <Typography
        style={{
          fontSize: 17,
          fontWeight: 600,
          marginBottom: 16,
          marginTop: 64,
        }}
      >
        Recurring Payments
      </Typography>
      <List className={classes.List}>
        {paymentlists.map((card, index) => {
          return (
            <ListItem>
              <Recurring card={card} day={c} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
