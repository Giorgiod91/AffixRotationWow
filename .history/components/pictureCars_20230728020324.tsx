"use client";
//TODO: make the function theRightIcon in a seperate file and import it here
//TODO: make the const images in a seperate file and import it here
//TODO: finish the pushweekindicator
//TODO: implement the SeasonalCutoff into the build
//TODO: make the Carousel to change weekly affixes if u press the arrow
//TODO: finish the whichWeek component to show the current week
import { Carousel } from "@mantine/carousel";
// import { toDataURL } from "data-uri-lite";
import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
import { useMediaQuery } from "@mantine/hooks";
import {
  createStyles,
  Paper,
  Text,
  Title,
  Button,
  useMantineTheme,
  rem,
  Rating,
  Flex,
  Center,
} from "@mantine/core";
import { useEffect, useState } from "react";
import achievment_boss_archaedas from "../public/achievement_boss_archaedas.jpg";
import ability_warrior_focusedrage from "../public/ability_warrior_focusedrage.jpg";
import sticker from "../public/sticker.jpg";

function Difficulty() {
  const [value, onChange] = useState(0);

  return (
    <div className="flex flex-row">
      <Rating
        value={value}
        onChange={onChange}
        size="md"
        color="red"
        emptyIcon="star"
        filledIcon="star"
        emptyFilledIcon="star"
        emptyFilledColor="red"
        filledColor="red"
        emptyColor="red"
        emptyHoverColor="red"
        filledHoverColor="red"
        emptyFilledHoverColor="red"
      />
    </div>
  );
}
const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.black,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.colors.gray[6],
    opacity: 0.7,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

interface CardProps {
  image: string;
  name: string;
  categoryName: string;
  icon: string;
  description?: string;
  wowhead_url?: string;
  icons?: string[];
  icon1?: string[];
}

function Card({
  image,
  name,
  description,
  wowhead_url,
  categoryName,
  icon,
  icons,
}: CardProps) {
  const { classes } = useStyles();

  // const images = [
  //   "achievement_boss_archaedas.jpg",
  //   "sticker.jpg",
  //   "ability_warrior_focusedrage.jpg",
  //   "",
  // ];

  function theRightIcon(icon: string | undefined) {
    if (icon) {
      if (icon === "ability_warrior_focusedrage") {
        // return <img src="./public/ability_warrior_focusedrage.webp" alt={icon} />;
        return (
          <img
            src="./ability_warrior_focusedrage.webp"
            alt="ability_warrior_focusedrage-webp"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "ability_toughness") {
        return (
          <img
            src="./ability_toughness.webp"
            alt="ability_toughness"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "ability_warrior_battleshout") {
        return (
          <img
            src="./ability_warrior_battleshout.webp"
            alt="ability_warrior_battleshout"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "spell_nature_earthquake") {
        return (
          <img
            src="./spell_nature_earthquake.webp"
            alt="spell_nature_earthquake"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "achievement_boss_archaedas") {
        return (
          <img
            src="./tyra.jpeg"
            alt="achievement_boss_archaedas"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "spell_nature_cyclone") {
        return (
          <img
            src="./spell_nature_cyclone.webp"
            alt="spell_nature_cyclone"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "inv_misc_root_01") {
        return (
          <img
            src="./inv_misc_root_01.jpg"
            alt="inv_misc_root_01"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "ability_ironmaidens_whirlofblood") {
        return (
          <img
            src="./ability_ironmaidens_whirlofblood.jpg"
            alt="ability_ironmaidens_whirlofblood"
            style={{ width: "180px", height: "180px" }}
          />
        );
      } else if (icon === "spell_misc_emotionsad") {
        return (
          <img
            src="./afflicted.webp"
            alt="spell_misc_emotionsad"
            style={{ width: "180px", height: "180px" }}
          />
        );
      }
    }

    return null;
  }

  const text = categoryName;
  const [showFullText, setShowFullText] = useState(false);
  return (
    <Paper
      shadow="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F1F3F5",
      }}
      // TODO: style the card

      p="xl"
      radius="md"
      mx="auto"
      className={classes.card}
    >
      <Flex
        direction="column"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="overflow-hidden">
          <Title
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            order={3}
            className={classes.title}
          >
            {name}
          </Title>
          <Text mx="auto">
            {showFullText
              ? text
              : text.split(" ").slice(0, 40).join(" ") + "..."}
          </Text>
          {!showFullText && (
            <Button variant="link" onClick={() => setShowFullText(true)}>
              Show More
            </Button>
          )}
        </div>

        {theRightIcon(icon)}

        {wowhead_url && (
          <a href={wowhead_url} target="_blank">
            <Button variant="outline" onClick={handleClick}>
              Visit Website
            </Button>
          </a>
        )}
        {/* <Button variant="white" href={wowhead_url} color="dark">
        more info
      </Button> */}
        {/* <Difficulty /> */}
      </Flex>
    </Paper>
  );
}



export function SliderHover({ affixes }: { affixes: any}) {
  const { hovered, ref } = useHover();
  const [value, setValue] = useState(40);

  // Update the color based on the value
  const color = value < 50 ? 'red' : 'green';
  const pushweek = value > 50 ? 'pushweek' : 'notpushweek';
  if (value >= 50 && isItPushWeek) {
    color = 'green';
  }

  // Check if any affix has icon equal to 'ability_warrior_battleshout'
  const isItPushWeek = affixes && affixes.some((affix: any) => affix.icon === 'ability_warrior_battleshout');

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
        {isItPushWeek ? (
        <div>Is is not a Push Week</div>
      ) : (
        <div>It is  Push Week!</div>
      )}
    </div>
  );
}

// ... (other components and the rest of the code)












export function CardsCarousel() {
  const [affixes, setAffixes] = useState([]);


  useEffect(() => {
    fetch("https://raider.io/api/v1/mythic-plus/affixes?region=eu&locale=en")
      .then((response) => response.json())
      .then((data) => setAffixes(data.affix_details));
    console.log(affixes);
  }, []);




    

  
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = affixes.map((item: any) => (
    <Carousel.Slide key={item.name}>
      <Card
        name={item.name}
        categoryName={item.description}
        icon={item.icon}
        image={item.background_image}
      />
    </Carousel.Slide>
  ));

  const endlessSlides = slides.concat(slides);
  return (
      <div> 
    <Carousel
      slideSize="33%"
      breakpoints={[{ maxWidth: "sm", slideSize: "100%", slideGap: rem(2) }]}
      slideGap="xl"
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
    <SliderHover affixes={affixes} />
    </div>

  );
}
