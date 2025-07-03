import { useState, useLayoutEffect, useRef } from "react";
import { heroSlides } from "../data/hero";
import { useMeasureSize } from "../hooks/useMeasureSize";

export default function Hero({ size }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const containerRef = useRef();
  const [containerHeight, containerWidth] = useMeasureSize(containerRef);
  const [formHeight, formWidth] = size;

  const [imageSize, setImageSize] = useState([null, null]);
  const [imageHeight, imageWidth] = imageSize;

  useLayoutEffect(() => {
    if (containerHeight && formHeight && containerWidth && formWidth) {
      const calcImageHeight = containerHeight - formHeight + 30;
      const calcImageWidth = containerWidth - formWidth + 30;
      setImageSize([calcImageHeight, calcImageWidth]);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [containerHeight, containerWidth, formHeight, formWidth]);

  return (
    <div
      className="absolute top-0 h-screen w-screen overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute lg:right-0">
        {heroSlides.map((item, i) => (
          <div
            className={`${i === currentSlide ? "block" : "hidden"} ${item.position} relative bg-cover p-6 md:p-8 lg:p-18 lg:pt-10`}
            key={item.id}
            style={{
              backgroundImage: `url(${item.image})`,
              height:
                imageHeight && containerHeight
                  ? `${imageHeight < containerHeight / 4 ? containerHeight : imageHeight}px`
                  : "auto",
              width: imageWidth
                ? `${imageWidth < containerWidth / 4 ? containerWidth : imageWidth}px`
                : "100%",
            }}
          >
            <div className="heading-text text-secondary">
              <p className="font-bonheur text-2xl md:max-xl:text-4xl xl:text-5xl">
                HandSip.
              </p>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
