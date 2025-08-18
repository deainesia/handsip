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

export const useMoveToRight = (ref, from, to) => {
  return useSpring({
    ref: ref,
    from: { width: `${from}%` },
    to: { width: `${to}%` },
    config: { duration: 1000, easing: easings.easeInExpo },
  });
};

export const useImageCarousel = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "translateY(0%)" },
    to: { transform: "translateY(-500%)" },
    config: { duration: 50000, easing: (t) => t },
    loop: true,
  });
};

export const useFadeIn = (ref) => {
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

export const useTrailFade = (ref, length) => {
  return useTrail(length, {
    ref: ref,
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 200, friction: 30 },
  });
};

export const useScaleOut = (ref) => {
  return useSpring({
    ref: ref,
    from: { transform: "scale(1.1)", opacity: 0 },
    to: { transform: "scale(1)", opacity: 1 },
    config: { tension: 200, friction: 26 },
  });
};

export const useCardMotion = () => {
  const refContainer = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const [titleCardStyle, titleCardApi] = useSpring(() => ({
    opacity: 0,
    y: 50,
    config: { tension: 300, friction: 20 },
  }));

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
          setHasAnimated(true);
        }
      },
      { threshold: 0.1 },
    );

    if (refContainer.current) observer.observe(refContainer.current);
    return () => observer.disconnect();
  }, [titleCardApi, cardApi, hasAnimated]);

  return { refContainer, titleCardStyle, cardStyle };
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

  useChain([ref1, ref2, ref3, ref4, ref5], [0, 2, 3, 3.5, 3.7], 1000);

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
    [0, 0, 0.5, 1, 1.5, 3.5],
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
