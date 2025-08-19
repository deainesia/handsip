import {
  useSpring,
  useSprings,
  easings,
  useTrail,
  useSpringRef,
  useChain,
} from "@react-spring/web";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const useMoveToRight = (ref, from, to) => {
  return useSpring({
    ref: ref,
    from: { width: `${from}%` },
    to: { width: `${to}%` },
    config: { duration: 1000, easing: easings.easeInExpo },
  });
};

const useImageCarousel = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "translateY(0%)" },
    to: { transform: "translateY(-500%)" },
    config: { duration: 50000, easing: (t) => t },
    loop: true,
  });
};

const useFadeIn = (ref) => {
  return useSpring({
    ref: ref,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: {
      tension: 300,
      friction: 40,
    },
  });
};

const useTrailFade = (ref, length) => {
  return useTrail(length, {
    ref: ref,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 100, tension: 200, friction: 30 },
  });
};

const useScaleOut = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "scale(1.2)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { duration: 300, tension: 200, friction: 40 },
  });
};

const useImgHighlightStyle = () => {
  return useSpring(() => ({
    opacity: 0,
    x: -50,
    config: { tension: 300, friction: 40 },
  }));
};

const useTextFadeInStyle = (y) => {
  return useSpring(() => ({
    opacity: 0,
    y: y,
    config: { tension: 300, friction: 30 },
  }));
};

export const useHeadlineText = (letter1, letter2) => {
  const ref1 = useSpringRef();
  const ref2 = useSpringRef();
  const ref3 = useSpringRef();
  const ref4 = useSpringRef();
  const ref5 = useSpringRef();

  const headlineText1 = useTrailFade(ref1, letter1.length);
  const headlineText2 = useTrailFade(ref2, letter2.length);
  const headlineText3 = useFadeIn(ref3, 0);
  const headlineText4 = useFadeIn(ref4, 0);
  const headlineText5 = useScaleOut(ref5);

  useChain([ref1, ref2, ref3, ref4, ref5], [0, 0, 1, 1.5, 1.9], 1000);

  return {
    headlineText1,
    headlineText2,
    headlineText3,
    headlineText4,
    headlineText5,
  };
};

export const useBgHeadline = (width) => {
  const ref1 = useSpringRef();
  const ref2 = useSpringRef();
  const ref3 = useSpringRef();
  const ref4 = useSpringRef();
  const ref5 = useSpringRef();
  const ref6 = useSpringRef();

  const bgHeadline1 = useMoveToRight(ref1, 0, width / 2);
  const bgHeadline2 = useMoveToRight(ref2, 0, width / 6);
  const bgHeadline3 = useMoveToRight(ref3, 0, width / 6);
  const bgHeadline4 = useMoveToRight(ref4, 0, width / 6);
  const imgHeadline5 = useFadeIn(ref5);
  const imgHeadline6 = useImageCarousel(ref6);

  useChain(
    [ref1, ref2, ref3, ref4, ref5, ref6],
    [0, 0, 0.5, 1, 1.5, 2.5],
    1000,
  );

  return {
    bgHeadline1,
    bgHeadline2,
    bgHeadline3,
    bgHeadline4,
    imgHeadline5,
    imgHeadline6,
  };
};

export const useCardMotion = () => {
  const refContainer = useRef(null);

  const [titleCardStyle, titleCardApi] = useTextFadeInStyle(50);

  const [cardStyle, cardApi] = useSprings(5, () => ({
    opacity: 0,
    y: 50,
    scale: 0.1,
    config: { duration: 500, tension: 300, friction: 20 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleCardApi.start({ opacity: 1, y: 0 });
          cardApi.start((i) => ({
            opacity: 1,
            y: 0,
            scale: 1,
            delay: i * 200,
          }));
        } else {
          titleCardApi.start({ opacity: 0, y: 50 });
          cardApi.start((i) => ({
            opacity: 0,
            y: 50,
            scale: 0.1,
            delay: i * 200,
          }));
        }
      },
      { threshold: 0.2 },
    );

    if (refContainer.current) observer.observe(refContainer.current);
    return () => observer.disconnect();
  }, [titleCardApi, cardApi]);

  return { refContainer, titleCardStyle, cardStyle };
};

