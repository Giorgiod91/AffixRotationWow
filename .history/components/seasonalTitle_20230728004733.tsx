"use client";
import React from "react";

type Props = {};

export default function SeasonalTitle({}: Props) {
  // fetching data from the api curl -X 'GET' \
  // curl -X 'GET' \
  // 'https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu' \
  // -H 'accept: application/json'
  const [seasonalTitle, setSeasonalTitle] = React.useState("");
  React.useEffect(() => {
    fetch(
      "https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu"
    )
      .then((res) => res.json())
      .then((data) => {
        setSeasonalTitle(data.cutoffs.p999.horde.quantileMinValue);
      });
    console.log(seasonalTitle);
  }, []);

  return (
    <div>
      <h1>{seasonalTitle}</h1>
      <p>yooo</p>
    </div>
  );
}
