"use client";
Search
/


Back to all categories
Sliders
Slider with thumb visible on hover

Built by @rtivital


import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';

export function SliderHover() {
  const { hovered, ref } = useHover();

  return (
    <Slider
      defaultValue={40}
      min={10}
      max={90}
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
    />
  );
}
Slider with icon thumb

Built by @rtivital
NumberInput with slider

Built by @rtivital

Your daily kcal consumption
2200
Range slider with labels

Built by @rtivital

Slider with marks

Built by @rtivital

0
25
50
75
100
Slider with white thumb

Built by @rtivital

Mantine UI