import React, { useEffect } from "react";
import DayPicker from "react-day-picker";
import "react-day-picker/lib/style.css";
import Helmet from "react-helmet";
import { isToday } from "date-fns";
import "../../App.css";
import { Typography, Box, Grid } from "@material-ui/core";

const event = {
  29: [1],
  1: [1, 2],
  15: [1],
};

function renderDay(day, selected) {
  const date = day.getDate();
  const today = isToday(day);
  const bool = selected.split(".")[2];

  const dateStyle = {
    position: "absolute",
    height: 37,
    width: 32,
    fontSize: 12,
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };
  const birthdayStyle = {
    fontSize: "12px",
    textAlign: "center",
    Color: "#C8C7CC",
  };

  return (
    <div
      style={{
        borderWidth: 10,
        borderColor: "black",
        height: 45,
        width: 40,

        padding: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          borderWidth: 10,
          borderColor: "black",
          height: 32,
          width: 32,
          marginLeft: 4,

          padding: 0,
          position: "relative",
        }}
      >
        {(() => {
          switch (today) {
            case false:
              return (
                <div>
                  {parseInt(bool) == date ? (
                    <div>
                      <div style={dateStyle}>
                        <div
                          style={{
                            backgroundColor: "rgba(44, 44, 44, 0.1)",
                            borderRadius: "100%",
                            width: 28,
                            height: 28,
                            color: "black",
                            fontWeight: 700,
                            fontSize: 12,
                            margin: 1.5,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                          }}
                        >
                          {date}
                        </div>
                      </div>
                      <Box>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          style={{ margin: 0, padding: 0, paddingTop: 28 }}
                        >
                          {event[date] &&
                            event[date].map((name, i) => (
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    color: "#C8C7CC",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  •
                                </Typography>
                              </Grid>
                            ))}
                        </Grid>
                      </Box>
                    </div>
                  ) : (
                    <div>
                      <div style={dateStyle}>{date}</div>
                      <Box>
                        <Grid
                          container
                          alignItems="center"
                          justify="center"
                          position="relative"
                          style={{
                            margin: 0,
                            padding: 0,
                            paddingTop: 28,
                          }}
                        >
                          {event[date] &&
                            event[date].map((name, i) => (
                              <Grid item xs={3}>
                                <Typography
                                  style={{
                                    color: "#C8C7CC",
                                    margin: 0,
                                    padding: 0,
                                  }}
                                >
                                  •
                                </Typography>
                              </Grid>
                            ))}
                        </Grid>
                      </Box>
                    </div>
                  )}
                </div>
              );

            case true:
              return (
                <div>
                  <div style={dateStyle}>
                    <div
                      style={{
                        backgroundColor: "#7610EB",
                        borderRadius: "100%",
                        width: 28,
                        height: 28,
                        color: "white",
                        fontSize: 12,
                        margin: 1.5,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                      }}
                    >
                      {date}
                    </div>
                  </div>
                  <Box>
                    <Grid
                      container
                      alignItems="center"
                      justify="center"
                      style={{ margin: 0, padding: 0, paddingTop: 28 }}
                    >
                      {event[date] &&
                        event[date].map((name, i) => (
                          <Grid item xs={3}>
                            <Typography
                              style={{
                                color: "#C8C7CC",
                                margin: 0,
                                padding: 0,
                              }}
                            >
                              •
                            </Typography>
                          </Grid>
                        ))}
                    </Grid>
                  </Box>
                </div>
              );
          }
        })()}
      </div>
    </div>
  );
}

export default function Example(props) {
  const date = props.selected
    ? props.selected.toLocaleDateString()
    : "00.00.00";

  const handleDayClick = (day, { selected }) => {
    props.setSelected(selected ? undefined : day);
  };

  return (
    <div>
      <Helmet>
        <style>{`
          .DayPicker-Day {
            display: table-cell;
            padding: 0px;
            border-radius: 0px;
            margin:0px;
            border: 1px solid #DFDFDF;
            vertical-align: top;
            background-color:#FFFFFF;
            text-align: center;
            height: 45px;
            width: 40px;
            margin: 0px;
          }
          .DayPicker-Day--outside {
            display: table-cell;
            padding: 0px;
            border-radius: 0px;
            margin:0px;
            color:#A0A0A0;
            background-color:#FAFAFA;
            border: 1px solid #DFDFDF;
            vertical-align: top;
            
            text-align: center;
            height: 45px;
            width: 40px;
            margin: 0px;
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside) {
            display: table-cell;
            padding: 0px;
            border-radius: 0px;
            margin:0px;
            background-color:#FFFFFF;
            border: 1px solid #DFDFDF;
            vertical-align: top;
            
            text-align: center;
            height: 45px;
            width: 40px;
            margin: 0px;
          }
          .DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{
            background-color:#DFDFDF;
          }
          .DayPicker:not(.DayPicker--interactionDisabled)
  .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
  background-color: #DFDFDF;
}
          
          `}</style>
      </Helmet>
      <DayPicker
        showOutsideDays
        selectedDays={props.selected}
        onDayClick={handleDayClick}
        renderDay={(day) => renderDay(day, date)}
      />
    </div>
  );
}
