import * as React from "react";
import Paper from "@material-ui/core/Paper";
// import Box from "@material-ui/core/Box";
import {
  Chart,
  BarSeries,
  ArgumentAxis,
} from "@devexpress/dx-react-chart-material-ui";
import { ResponsiveBar } from "@nivo/bar";

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
  const data1 = [
    {
      country: "May",
      Entertainment: 100,
      Music: 50,
      "Creativity and Design": 0,
    },
    {
      country: "June",
      Entertainment: 100,

      Music: 50,
      "Creativity and Design": 0,
    },
    {
      country: "July",
      Entertainment: 100,

      Music: 50,

      "Creativity and Design": 0,
    },
  ];
  return (
    <Paper style={{ width: 590, height: 359 }}>
      <ResponsiveBar
        data={data1}
        keys={["Entertainment", "Music", "Creativity and Design"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        colors={["#7610EB", "#D98E04", "#F2E205"]}
        borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        axisTop={null}
        axisLeft={null}
        axisRight={null}
        width={400}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        enableLabel={false}
        enableGridY={false}
        legends={[
          {
            dataFrom: "keys",
            anchor: "right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 269,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        animate={true}
        motionStiffness={90}
        motionDamping={15}
      />
    </Paper>
  );
}
