'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeasonalCutoff: React.FC = () => {
  const [seasonalCutoff, setSeasonalCutoff] = useState<number | undefined>(undefined);


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