export const useHighlightMotion = () => {
  const refContainerHighlight = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [bgHiglight1Style, bgHighlight1Api] = useImgHighlightStyle();
  const [bgHiglight2Style, bgHighlight2Api] = useImgHighlightStyle();
  const [bgHiglight3Style, bgHighlight3Api] = useImgHighlightStyle();
  const [bgHiglight4Style, bgHighlight4Api] = useImgHighlightStyle();
  const [imgHiglightStyle, imgHighlightApi] = useImgHighlightStyle();

  const [textHighlightStyle, textHighlightApi] = useTextFadeInStyle(50);

  const [buttonHighlightStyle, buttonHighlightApi] = useSpring(() => ({
    opacity: 0,
    y: 50,
    scale: 0.1,
    config: { tension: 300, friction: 20 },
  }));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          bgHighlight1Api.start({ opacity: 1, x: 0 });
          bgHighlight2Api.start({ opacity: 1, x: 0, delay: 300 });
          bgHighlight3Api.start({ opacity: 1, x: 0, delay: 600 });
          bgHighlight4Api.start({ opacity: 1, x: 0, delay: 900 });
          imgHighlightApi.start({ opacity: 1, x: 0, delay: 1000 });

          textHighlightApi.start({ opacity: 1, y: 0, delay: 1100 });
          buttonHighlightApi.start({ opacity: 1, y: 0, scale: 1, delay: 1100 });

          setHasAnimated(true);
        }
      },
      { threshold: 0.2 },
    );

    if (refContainerHighlight.current)
      observer.observe(refContainerHighlight.current);
    return () => observer.disconnect();
  }, [
    bgHighlight1Api,
    bgHighlight2Api,
    bgHighlight3Api,
    bgHighlight4Api,
    imgHighlightApi,
    textHighlightApi,
    buttonHighlightApi,
    hasAnimated,
  ]);

  return {
    refContainerHighlight,
    bgHiglight1Style,
    bgHiglight2Style,
    bgHiglight3Style,
    bgHiglight4Style,
    imgHiglightStyle,
    textHighlightStyle,
    buttonHighlightStyle,
  };
};

export const useStoryMotion = (storyById, storyDisplay) => {
  const refContainerStory = useRef(null);
  const storyLength = storyById ? storyById.story.length : 0;
  const [hasEntered, setHasEntered] = useState(false);

  const [imgStoryStyle, imgStoryApi] = useSpring(() => ({
    x: -500,
  }));
  const [titleStoryStyle, titleStoryApi] = useTextFadeInStyle(20);
  const [textStoryStyle, textStoryApi] = useSprings(storyLength, () => ({
    opacity: 0,
    y: 20,
  }));
  const [creditStoryStyle, creditStoryApi] = useTextFadeInStyle(20);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasEntered(true);
        }
      },
      { threshold: 0.2 },
    );

    if (refContainerStory.current) observer.observe(refContainerStory.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasEntered) return;

    // reset
    titleStoryApi.start({ opacity: 0, y: 20, immediate: true });
    textStoryApi.start((i) => ({ opacity: 0, y: 20, immediate: true }));
    creditStoryApi.start({ opacity: 0, y: 20, immediate: true });
    imgStoryApi.start({ x: -500, immediate: true });

    // start
    titleStoryApi.start({ opacity: 1, y: 0, delay: 300 });
    textStoryApi.start((i) => ({
      opacity: 1,
      y: 0,
      delay: (i + 1) * 800,
    }));
    creditStoryApi.start({
      opacity: 1,
      y: 0,
      delay: (storyLength + 1) * 800,
    });
    imgStoryApi.start({ x: 0, config: { tension: 300, friction: 40 } });
  }, [
    storyDisplay,
    storyLength,
    hasEntered,
    titleStoryApi,
    textStoryApi,
    creditStoryApi,
    imgStoryApi,
  ]);

  return {
    refContainerStory,
    textStoryStyle,
    titleStoryStyle,
    creditStoryStyle,
    imgStoryStyle,
  };
};
