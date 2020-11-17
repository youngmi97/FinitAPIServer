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
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
import Spendlist from "./spendlist";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
  const up = props.up;
  const setUp = props.setUp;
  const today = new Date();

  const index = props.index;
  const setIndex = props.setIndex;

  function get_list1(obj) {
    const a = Object.keys(obj);
    return obj;
  }
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  var lists = get_list1(props.freecard);

  const mon = today.getMonth();

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
  const sort = ["Accumulative", "Most Spent", "Unit Price"];
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

  console.log(data2);
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
                              width: 40,
                              height: 40,
                              margin: 0,
                              padding: 0,
                            }}
                            src={"Bitmap.svg"}
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
          <Box display="flex">
            <Box p={1} flexGrow={1}>
              <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ textTransform: "none" }}
              >
                <Box display="flex">
                  <Box p={1} style={{ margin: 0, padding: 0 }}>
                    {sort[index]}
                  </Box>
                  <Box p={1} style={{ margin: 0, padding: 0 }}>
                    <KeyboardArrowDownIcon />
                  </Box>
                </Box>
              </Button>
            </Box>

            <Box p={1}>
              <Button
                onClick={() => {
                  setUp(up * -1);
                }}
              >
                <Box>
                  <svg
                    width="16"
                    height="14"
                    viewBox="0 0 16 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.3203 13.1909C11.5029 13.1909 11.6772 13.1162 11.8184 12.9668L15.5122 9.18164C15.645 9.04883 15.7197 8.84961 15.7197 8.69189C15.7197 8.29346 15.4458 8.02783 15.064 8.02783C14.8647 8.02783 14.7236 8.09424 14.6074 8.21045L12.8975 9.97852L11.9097 11.1572L11.9844 9.62158V1.50342C11.9844 1.11328 11.7104 0.831055 11.3203 0.831055C10.9302 0.831055 10.6479 1.11328 10.6479 1.50342V9.62158L10.7227 11.1572L9.73486 9.97852L8.0249 8.21045C7.90869 8.09424 7.76758 8.02783 7.57666 8.02783C7.18652 8.02783 6.9126 8.29346 6.9126 8.69189C6.9126 8.84961 6.99561 9.04883 7.12012 9.18164L10.814 12.9668C10.9551 13.1162 11.1294 13.1909 11.3203 13.1909ZM4.67969 13.1909C5.06982 13.1909 5.34375 12.9087 5.34375 12.5186V4.40039L5.26904 2.86475L6.25684 4.04346L7.9668 5.81152C8.08301 5.92773 8.22412 5.99414 8.42334 5.99414C8.80518 5.99414 9.0791 5.72852 9.0791 5.33008C9.0791 5.17236 9.00439 4.97314 8.87158 4.84033L5.17773 1.05518C5.03662 0.905762 4.8623 0.831055 4.67969 0.831055C4.48877 0.831055 4.31445 0.905762 4.17334 1.05518L0.479492 4.84033C0.35498 4.97314 0.271973 5.17236 0.271973 5.33008C0.271973 5.72852 0.545898 5.99414 0.936035 5.99414C1.12695 5.99414 1.26807 5.92773 1.38428 5.81152L3.09424 4.04346L4.08203 2.86475L4.00732 4.40039V12.5186C4.00732 12.9087 4.28955 13.1909 4.67969 13.1909Z"
                      fill="#666666"
                    />
                  </svg>
                </Box>
              </Button>
            </Box>
          </Box>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem
              onClick={() => {
                setIndex(0);
                handleClose();
              }}
            >
              {sort[0]}
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIndex(1);
                handleClose();
              }}
            >
              {sort[1]}
            </MenuItem>
            <MenuItem
              onClick={() => {
                setIndex(2);
                handleClose();
              }}
            >
              {sort[2]}
            </MenuItem>
          </Menu>
        </Typography>
        <List className={classes.List}>
          {Object.entries(make_payment(lists)).map((card, index) => {
            if (card.length > 0) {
              return (
                <ListItem>
                  <Spendlist card={card[1]} />
                </ListItem>
              );
            }
          })}
        </List>
      </Box>
    </div>
  );
}
