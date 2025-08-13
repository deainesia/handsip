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
  const imgHero = useRef();

  const [heightImgStory] = useMeasureSize(imgStory);
  const [heightImgHero, widthImgHero] = useMeasureSize(imgHero);

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
        <div
          ref={imgHero}
          className="z-5 flex h-full w-6/12 flex-col justify-center gap-6 md:ps-10 md:pr-8 lg:gap-8 lg:ps-14 xl:ps-20 xl:pr-16 2xl:ps-30"
        >
          <p className="headline-text">
            Sip the Warmth,
            <br /> Feel the Craft.
          </p>
          <span className="">
            <p className="normal-text font-semibold">
              We believe a cup is more than just a vessel.
            </p>
            <p className="normal-text">
              It's a morning companion, a quiet partner in conversation, a
              bringer of warmth. At HandSip, every cup is handcrafted slowly,
              mindfully, and never quite the same.
            </p>
          </span>

          <div className="flex w-full flex-row items-center justify-between gap-4 rounded-lg bg-white/50 px-3 py-2 backdrop-blur-sm">
            <p className="normal-text text-primary">
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
                style={
                  widthImgHero >= 600
                    ? {
                        height: (widthImgHero * 60) / 100,
                        width: (heightImgHero * 40) / 100,
                        objectFit: "cover",
                      }
                    : {
                        height: (widthImgHero * 70) / 100,
                        width: (heightImgHero * 20) / 100,
                        objectFit: "cover",
                      }
                }
                className="z-5 mb-2 rounded-lg"
              />
            );
          })}
        </div>
      </section>

      <section id="best-seller">
        <Card title={"Best Seller Cups"} data={bestseller} />
      </section>

      <section id="highlight" className="relative flex w-full flex-row">
        <div className="absolute top-0 flex h-full w-full flex-row">
          <span className="w-6/6 bg-secondary-500"></span>
          <span className="w-2/6 bg-secondary-400"></span>
          <span className="w-2/6 bg-secondary-300"></span>
          <span className="w-2/6 bg-secondary-200"></span>
        </div>

        <div className="z-5 flex w-6/12 justify-end bg-secondary-500 md:max-xl:py-10">
          <img
            src={highlightImage}
            className="size-fit object-cover xl:max-2xl:ps-20 2xl:w-5/6"
          />
        </div>

        <div className="z-5 flex w-6/12 flex-col justify-center gap-2 md:py-6 md:ps-5 md:pe-10 lg:justify-between lg:py-10 lg:ps-7 lg:pe-14 xl:py-18 xl:ps-10 xl:pe-20 2xl:py-20 2xl:pe-30">
          <p className="form-title text-primary italic">
            This Month's Highlight:
          </p>
          <p className="title-large">For Your Quietest Coffee Moments</p>
          <p className="normal-text">
            For the gentle souls who let the world soften for a while. This cup
            isn't rushed, it waits with you patiently for the next sip.
          </p>

          <span className="flex flex-row gap-12 lg:gap-15">
            <span className="flex flex-col items-start">
              <p className="normal-text text-black-400 italic">Volume</p>
              <p className="normal-text text-black">280 ml</p>
            </span>
            <span className="flex flex-col items-start">
              <p className="normal-text text-black-400 italic">Material</p>
              <p className="normal-text text-black">Stoneware Ceramic</p>
            </span>
          </span>

          <span>
            <p className="normal-text font-bold">Quiet Pour</p>
            <p className="normal-text font-bold text-success">$ 10.00</p>
          </span>

          <Tag title={["Classic", "Clean Look", "White Ivory"]} />

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
              storyDisplay == item.id
                ? "flex flex-row items-center justify-between"
                : "hidden"
            }
            key={item.id}
          >
            <div
              className="relative flex w-6/12 flex-col justify-between overflow-hidden md:h-[580px] md:py-12 md:ps-10 md:pe-7 lg:h-[700px] lg:py-16 lg:ps-14 lg:pe-10 xl:h-[610px] xl:py-18 xl:ps-20 xl:pe-14 2xl:h-[700px] 2xl:py-20 2xl:ps-30 2xl:pe-16"
              style={{ backgroundColor: `#${item.color}` }}
            >
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 isolate size-[800px] mix-blend-multiply"
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
                <p key={story} className="normal-text z-5">
                  {story}
                </p>
              ))}

              <span className="normal-text z-5 flex flex-row items-center gap-1">
                <p className="font-bold">—{item.name},</p>
                <p className="font-bold">{item.city}</p>
                <p>with</p>
                <p className="font-bold text-primary">{item.cup}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="z-5 size-4 text-primary lg:size-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>

            <div className="flex w-6/12 flex-row items-center gap-0.5 md:pe-10 lg:pe-14 xl:pe-20 2xl:pe-30">
              <div className="size-full">
                <img
                  src={item.image}
                  style={{ height: `${(heightImgStory * 85) / 100}px` }}
                  className="w-full rounded-r-lg object-cover"
                />
              </div>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-8 lg:size-10"
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
