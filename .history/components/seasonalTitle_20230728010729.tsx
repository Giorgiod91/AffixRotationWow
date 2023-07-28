'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function SeasonalCutoff() {

  // fetch data from https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu

  const [seasonalCutoff, setSeasonalCutoff] = useState([]);

  useEffect(() => {
    
