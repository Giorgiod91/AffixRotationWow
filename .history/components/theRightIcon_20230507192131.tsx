"use client";

// creating a file with many images to use in picutreCars.tsx Card component every image should be renamed
// to the name of the icon it represents

import achievment_boss_archaedas from "../public/achievement_boss_archaedas.jpg";
import sticker from "../public/sticker.jpg";
import EuroZeichen from "../public/EuroZeichen.jpeg";
import ability_warrior_focusedrage from "../public/ability_warrior_focusedrage.jpg";
import { useEffect, useState } from "react";
import data from "./fetchAffixes";
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';

// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';
// import achievment_boss_archaedas from '../public/achievement_boss_archaedas.jpg';

export const icon = [
  "achievement_boss_archaedas.jpg",
  "sticker.jpg",
  "EuroZeichen.jpeg",
  "ability_warrior_focusedrage.jpg",
];
export function theRightIcon(
  icon: any | undefined,
  icons: string[] | undefined
) {

  const [affixes, setAffixes] = useState([]);

  useEffect(() => {
    fetch("https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en")
      .then((response) => response.json())
      .then((data) => setAffixes(data.affix_details));
  }, []);
  //checking if the fetched data "icon" is equal to the name of the image
  if (icon === "achievement_boss_archaedas.jpg") {
    return <img src="./achievment_boss_archaedas" alt={icon} />;
  }
  else if (icon === "ability_warrior_focusedrage.jpg") {
    return <img src="./ability_warrior_focusedrage" alt={icon} />;
  }
  
  return null;
}
