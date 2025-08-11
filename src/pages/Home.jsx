import { useRef } from "react";
import Button from "../components/Button";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { bestseller } from "../data/bestSeller";
import { custStory } from "../data/custStory";
import { heroImageHome } from "../data/heroImageHome";
import { perfectPairings } from "../data/perfectPairings";
import { highlightImage } from "../utils";
import { useMeasureSize } from "../hooks/useMeasureSize";
import { useState } from "react";
import { findTheOne } from "../data/findTheOne";

export const Home = () => {
  const imgStory = useRef();
  const [_, width] = useMeasureSize(imgStory);

  const [storyDisplay, setStoryDisplay] = useState(1);
  const handleNextStory = () => {
    storyDisplay == 3 ? setStoryDisplay(1) : setStoryDisplay(storyDisplay + 1);
  };

  return (
    <main>
      <section
        id="home"
        className="relative flex h-screen w-full flex-row overflow-hidden"
      >
        <div className="absolute flex h-full w-full flex-row">
          <span className="w-6/6 bg-secondary-100"></span>
          <span className="w-2/6 bg-secondary-200"></span>
          <span className="w-2/6 bg-secondary-300"></span>
          <span className="w-2/6 bg-secondary-400"></span>
        </div>
        <div className="z-5 flex h-full w-6/12 flex-col justify-center gap-8 pr-16 lg:ps-20 xl:ps-30">
          <p className="headline-text">
            Sip the Warmth,
            <br /> Feel the Craft.
          </p>
          <span className="">
            <p className="title-small font-bold">
              We believe a cup is more than just a vessel.
            </p>
            <p className="title-small">
              It's a morning companion, a quiet partner in conversation, a
              bringer of warmth. At HandSip, every cup is handcrafted slowly,
              mindfully, and never quite the same.
            </p>
          </span>

          <div className="flex w-full flex-row items-center justify-between rounded-lg bg-white/50 px-3 py-2 backdrop-blur-sm">
            <p className="title-small text-primary">
              First Cup, First Love - Enjoy 15% Off
            </p>
            <span className="w-fit">
              <Button variant={"primary"} text={"Claim"} />
            </span>
          </div>
        </div>
        <div className="flex w-6/12 flex-col items-center">
          {heroImageHome.map((item) => {
            return (
              <img
                src={item.image}
                key={item.id}
                className="z-5 mb-2 rounded-lg xl:h-[330px] xl:w-[264px] 2xl:h-[400px] 2xl:w-[320px]"
              />
            );
          })}
        </div>
      </section>

      <section id="best-seller">
        <Card title={"Best Seller Cups"} data={bestseller} />
      </section>

      <section id="highlight" className="relative flex w-full flex-row">
        <div className="absolute flex h-full w-full flex-row">
          <span className="w-6/6 bg-secondary-500"></span>
          <span className="w-2/6 bg-secondary-400"></span>
          <span className="w-2/6 bg-secondary-300"></span>
          <span className="w-2/6 bg-secondary-200"></span>
        </div>

        <div className="z-5 flex w-6/12 justify-end">
          <img
            src={highlightImage}
            className="object-cover xl:size-full xl:ps-20 2xl:w-5/6"
          />
        </div>

        <div className="z-5 flex w-6/12 flex-col justify-between ps-10 xl:py-18 xl:pe-20 2xl:py-20 2xl:pe-30">
          <p className="form-title text-primary italic">
            This Month's Highlight:
          </p>
          <p className="title-large">For Your Quietest Coffee Moments</p>
          <p className="title-small">
            For the gentle souls who let the world soften for a while. This cup
            isn't rushed, it waits with you patiently for the next sip.
          </p>

          <span className="flex flex-row gap-15">
            <span className="flex flex-col items-start">
              <p className="title-small text-black-400 italic">Volume</p>
              <p className="title-small text-black">280 ml</p>
            </span>
            <span className="flex flex-col items-start">
              <p className="title-small text-black-400 italic">Material</p>
              <p className="title-small text-black">Stoneware Ceramic</p>
            </span>
          </span>

          <span>
            <p className="title-small font-bold">Quiet Pour</p>
            <p className="title-small font-bold text-success">$ 10.00</p>
          </span>

          <span className="flex flex-row items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
                clipRule="evenodd"
              />
            </svg>

            <Tag title={"Classic"} />
            <Tag title={"Clean Look"} />
            <Tag title={"Ivory White"} />
          </span>

          <span className="w-fit">
            <Button variant={"primary"} text={"Meet the cup"} />
          </span>
        </div>
      </section>

      <section id="perfect-pairings">
        <Card title={"Perfect Pairings"} data={perfectPairings} />
      </section>

      <section id="cust-story" ref={imgStory}>
        {custStory.map((item) => (
          <div
            className={
              storyDisplay == item.id ? "flex flex-row items-center" : "hidden"
            }
            key={item.id}
          >
            <div
              className="relative flex w-6/12 flex-col justify-between overflow-hidden xl:h-[610px] xl:py-18 xl:ps-20 xl:pe-14 2xl:h-[700px] 2xl:py-20 2xl:ps-30 2xl:pe-16"
              style={{ backgroundColor: `#${item.color}` }}
            >
              <svg
                viewBox="0 0 400 400"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 isolate mix-blend-multiply"
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="9.00"
                    numOctaves="1"
                    stitchTiles="stitch"
                  />
                </filter>

                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
              <p className="form-title z-5 text-primary italic">
                From Their Table to Ours:
              </p>
              <p className="title-large z-5">{item.title}</p>
              {item.story.map((story) => (
                <p key={story} className="title-small z-5">
                  {story}
                </p>
              ))}

              <span className="title-small z-5 flex flex-row items-center gap-1">
                <p className="font-bold">—{item.name},</p>
                <p className="font-bold">{item.city}</p>
                <p>with</p>
                <p className="font-bold text-primary">{item.cup}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="z-5 size-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <div className="flex w-6/12 flex-row items-center gap-2 xl:pe-2 2xl:pe-13">
              <img
                src={item.image}
                style={{ height: `${((width / 2) * 80) / 100}px` }}
                className="w-5/6 rounded-r-lg object-cover"
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-10"
                onClick={handleNextStory}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        ))}
      </section>

      <section id="find-the-one">
        <Card title={"Find The One That Fits"} data={findTheOne} />
      </section>
    </main>
  );
};
