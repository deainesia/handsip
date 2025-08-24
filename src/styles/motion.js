import {
  useSpring,
  useSprings,
  easings,
  useTrail,
  useSpringRef,
  useChain,
  useTransition,
} from "@react-spring/web";
import { useRef, useEffect } from "react";

const useMoveToRight = (ref, from, to) => {
  return useSpring({
    ref: ref,
    from: { width: `${from}%` },
    to: { width: `${to}%` },
    config: { duration: 1000, easing: easings.easeInExpo },
  });
};

const useMoveToTop = (ref) => {
  return useSpring({
    ref: ref,
    from: { x: 1000 },
    to: { x: 0 },
    config: { duration: 1000, easing: easings.easeInExpo },
  });
};

export const useFadeIn = (ref, y) => {
  return useSpring({
    ref: ref,
    from: { opacity: 0, y: y },
    to: { opacity: 1, y: 0 },
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

const useImageCarousel = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "translateY(0%)" },
    to: { transform: "translateY(-50%)" },
    config: { duration: 50000, easing: (t) => t },
    loop: true,
  });
};

const useImageCarouselMobile = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "translateX(0%)" },
    to: { transform: "translateX(-50%)" },
    config: { duration: 50000, easing: (t) => t },
    loop: true,
  });
};

export const useNavbar = (showMenu) => {
  const transitions = useTransition(showMenu, {
    from: { height: 0, opacity: 0 },
    enter: { height: 36, opacity: 1 },
    leave: { height: 0, opacity: 0 },
  });

  return { transitions };
};

export const useFooter = (showMenu) => {
  const transitions = useSpring({
    from: { opacity: 0, y: 0 },
    to: {
      opacity: showMenu ? 1 : 0,
      y: showMenu ? 0 : -20,
    },
  });

  return { transitions };
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

  useChain([ref1, ref2, ref3, ref4, ref5], [0, 0, 0.5, 1, 1.5], 1000);

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

export const useBgHeadlineMobile = () => {
  const ref1 = useSpringRef();
  const ref2 = useSpringRef();
  const ref3 = useSpringRef();
  const ref4 = useSpringRef();
  const ref5 = useSpringRef();
  const ref6 = useSpringRef();

  const bgHeadline1Mobile = useFadeIn(ref1);
  const bgHeadline2Mobile = useMoveToTop(ref2);
  const bgHeadline3Mobile = useMoveToTop(ref3);
  const bgHeadline4Mobile = useMoveToTop(ref4);
  const imgHeadline5Mobile = useFadeIn(ref5);
  const imgHeadline6Mobile = useImageCarouselMobile(ref6);

  useChain(
    [ref1, ref2, ref3, ref4, ref5, ref6],
    [0.5, 0.5, 1, 1.5, 2.5, 2.8],
    1000,
  );

  return {
    bgHeadline1Mobile,
    bgHeadline2Mobile,
    bgHeadline3Mobile,
    bgHeadline4Mobile,
    imgHeadline5Mobile,
    imgHeadline6Mobile,
  };
};

export const useCardMotion = (inView, data) => {
  const titleCardStyle = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
    config: { tension: 300, friction: 30 },
  });

  const cardStyle = useSprings(
    data.length,
    data.map((item, i) => ({
      opacity: inView ? 1 : 0,
      transform: inView
        ? "translateY(0px) scale(1)"
        : "translateY(50px) scale(0.1)",
      delay: i * 200,
    })),
  );

  return { titleCardStyle, cardStyle };
};

export const useHighlightMotion = (inView) => {
  const bgHiglight1Style = useSpring({
    opacity: inView ? 1 : 0,
    config: { tension: 300, friction: 30 },
  });
  const bgHiglight2Style = useSpring({
    opacity: inView ? 1 : 0,
    delay: 300,
    config: { tension: 300, friction: 30 },
  });
  const bgHiglight3Style = useSpring({
    opacity: inView ? 1 : 0,
    delay: 600,
    config: { tension: 300, friction: 30 },
  });
  const bgHiglight4Style = useSpring({
    opacity: inView ? 1 : 0,
    delay: 900,
    config: { tension: 300, friction: 30 },
  });
  const imgHiglightStyle = useSpring({
    opacity: inView ? 1 : 0,
    delay: 1000,
    config: { tension: 300, friction: 30 },
  });

  const textHighlightStyle = useSpring({
    opacity: inView ? 1 : 0,
    delay: 1200,
    config: { tension: 300, friction: 30 },
  });

  const buttonHighlightStyle = useSpring({
    opacity: inView ? 1 : 0,
    y: inView ? 0 : 50,
    scale: inView ? 1 : 0.1,
    delay: 1300,
    config: { tension: 300, friction: 20 },
  });

  return {
    bgHiglight1Style,
    bgHiglight2Style,
    bgHiglight3Style,
    bgHiglight4Style,
    imgHiglightStyle,
    textHighlightStyle,
    buttonHighlightStyle,
  };
};

export const useStoryMotion = (inView, storyById, storyDisplay) => {
  const storyLength = storyById ? storyById.story.length : 0;
  const prevStory = useRef(storyDisplay);

  let move = 0;
  if (storyDisplay > prevStory.current) {
    move = storyDisplay - prevStory.current === 1 ? -500 : 500;
  } else if (storyDisplay < prevStory.current) {
    move = prevStory.current - storyDisplay === 1 ? 500 : -500;
  }

  const [imgStoryStyle, imgStoryApi] = useSpring(() => ({
    x: move,
    opacity: 0,
  }));

  const [titleStoryStyle, titleStoryApi] = useSpring(() => ({
    opacity: 0,
    y: 50,
  }));

  const [textStoryStyle, textStoryApi] = useSprings(storyLength, (i) => ({
    opacity: 0,
    y: 20,
  }));

  const [creditStoryStyle, creditStoryApi] = useSpring(() => ({
    opacity: 0,
    y: 20,
  }));

  useEffect(() => {
    if (!inView) return;

    // reset
    imgStoryApi.set({
      x: move,
      opacity: 0,
    });
    titleStoryApi.set({ opacity: 0, y: 50 });
    textStoryApi.set((i) => ({ opacity: 0, y: 20 }));
    creditStoryApi.set({ opacity: 0, y: 20 });

    // start
    imgStoryApi.start({
      x: 0,
      opacity: 1,
      config: { tension: 200, friction: 30 },
    });
    titleStoryApi.start({
      opacity: 1,
      y: 0,
      config: { tension: 200, friction: 30 },
    });
    textStoryApi.start((i) => ({
      opacity: 1,
      y: 0,
      delay: (i + 1) * 800,
      config: { tension: 200, friction: 30 },
    }));
    creditStoryApi.start({
      opacity: 1,
      y: 0,
      delay: (storyLength + 1) * 800,
      config: { tension: 200, friction: 30 },
    });

    prevStory.current = storyDisplay;
  }, [
    storyDisplay,
    inView,
    move,
    imgStoryApi,
    titleStoryApi,
    textStoryApi,
    creditStoryApi,
    storyLength,
  ]);

  return {
    imgStoryStyle,
    titleStoryStyle,
    textStoryStyle,
    creditStoryStyle,
  };
};
