'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalCutoff: React.FC = () => {
  const [seasonalCutoff, setSeasonalCutoff] = useState<number | undefined>(undefined);

  useEffect(() => {
    async function fetchSeasonalCutoff() {

      try {
        const response = await axios.get("https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu");
        const seasonalCutoffs = response.data.cutoffs;
        console.log(seasonalCutoffs);

    }

    fetchSeasonalCutoff();
  }, []);

  return (
    <div>
      {seasonalCutoff !== undefined ? (
        <p>Seasonal Cutoff Number: {seasonalCutoff}</p>
      ) : (
        <p>Failed to fetch seasonal cutoff data.</p>
      )}
    </div>
  );
};

export default SeasonalCutoff;
