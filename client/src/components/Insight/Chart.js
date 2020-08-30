import * as React from "react";
import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";

import { Animation, Stack } from "@devexpress/dx-react-chart";

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

export default function Chart_func() {
  return (
    <Paper>
      <Chart data={data} height="275">
        <ArgumentAxis showLine={false} showTicks={false} />
        <BarSeries
          color="#C4C4C4"
          name="Before"
          valueField="Before"
          argumentField="year"
        />
        <BarSeries
          color="#7610EB"
          name="now"
          valueField="now"
          argumentField="year"
        />
        <BarSeries
          color="#EFEFF4"
          name="future"
          valueField="future"
          argumentField="year"
        />
        <Stack stacks={[{ series: ["Before", "now", "future"] }]} />

        <Animation />
      </Chart>
    </Paper>
  );
}
