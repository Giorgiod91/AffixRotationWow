"use client";

import React from "react";

const WeekData = [
  {
    name: 1,
    date: "10.05.2023",
  },
  {
    name: 2,
    date: "17.05.2023",
  },
  {
    name: 3,
    date: "24.05.2023",
  },
  {
    name: 4,
    date: "31.05.2023",
  },
  {
    name: 5,
    date: "07.06.2023",
  },
  {
    name: 6,
    date: "14.06.2023",
  },
  {
    name: 7,
    date: "21.06.2023",
  },
  {
    name: 8,
    date: "28.06.2023",
  },
  {
    name: 9,
    date: "05.07.2023",
  },
  {
    name: 10,
    date: "12.07.2023",
  },
  {
    name: 11,
    date: "19.07.2023",
  },
  {
    name: 12,
    date: "26.07.2023",
  },
];
type WeekData = {
  name: number;
  date: string;
};

interface RenderWeekProps {
  currentWeek: number;
  weekData: WeekData[];
}


export default function RenderWeek({ currentWeek, weekData }: RenderWeekProps) {
  if (currentWeek >= 1 && currentWeek <= 12) {
    const weekIndex = currentWeek - 1;
    return (
      <div>
        <h1>Which week is it?</h1>
        <h2>{weekData[weekIndex].name}</h2>
        <h2>{weekData[weekIndex].date}</h2>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Invalid week number!</h1>
      </div>
    );
  }
}
