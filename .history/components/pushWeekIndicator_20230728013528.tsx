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
