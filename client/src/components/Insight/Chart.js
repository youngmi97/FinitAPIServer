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
import {
  BarChart,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  Cell,
  PieChart,
  Pie,
} from "recharts";
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
  List1: {
    padding: 0,
    margin: 0,
    marginTop: 6,
  },
  bust: {
    position: "absolute",
    width: 24,
    height: 24,
    minWidth: 24,
    maxWidth: 24,
  },
  ListItemSize: {
    color: "Black",
    fontWeight: 400,
    fontSize: "17px",
  },
  ListItemSize1: {
    color: "#4CD964",
    fontSize: "15px",
  },
  ListItemSize2: {
    color: "#666666",

    fontSize: "11px",
    margin: 0,
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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
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
      value:
        category_value("Entertainment", lists, 2) +
        category_value("Music", lists, 2) +
        category_value("Creativity and Design", lists, 2),

      svalue:
        "$" +
        (
          category_value("Entertainment", lists, 2) +
          category_value("Music", lists, 2) +
          category_value("Creativity and Design", lists, 2)
        ).toString(),
    },
    {
      country: local_month[1],
      value:
        category_value("Entertainment", lists, 1) +
        category_value("Music", lists, 1) +
        category_value("Creativity and Design", lists, 1),

      svalue:
        "$" +
        (
          category_value("Entertainment", lists, 1) +
          category_value("Music", lists, 1) +
          category_value("Creativity and Design", lists, 1)
        ).toString(),
    },
    {
      country: local_month[2],
      value:
        category_value("Entertainment", lists, 0) +
        category_value("Music", lists, 0) +
        category_value("Creativity and Design", lists, 0),

      svalue:
        "$" +
        (
          category_value("Entertainment", lists, 0) +
          category_value("Music", lists, 0) +
          category_value("Creativity and Design", lists, 0)
        ).toString(),
    },
  ];
  const data2 = [
    {
      name: "Entertainment",
      value: category_value("Entertainment", lists, 0),
      svalue: "$ " + category_value("Entertainment", lists, 0).toString(),
      percent:
        (
          (100 * category_value("Entertainment", lists, 0)) /
          data1[2]["value"]
        ).toString() + "%",
    },
    {
      name: "Music",
      value: category_value("Music", lists, 0),
      svalue: "$ " + category_value("Music", lists, 0).toString(),
      percent:
        (
          (100 * category_value("Music", lists, 0)) /
          data1[2]["value"]
        ).toString() + "%",
    },
    {
      name: "Creativity and Design",
      value: category_value("Creativity and Design", lists, 0),
      svalue:
        "$ " + category_value("Creativity and Design", lists, 0).toString(),
      percent:
        (
          (100 * category_value("Creativity and Design", lists, 0)) /
          data1[2]["value"]
        ).toString() + "%",
    },
  ];
  const COLORS = ["#007AFF", "#4CD964", "#FFCC00", "#5856D6"];
  const [focusBar, setFocusBar] = React.useState(null);
  let renderLabel = function (entry) {
    return entry.percent;
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box display="flex">
        <Box p={1}>
          <Box p={1} style={{ marginTop: 10, padding: 0 }}>
            <Box
              display="flex"
              stlye={{ margin: 0, padding: 0, width: 267, minHeight: 61 }}
            >
              <Box p={1}>
                <Typography style={{ fontWeight: 700, fontSize: 24 }}>
                  October
                </Typography>
              </Box>
              <Box p={1}>
                <Typography style={{ fontWeight: 400, fontSize: 24 }}>
                  2020
                </Typography>
              </Box>
              <Box p={1} flexGrow={1}></Box>
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
            <BarChart
              width={246}
              height={359}
              data={data1}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              onMouseMove={(state) => {
                if (state.isTooltipActive) {
                  setFocusBar(state.activeTooltipIndex);
                } else {
                  setFocusBar(null);
                }
              }}
            >
              <XAxis
                xAxisId={1}
                dataKey="svalue"
                axisLine={false}
                tickLine={false}
              />
              <XAxis
                xAxisId={0}
                dataKey="country"
                axisLine={false}
                tickLine={false}
              />
              <Tooltip name="country" cursor={{ fill: "transparent" }} />
              <Bar dataKey="value" radius={[4, 4, 4, 4]}>
                <Cell
                  cursor="pointer"
                  fill={focusBar === 0 ? "#7610EB" : "rgba(44, 44, 44, 0.2)"}
                  key={`cell-0`}
                  fillOpacity={0.3}
                />
                <Cell
                  cursor="pointer"
                  fill={focusBar === 1 ? "#7610EB" : "rgba(44, 44, 44, 0.2)"}
                  key={`cell-1`}
                  fillOpacity={0.3}
                />
                <Cell cursor="pointer" fill={"#7610EB"} key={`cell-2`} />
              </Bar>
            </BarChart>
          </div>
        </Box>
        <Box p={1}>
          <div
            style={{
              marginTop: 61,
              width: 700,
              height: 359,
              backgroundColor: "white",
              border: "1px solid #C8C7CC",
              borderRadius: "8px",
            }}
          >
            <Box display="flex">
              <Box p={1}>
                <PieChart width={395} height={328} padding={0}>
                  <text
                    x={207}
                    y={130}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontWeight: 600, fontSize: 17 }}
                  >
                    Subscriptions
                  </text>
                  <text
                    x={207}
                    y={164}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontWeight: 600, fontSize: 34 }}
                  >
                    ${data1[2]["value"]}
                  </text>
                  <text
                    x={207}
                    y={190}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    color="#666666"
                    style={{ fontWeight: 600, fontSize: 17 }}
                  >
                    {smallmonth[mon]}
                  </text>
                  <Pie
                    data={data2}
                    cx={207}
                    cy={164}
                    innerRadius={130}
                    outerRadius={150}
                    fill="#8884d8"
                    paddingAngle={1}
                    label={renderLabel}
                  >
                    {data2.map((entry, index) => (
                      <Cell fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </Box>
              <Box p={1}>
                <List>
                  {data2.map((entry, index) => (
                    <ListItem>
                      <Box
                        display="flex"
                        alignItems="center"
                        p={1}
                        className={classes.List1}
                      >
                        <Box p={1} style={{ paddingLeft: 0 }}>
                          <Avatar
                            variant="square"
                            style={{
                              width: 48,
                              height: 48,
                              margin: 0,
                              padding: 0,
                            }}
                            src={"static/avatar/" + entry.name + "/[48].svg"}
                          />
                        </Box>
                        <Box p={1} flexGrow={1}>
                          <Typography className={classes.ListItemSize}>
                            {entry.name}
                          </Typography>
                          <Typography className={classes.ListItemSize1}>
                            {entry.svalue}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
          </div>
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
          Most Spent
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
