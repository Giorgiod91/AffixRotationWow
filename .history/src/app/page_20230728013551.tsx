import Image from "next/image";
import { Inter } from "next/font/google";
import SeasonalCutoff from "../../components/seasonalTitle";
import { CardsCarousel } from "../../components/pictureCars";
import { SliderInput } from "../../components/pushWeekIndicator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <a href="/about">about</a>

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://raider.io/characters/eu/kazzak/H%C3%B2lym%C3%B2ly"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <h1>HolyMoly</h1>
          </a>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <h1 className="relative text-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert">
          Affixes this week
        </h1>
      </div>
      {/* make the h2 link to be linked to the CardsCarousel component */}
      <h2 className="relative text-3xl dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"></h2>

      <h2>This Week</h2>
      <CardsCarousel />
      <Slider />

      <div className="flex ">
        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-1">
          <a
            href="https://raider.io/mythic-plus/cutoffs/season-df-2/eu"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              SeasonalCutoff(eu){" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Seasonal Cutoffs for EU.
            </p>
          </a>

          <a
            href="https://raider.io/mythic-plus-rankings/season-df-2/all/world/leaderboards"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              HighestTimedKeys{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Highest Timed Keys for all dungeons.
            </p>
          </a>
        </div>
      </div>
    </main>
  );
}
