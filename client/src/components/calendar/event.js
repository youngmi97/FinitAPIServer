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
  const a = props.selected ? props.selected : 0;

  const d = JSON.parse(JSON.stringify(props.cards));

  function get_list(obj) {
    const a = Object.keys(obj);
    for (let index = 0; index < a.length; index++) {
      for (let index1 = 0; index1 < obj[a[index]].length; index1++) {
        if (obj[a[index]][index1]["planName"] === "Free") {
          obj[a[index]].splice(index1, 1);
          index1 = index1 - 1;
        }
      }
    }
    var b = [];
    b = a.map((x) => new Date(x));

    b.sort(function (a, b) {
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(b) - new Date(a);
    });
    b = b.reverse();
    const c = {};
    for (let index = 0; index < b.length; index++) {
      c[b[index].toString()] = obj[b[index].toString()];
    }
    return c;
  }

  function get_list1(obj) {
    const a = Object.keys(obj);
    for (let index = 0; index < a.length; index++) {
      for (let index1 = 0; index1 < obj[a[index]].length; index1++) {
        if (!(obj[a[index]][index1]["planName"] === "Free")) {
          obj[a[index]].splice(index1, 1);
          index1 = index1 - 1;
        }
      }
    }
    return obj;
  }

  // const lists = [
  //   {
  //     name: "Netflix",
  //     card: "Visa • 3366",
  //     day: "OCTOBER 6",
  //     date: "3",
  //     price: "12.99",
  //   },
  //   {
  //     name: "Notion",
  //     card: "Visa • 3366",
  //     day: "OCTOBER 10",
  //     date: "7",
  //     price: "8",
  //   },
  //   {
  //     name: "Hulu",
  //     card: "Visa • 3366",
  //     day: "OCTOBER 15",
  //     date: "20",
  //     price: "5",
  //   },
  // ];
  // const paymentlists = [
  //   [
  //     {
  //       name: "Netflix",
  //       card: "Visa • 3366",
  //       day: "SEPTEMBER 20",
  //       date: "-3",
  //       price: "12.99",
  //     },
  //   ],
  //   [
  //     {
  //       name: "Notion",
  //       card: "Visa • 3366",
  //       day: "SEPTEMBER 29",
  //       date: "-7",
  //       price: "8",
  //     },
  //   ],

  //   [
  //     {
  //       name: "Hulu",
  //       card: "Visa • 3366",
  //       day: "OCTOBER 1",
  //       date: "0",
  //       price: "20",
  //     },
  //     {
  //       name: "Spotify",
  //       card: "Visa • 3366",
  //       day: "OCTOBER 1",
  //       date: "0",
  //       price: "1.25",
  //     },
  //   ],
  //   [
  //     {
  //       name: "Hulu",
  //       card: "Visa • 3366",
  //       day: "OCTOBER 15",
  //       date: "20",
  //       price: "5",
  //     },
  //   ],
  // ];

  const today = new Date();

  var paymentlists = get_list(d);

  var lists = get_list1(props.freecard);
  const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  function get_date(today, day) {
    return parseInt((day - today) / 86400000);
  }

  function make_payment(obj) {
    var result = new Array();
    const a = Object.keys(obj);
    for (let index = 0; index < a.length; index++) {
      result.push([]);
      for (let index1 = 0; index1 < obj[a[index]].length; index1++) {
        let date = new Date(obj[a[index]][index1]["lastDate"]);
        result[index].push({
          name: obj[a[index]][index1]["name"],
          card: "Visa • 3366",
          day: monthNames[date.getMonth()] + " " + date.getDate(),
          realday: date,
          date: get_date(today, date),
          price: obj[a[index]][index1]["realPrice"],
        });
      }
    }
    return result;
  }

  paymentlists = make_payment(paymentlists);
  lists = make_payment(lists);
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
        {Object.entries(lists).map((card, index) => {
          if (card[1].length > 0) {
            return (
              <ListItem>
                <Freetrial card={card[1]} />
              </ListItem>
            );
          }
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
        {Object.entries(paymentlists).map((card, index) => {
          return (
            <ListItem>
              <Recurring card={card[1]} day={a} />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
