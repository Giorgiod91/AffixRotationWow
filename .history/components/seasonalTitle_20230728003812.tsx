import React from 'react'

type Props = {}

export default function seasonalTitle({}: Props) {
    // fetching data from the api curl -X 'GET' \
    curl -X 'GET' \
    'https://raider.io/api/v1/mythic-plus/season-cutoffs?season=season-df-2&region=eu' \
    -H 'accept: application/json'
  return (
    <div>seasonalTitle</div>
  )
}