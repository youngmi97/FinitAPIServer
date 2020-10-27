import * as React from "react";
import DayPicker from "react-day-picker";
import {
  Box,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  Typography,
  Button,
} from "@material-ui/core";
import moment from "moment";
import { useTheme, makeStyles } from "@material-ui/core/styles";
// import Box from "@material-ui/core/Box";
import Freetrial from "../calendar/freetrial";

import { ResponsiveBar } from "@nivo/bar";
import { func } from "joi";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "448px",
    height: "97px",
  },
  List: {
    border: "1px solid #C8C7CC",
    padding: 22,
    backgroundColor: "white",
    borderRadius: 8,
  },
  rect: {
    width: 12,
    height: 12,
    backgroundColor: "#7610EB",
  },
  bust: {
    position: "absolute",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
}));

const data = [
  { year: "Jan", Before: 2.525, now: 0, future: 0 },
  { year: "Feb", Before: 3.018, now: 0, future: 0 },
  { year: "Mar", Before: 3.682, now: 0, future: 0 },
  { year: "Apr", Before: 4.44, now: 0, future: 0 },
  { year: "May", Before: 5.31, now: 0, future: 0 },
  { year: "July", Before: 0, now: 6.93, future: 0 },
  { year: "Aug", Before: 0, now: 0, future: 6.93 },
  { year: "Sept", Before: 0, now: 0, future: 6.93 },
  { year: "Oct", Before: 0, now: 0, future: 6.93 },
  { year: "Nov", Before: 0, now: 0, future: 6.93 },
  { year: "Dec", Before: 0, now: 0, future: 6.93 },
];

export default function Chart_func(props) {
  const classes = useStyles();
  const left = "<";
  const today = new Date();

  function get_list1(obj) {
    const a = Object.keys(obj);
    return obj;
  }
  var lists = get_list1(props.freecard);
  console.log("list", props.freecard);
  const mon = today.getMonth();
  console.log("today", today.getMonth());
  //console.log("diff", moment(today).diff(lists[0]["firstAddedDate"], "months"));
  const right = ">";
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

  const smallmonth = [
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
  const shortmonth = [
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

  function short_return(state) {
    return shortmonth.slice(state + mon - 2, state + mon + 1);
  }

  const local_month = short_return(0);

  function get_date(today, day) {
    return parseInt((day - today) / 86400000);
  }

  function make_payment(obj) {
    var result = new Array();
    const a = Object.keys(obj);
    for (let index = 0; index < a.length; index++) {
      result.push([]);
      let date = new Date(obj[a[index]]["lastDate"]);
      result[index].push({
        name: obj[a[index]]["name"],
        card: "Visa • 3366",
        day: monthNames[date.getMonth()] + " " + date.getDate(),
        realday: date,
        plan: obj[a[index]]["plan"],
        period: obj[a[index]]["period"],
        date: get_date(today, date),
        price: obj[a[index]]["realPrice"],
        stringprice: obj[a[index]]["price"],
        lastDate1: obj[a[index]]["lastDate1"],
      });
    }
    return result;
  }

  function category_value(category, obj, state) {
    var result = 0;
    for (let index = 0; index < obj.length; index++) {
      if (category == obj[index]["category"]) {
        if (obj[index]["firstAddedDate"] - state > 0) {
          if (obj[index]["firstAddedDate"] > 3) {
            result += 3 * obj[index]["realPrice"];
          } else {
            result += obj[index]["firstAddedDate"] * obj[index]["realPrice"];
          }
        }
      }
    }
    return result;
  }

  console.log(make_payment(lists));
  const data1 = [
    {
      country: local_month[0],
      Entertainment: 0,
      Music: 0,
      CreativityandDesign: 0,
      grey:
        category_value("Entertainment", lists, 2) +
        category_value("Music", lists, 2) +
        category_value("Creativity and Design", lists, 2),
    },
    {
      country: local_month[1],
      Entertainment: 0,
      Music: 0,
      CreativityandDesign: 0,
      grey:
        category_value("Entertainment", lists, 1) +
        category_value("Music", lists, 1) +
        category_value("Creativity and Design", lists, 1),
    },
    {
      country: local_month[2],
      Entertainment: category_value("Entertainment", lists, 0),

      Music: category_value("Music", lists, 0),

      CreativityandDesign: category_value("Creativity and Design", lists, 0),
      grey: 0,
    },
  ];
  const colors = {
    Entertainment: "#7610EB",
    Music: "#D98E04",
    CreativityandDesign: "#F2E205",
    grey: "#666666",
  };
  const getColor = (bar) => colors[bar.id];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box display="flex" stlye={{ margin: 0, padding: 0 }}>
        <Box
          p={1}
          style={{
            width: 267,
            height: 420,
          }}
        >
          <Box
            display="flex"
            stlye={{ margin: 0, padding: 0, width: 267, height: 61 }}
          >
            <Box p={1}>
              <Typography>October</Typography>
            </Box>
            <Box p={1}>
              <Typography>2020</Typography>
            </Box>
            <Box p={1}>
              <Button
                className={classes.bust}
                style={{ padding: 0, maxWidth: 24, margin: 0 }}
              >
                <Typography style={{ width: 24, height: 24 }}>
                  {left}
                </Typography>
              </Button>
            </Box>
            <Box p={1}>
              <Button
                className={classes.bust}
                style={{ padding: 0, maxWidth: 24, margin: 0 }}
              >
                <Typography style={{ width: 24, height: 24 }}>
                  {right}
                </Typography>
              </Button>
            </Box>
          </Box>
          <div
            style={{
              width: 246,
              height: 359,
              backgroundColor: "white",
              border: "1px solid #C8C7CC",
              borderRadius: "8px",
            }}
          >
            <ResponsiveBar
              data={data1}
              keys={["Entertainment", "Music", "CreativityandDesign", "grey"]}
              indexBy="country"
              margin={{ top: 50, bottom: 50, left: 32, right: 32 }}
              padding={0.3}
              colors={getColor}
              borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
              axisTop={null}
              axisLeft={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legendPosition: "middle",
                legendOffset: 32,
              }}
              enableLabel={false}
              enableGridY={false}
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </div>
        </Box>
        <Box>
          <List style={{ marginTop: 123, marginLeft: 36 }}>
            <ListItem>
              <ListItemAvatar>
                <div
                  style={{ width: 12, height: 12, backgroundColor: "#7610EB" }}
                />
              </ListItemAvatar>
              <ListItemText primary="Entertainment" secondary={null} />
              <ListItemSecondaryAction>
                <Typography style={{ color: "grey" }}>
                  {category_value("Entertainment", lists, 0)}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <div
                  style={{ width: 12, height: 12, backgroundColor: "#D98E04" }}
                />
              </ListItemAvatar>
              <ListItemText primary="Music" secondary={null} />
              <ListItemSecondaryAction>
                <Typography style={{ color: "grey" }}>
                  {category_value("Music", lists, 0)}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <div
                  style={{ width: 12, height: 12, backgroundColor: "#F2E205" }}
                />
              </ListItemAvatar>
              <ListItemText primary="Creativity and Design" />
              <ListItemSecondaryAction>
                <Typography style={{ color: "grey" }}>
                  {category_value("CreativityandDesign", lists, 0)}
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Box style={{ margin: 0, padding: 0 }}>
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
          {Object.entries(make_payment(lists)).map((card, index) => {
            if (card.length > 0) {
              return (
                <ListItem>
                  <Freetrial card={card[1]} />
                </ListItem>
              );
            }
          })}
        </List>
      </Box>
    </div>
  );
}
