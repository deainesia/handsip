import Button from "../components/Button";
import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { bestseller } from "../data/bestSeller";
import { custStory } from "../data/custStory";
import { heroImageHome } from "../data/heroImageHome";
import { perfectPairings } from "../data/perfectPairings";
import { findTheOne } from "../data/findTheOne";
import { highlightImage } from "../utils";
import { useState, useEffect, useMemo } from "react";
// eslint-disable-next-line no-unused-vars
import { animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";
import useMeasure from "react-use-measure";
import {
  useBgHeadline,
  useBgHeadlineMobile,
  useHeadlineText,
  useHighlightMotion,
  useStoryMotion,
} from "../styles/motion";

export const Home = () => {
  const [containerRef, { width: widthContainer }] = useMeasure();

  const isMobile = widthContainer < 750;

  const [storyDisplay, setStoryDisplay] = useState(1);
  const storyById = custStory.find((item) => item.id === storyDisplay);
  const handleNextStory = () => {
    storyDisplay == 3 ? setStoryDisplay(1) : setStoryDisplay(storyDisplay + 1);
  };
  const handlePrevStory = () => {
    storyDisplay == 1 ? setStoryDisplay(3) : setStoryDisplay(storyDisplay - 1);
  };

  const text1 = "Sip the Warmth,";
  const letter1 = text1.split("");
  const text2 = "Feel the Craft.";
  const letter2 = text2.split("");

  // preload
  const heroImages = useMemo(() => {
    return [...heroImageHome, ...heroImageHome];
  }, []);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src.image;
    });
    const img = new Image();
    img.src = highlightImage;
    custStory.forEach((src) => {
      const img = new Image();
      img.src = src.image;
    });
  }, [heroImages]);

  // motion
  const {
    headlineText1,
    headlineText2,
    headlineText3,
    headlineText4,
    headlineText5,
  } = useHeadlineText(letter1, letter2);

  const {
    bgHeadline1,
    bgHeadline2,
    bgHeadline3,
    bgHeadline4,
    imgHeadline5,
    imgHeadline6,
  } = useBgHeadline();

  const { imgHeadline1Mobile, imgHeadline2Mobile } = useBgHeadlineMobile();

  const { ref: refHighlight, inView: inViewHighlight } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  const {
    bgHiglight1Style,
    bgHiglight2Style,
    bgHiglight3Style,
    imgHiglightStyle,
    textHighlightStyle,
    buttonHighlightStyle,
  } = useHighlightMotion(inViewHighlight);

  const { ref: refStory, inView: inViewStory } = useInView({
    threshold: 0.3,
  });
  const { textStoryStyle, titleStoryStyle, creditStoryStyle, imgStoryStyle } =
    useStoryMotion(inViewStory, storyById, storyDisplay);

  return (
    <main ref={containerRef}>
      <section
        id="home"
        className="relative flex h-screen w-full flex-col overflow-hidden max-md:pt-16 md:flex-row"
      >
        <div className="absolute left-0 flex h-full w-full flex-col max-md:bottom-0 md:top-0 md:flex-row">
          <animated.span
            style={bgHeadline1}
            className="origin-left bg-secondary-100 max-md:h-10/12 md:w-6/12"
          ></animated.span>
          <animated.span
            style={bgHeadline2}
            className="origin-left bg-secondary-200 max-md:h-2/12 md:w-2/12"
          ></animated.span>
          <animated.span
            style={bgHeadline3}
            className="origin-left bg-secondary-300 max-md:h-2/12 md:w-2/12"
          ></animated.span>
          <animated.span
            style={bgHeadline4}
            className="origin-left bg-secondary-400 max-md:h-2/12 md:w-2/12"
          ></animated.span>
        </div>

        <div className="z-5 flex h-full w-full flex-col justify-center gap-6 px-5 md:w-6/12 md:ps-10 md:pr-8 lg:gap-8 lg:ps-14 xl:ps-20 xl:pr-16 2xl:ps-30">
          <span>
            {headlineText1.map((style, i) => (
              <animated.span className="headline-text" key={i} style={style}>
                {letter1[i]}
              </animated.span>
            ))}
            <br />

            {headlineText2.map((style, i) => (
              <animated.span className="headline-text" key={i} style={style}>
                {letter2[i]}
              </animated.span>
            ))}
          </span>

          <span>
            <animated.p
              style={headlineText3}
              className="normal-text font-semibold"
            >
              We believe a cup is more than just a vessel.
            </animated.p>
            <animated.p style={headlineText4} className="normal-text">
              It's a morning companion, a quiet partner in conversation, a
              bringer of warmth. At HandSip, every cup is handcrafted slowly,
              mindfully, and never quite the same.
            </animated.p>
          </span>

          <animated.div
            style={headlineText5}
            className="flex w-full flex-row items-center justify-between gap-4 rounded-lg bg-white/50 px-3 py-2 backdrop-blur-sm"
          >
            <p className="normal-text text-primary">
              First Cup, First Love - Enjoy 15% Off
            </p>
            <span className="w-fit">
              <Button variant={"primary"} text={"Claim"} />
            </span>
          </animated.div>
        </div>
        <animated.div
          style={
            isMobile
              ? { ...imgHeadline1Mobile, ...imgHeadline2Mobile }
              : { ...imgHeadline5, ...imgHeadline6 }
          }
          className="flex h-fit flex-row items-center max-md:relative max-md:pb-6 md:w-6/12 md:flex-col"
        >
          {heroImages.map((item, i) => {
            return (
              <img
                src={item.image}
                fetchPriority={i === 0 ? "high" : "auto"}
                key={i}
                className="z-5 aspect-[9/13] w-6/12 rounded-lg object-cover max-md:mr-2 md:mb-2"
              />
            );
          })}
        </animated.div>
      </section>

      <section id="best-seller">
        <Card title={"Best Seller Cups"} data={bestseller} />
      </section>

      <section
        id="highlight"
        ref={refHighlight}
        className="relative flex w-full flex-col bg-secondary-500 max-md:pt-7 md:flex-row"
      >
        <div className="z-5 md:w-6/12 md:max-xl:py-10 xl:ps-20 2xl:ps-30">
          <animated.img
            style={imgHiglightStyle}
            src={highlightImage}
            className="aspect-square object-cover"
          />
        </div>

        <div className="flex flex-col gap-3 px-5 py-8 max-md:relative md:w-6/12 md:justify-center md:gap-2 md:py-6 md:ps-5 md:pe-10 lg:justify-between lg:py-10 lg:ps-7 lg:pe-14 xl:py-18 xl:ps-10 xl:pe-20 2xl:py-20 2xl:pe-30">
          <div className="absolute top-0 right-0 flex h-full w-full flex-col md:w-6/12 md:flex-row">
            <animated.span
              style={bgHiglight1Style}
              className="origin-left bg-secondary-400 max-md:h-4/12 md:w-2/6"
            ></animated.span>
            <animated.span
              style={bgHiglight2Style}
              className="origin-left bg-secondary-300 max-md:h-4/12 md:w-2/6"
            ></animated.span>
            <animated.span
              style={bgHiglight3Style}
              className="origin-left bg-secondary-200 max-md:h-4/12 md:w-2/6"
            ></animated.span>
          </div>

          <animated.p
            style={textHighlightStyle}
            className="form-title z-5 text-primary italic"
          >
            This Month's Highlight:
          </animated.p>
          <animated.p style={textHighlightStyle} className="title-large z-5">
            For Your Quietest Coffee Moments
          </animated.p>
          <animated.p style={textHighlightStyle} className="normal-text z-5">
            For the gentle souls who let the world soften for a while. This cup
            isn't rushed, it waits with you patiently for the next sip.
          </animated.p>

          <span className="z-5 flex flex-row gap-12 lg:gap-15">
            <span className="flex flex-col items-start">
              <animated.p
                style={textHighlightStyle}
                className="normal-text text-black-400 italic"
              >
                Volume
              </animated.p>
              <animated.p
                style={textHighlightStyle}
                className="normal-text text-black"
              >
                280 ml
              </animated.p>
            </span>
            <span className="flex flex-col items-start">
              <animated.p
                style={textHighlightStyle}
                className="normal-text text-black-400 italic"
              >
                Material
              </animated.p>
              <animated.p
                style={textHighlightStyle}
                className="normal-text text-black"
              >
                Stoneware Ceramic
              </animated.p>
            </span>
          </span>

          <span className="z-5">
            <animated.p
              style={textHighlightStyle}
              className="normal-text font-bold"
            >
              Quiet Pour
            </animated.p>
            <animated.p
              style={textHighlightStyle}
              className="normal-text font-bold text-success"
            >
              $ 10.00
            </animated.p>
          </span>

          <Tag title={["Classic", "Clean Look", "White Ivory"]} />

          <animated.span className="z-5 w-fit" style={buttonHighlightStyle}>
            <Button variant={"primary"} text={"Meet the cup"} />
          </animated.span>
        </div>
      </section>

      <section id="perfect-pairings">
        <Card title={"Perfect Pairings"} data={perfectPairings} />
      </section>

      <section id="cust-story">
        <animated.div
          className="flex flex-col-reverse items-center justify-between md:flex-row"
          ref={refStory}
        >
          <animated.div
            className="relative z-5 flex flex-col overflow-hidden px-5 py-7 max-md:gap-4 md:h-[580px] md:w-6/12 md:justify-between md:py-12 md:ps-10 md:pe-7 lg:h-[700px] lg:py-16 lg:ps-14 lg:pe-10 xl:h-[610px] xl:py-18 xl:ps-20 xl:pe-14 2xl:h-[700px] 2xl:py-20 2xl:ps-30 2xl:pe-16"
            style={{ backgroundColor: `#${storyById.color}` }}
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
            <animated.p style={titleStoryStyle} className="title-large z-5">
              {storyById.title}
            </animated.p>
            {storyById.story.map((story, i) => (
              <animated.p
                style={textStoryStyle[i]}
                key={story}
                className="normal-text z-5"
              >
                {story}
              </animated.p>
            ))}

            <animated.span
              style={creditStoryStyle}
              className="normal-text z-5 flex flex-row items-center gap-1"
            >
              <p className="font-semibold">—{storyById.name},</p>
              <p className="font-semibold">{storyById.city}</p>
              <p>with</p>
              <p className="font-semibold text-primary">{storyById.cup}</p>
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
            </animated.span>
          </animated.div>

          <div className="relative w-full overflow-hidden md:flex md:w-6/12 md:flex-row md:items-center md:gap-0.5 md:pe-10 lg:pe-14 xl:pe-20 2xl:pe-30">
            {isMobile && (
              <>
                <span
                  className="absolute inset-0 top-2/12 -z-1"
                  style={{ backgroundColor: `#${storyById.color}` }}
                ></span>

                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-0 top-2/12 isolate -z-1 size-[800px] mix-blend-multiply"
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
              </>
            )}

            <animated.div
              style={imgStoryStyle}
              className="h-full w-full max-md:px-5"
            >
              <img
                src={storyById.image}
                className="aspect-square w-full object-cover max-md:rounded-lg md:rounded-r-lg"
              />
            </animated.div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute inset-y-0 left-0 ms-5 size-8 h-full text-white md:hidden"
              onClick={handlePrevStory}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 text-white max-md:absolute max-md:inset-y-0 max-md:right-0 max-md:me-5 max-md:h-full md:text-black lg:size-10"
              onClick={handleNextStory}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </animated.div>
      </section>

      <section id="find-the-one">
        <Card title={"Find The One That Fits"} data={findTheOne} />
      </section>
    </main>
  );
};
