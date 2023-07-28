import axios from 'axios';

async function getSeasonalCutoffNumber(): Promise<number | undefined> {
  const apiUrl = 'https://raider.io/api/v1/mythic-plus/season-cutoffs';
  const season = 'season-df-2';
  const region = 'eu';

  try {
    const response = await axios.get(`${apiUrl}?season=${season}&region=${region}`);
    const seasonalCutoffs = response.data.cutoffs;
    
    if (seasonalCutoffs && seasonalCutoffs.length > 0) {
      return seasonalCutoffs[0].cutoff;
    } else {
      throw new Error('Seasonal cutoff data not available.');
    }
  } catch (error) {
    console.error('Error fetching seasonal cutoff data:', error.message);
    return undefined;
  }
}

async function main() {
  const seasonalCutoff = await getSeasonalCutoffNumber();
  if (seasonalCutoff !== undefined) {
    console.log('Seasonal Cutoff Number:', seasonalCutoff);
  } else {
    console.log('Failed to fetch seasonal cutoff data.');
  }
}

main();
