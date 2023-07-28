"use client";
import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useState } from 'react';

export function SliderHover() {
  const { hovered, ref } = useHover();
  const [value, setValue] = useState(40);

  // Update the color based on the value
  const color = value < 50 ? 'red' : 'green';
  const pushweek = value > 50 ? 'pushweek' : 'notpushweek';
  const affixes = 

  return (
    <div>
    <Slider
      value={value}
      min={10}
      max={90}
      onChange={setValue}
      ref={ref}
      label={null}
      styles={{
        thumb: {
          transition: 'opacity 150ms ease',
          opacity: hovered ? 1 : 0,
        },
        dragging: {
          opacity: 1,
        },
      }}
      color={color}
     
    />
    {pushweek === 'pushweek' && <div>Push Week</div>}
    </div>
  );
}
