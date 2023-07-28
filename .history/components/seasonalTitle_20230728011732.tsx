'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SeasonalCutoff() {

  // fetch data from https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu

  const [seasonalCutoff, setSeasonalCutoff] = useState([]);


  useEffect(() => {
    fetch("https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu")
      .then((response) => response.json())
      .then((data) => setSeasonalCutoff(data.cu);
    console.log(seasonalCutoff);
  }, []);

  return (

    <div>
      <h2>Seasonal Cutoff</h2>
      <div>
        {seasonalCutoff.map((item: any) => (
          <div key={item.name}>
            <p>{item.name}</p>
            <p>{item.cutoff}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

