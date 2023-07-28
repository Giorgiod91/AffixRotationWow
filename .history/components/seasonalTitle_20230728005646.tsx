'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalCutoff: React.FC = () => {
  const [seasonalCutoff, setSeasonalCutoff] = useState<number | undefined>(undefined);

  useEffect(() => {
    async function fetchSeasonalCutoff() {
      const apiUrl = 'https://raider.io/api/v1/mythic-plus/season-cutoffs';
      const season = 'season-df-2';
      const region = 'eu';

      try {
        const response = await axios.get(`${apiUrl}?season=${season}&region=${region}`);
        const seasonalCutoffs = response.data.cutoffs;

        if (seasonalCutoffs && seasonalCutoffs.length > 0) {
          setSeasonalCutoff(seasonalCutoffs[0].cutoff);
        } else {
          throw new Error('Seasonal cutoff data not available.');
        }
      } catch (error: any) {
        console.error('Error fetching seasonal cutoff data:', error.message);
      }
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
