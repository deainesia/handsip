import { useState, useLayoutEffect } from "react";
import { heroSlides } from "../data/hero";
import useMeasure from "react-use-measure";

export default function Hero({ height, width }) {
  const [currentSlide, setCurrentSlide] = useState(1);

  const [containerRef, { width: containerWidth, height: containerHeight }] =
    useMeasure();

  const [imageSize, setImageSize] = useState([null, null]);
  const [imageHeight, imageWidth] = imageSize;

  useLayoutEffect(() => {
    if (containerHeight && height && containerWidth && width) {
      const calcImageHeight = containerHeight - height + 30;
      const calcImageWidth = containerWidth - width + 30;
      setImageSize([calcImageHeight, calcImageWidth]);
    }

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 30000);

    return () => clearInterval(interval);
  }, [containerHeight, containerWidth, height, width]);

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
              <p className="brand-text">HandSip.</p>
              <p className="brand-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
